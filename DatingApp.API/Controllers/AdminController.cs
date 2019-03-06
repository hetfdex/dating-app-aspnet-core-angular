using System.Threading.Tasks;
using DatingApp.API.Data;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Linq;
using Microsoft.EntityFrameworkCore;
using DatingApp.API.Dto;
using Microsoft.AspNetCore.Identity;
using DatingApp.API.Models;
using Microsoft.Extensions.Options;
using DatingApp.API.Helpers;
using CloudinaryDotNet;
using CloudinaryDotNet.Actions;

namespace DatingApp.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AdminController : ControllerBase
    {
        private readonly DataContext context;

        private readonly UserManager<User> userManager;
        
        private readonly IOptions<CloudinarySettings> cloudinarySettings;

        private Cloudinary cloudinary;

        public AdminController(DataContext context, UserManager<User> userManager, IOptions<CloudinarySettings> cloudinarySettings)
        {
            this.cloudinarySettings = cloudinarySettings;
            this.userManager = userManager;
            this.context = context;

            Account account = new Account(cloudinarySettings.Value.CloudName, cloudinarySettings.Value.ApiKey, cloudinarySettings.Value.ApiSecret);

            cloudinary = new Cloudinary(account);
        }

        [Authorize(Policy = "RequireAdmin")]
        [HttpGet("usersWithRoles")]
        public async Task<IActionResult> GetUsersWithRoles()
        {
            var users = await (from user in context.Users
                               orderby user.UserName
                               select new
                               {
                                   Id = user.Id,
                                   UserName = user.UserName,
                                   Roles = (from userRole in user.UserRoles join role in context.Roles on userRole.RoleId equals role.Id select role.Name).ToList()
                               }).ToListAsync();

            return Ok(users);
        }

        [Authorize(Policy = "RequireAdmin")]
        [HttpPost("editRoles/{userName}")]
        public async Task<IActionResult> EditRoles(string userName, EditRoleDto editRoleDto)
        {
            var user = await userManager.FindByNameAsync(userName);

            var userRoles = await userManager.GetRolesAsync(user);

            var editRoles = editRoleDto.RoleNames;

            editRoles = editRoles ?? new string[] { };

            var result = await userManager.AddToRolesAsync(user, editRoles.Except(userRoles));

            if (!result.Succeeded)
            {
                return BadRequest("Edit roles add failure");
            }

            result = await userManager.RemoveFromRolesAsync(user, userRoles.Except(editRoles));

            if (!result.Succeeded)
            {
                return BadRequest("Edit roles remove failure");
            }
            return Ok(await userManager.GetRolesAsync(user));
        }

        [Authorize(Policy = "ModeratePhoto")]
        [HttpGet("photosForModeration")]
        public async Task <IActionResult> GetPhotosForModeration()
        {
            var photos = await context.Photos.Include(u => u.User).IgnoreQueryFilters().Where(p => p.IsApproved == false).Select(u => new
            {
                Id = u.Id,
                UserName = u.User.UserName,
                Url = u.Url,
                IsApproved = u.IsApproved
            }).ToListAsync();

            return Ok(photos);
        }

        [Authorize(Policy = "ModeratePhoto")]
        [HttpPost("approvePhoto/{id}")]
        public async Task <IActionResult> ApprovePhoto(int id)
        {
            var photo = await context.Photos.IgnoreQueryFilters().FirstOrDefaultAsync(p => p.Id == id);

            photo.IsApproved = true;

            await context.SaveChangesAsync();

            return Ok();
        }

        [Authorize(Policy = "ModeratePhoto")]
        [HttpPost("rejectPhoto/{id}")]
        public async Task <IActionResult> RejectPhoto(int id)
        {
            var photo = await context.Photos.IgnoreQueryFilters().FirstOrDefaultAsync(p => p.Id == id);

            if (photo.IsMain)
            {
                return BadRequest("Cannot reject main photo");
            }

            if (photo.PublicId != null)
            {
                var deletionParams = new DeletionParams(photo.PublicId);

                var result = cloudinary.Destroy(deletionParams);

                if (result.Result == "ok")
                {
                    context.Photos.Remove(photo);
                }
            }

            if (photo.PublicId == null)
            {
                context.Photos.Remove(photo);
            }

            await context.SaveChangesAsync();

            return Ok();
        }
    }
}