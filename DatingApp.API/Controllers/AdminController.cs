using System.Threading.Tasks;
using DatingApp.API.Data;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Linq;
using Microsoft.EntityFrameworkCore;
using DatingApp.API.Dto;
using Microsoft.AspNetCore.Identity;
using DatingApp.API.Models;

namespace DatingApp.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AdminController : ControllerBase
    {
        private readonly DataContext dataContext;

        private readonly UserManager<User> userManager;

        public AdminController(DataContext dataContext, UserManager<User> userManager)
        {
            this.userManager = userManager;
            this.dataContext = dataContext;
        }

        [Authorize(Policy = "RequireAdmin")]
        [HttpGet("usersWithRoles")]
        public async Task<IActionResult> getUsersWithRoles()
        {
            var users = await (from user in dataContext.Users
                               orderby user.UserName
                               select new
                               {
                                   Id = user.Id,
                                   UserName = user.UserName,
                                   Roles = (from userRole in user.UserRoles join role in dataContext.Roles on userRole.RoleId equals role.Id select role.Name).ToList()
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

            editRoles = editRoles ?? new string[] {};

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
        public IActionResult getPhotosForModeration()
        {
            return Ok("Admin & Moderators only");
        }
    }
}