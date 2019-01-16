using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using AutoMapper;
using CloudinaryDotNet;
using CloudinaryDotNet.Actions;
using DatingApp.API.Data;
using DatingApp.API.Dto;
using DatingApp.API.Helpers;
using DatingApp.API.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;

namespace DatingApp.API.Controllers
{
    [Authorize]
    [Route("api/users/{userId]/photos")]
    [ApiController]
    public class PhotosController : ControllerBase
    {
        private readonly IDatingRepository repository;
        private readonly IMapper mapper;
        private readonly IOptions<CloudinarySettings> cloudinarySettings;
        private Cloudinary cloudinary;

        public PhotosController(IDatingRepository repository, IMapper mapper, IOptions<CloudinarySettings> cloudinarySettings)
        {
            this.cloudinarySettings = cloudinarySettings;
            this.mapper = mapper;
            this.repository = repository;

            Account account = new Account(cloudinarySettings.Value.CloudName, cloudinarySettings.Value.ApiKey, cloudinarySettings.Value.ApiSecret);

            cloudinary = new Cloudinary(account);
        }

        [HttpGet("{id}", Name = "GetPhoto")]
        public async Task<IActionResult> GetPhoto(int id)
        {
            var photo = await repository.GetPhoto(id);

            var result = mapper.Map<GetPhotoDto>(photo);

            return Ok(result);
        }

        [HttpPost]
        public async Task<IActionResult> AddPhoto(int userId, AddPhotoDto addPhotoDto)
        {
            if (userId != int.Parse(User.FindFirst(ClaimTypes.NameIdentifier).Value)) {
                return Unauthorized();
            }

            var user = await repository.GetUser(userId);

            var file = addPhotoDto.File;

            var imageUploadResult = new ImageUploadResult();

            if (file.Length > 0) {
                using (var stream = file.OpenReadStream())
                {
                    var imageUploadParams = new ImageUploadParams()
                    {
                        File = new FileDescription(file.Name, stream),
                        Transformation = new Transformation().Width(500).Height(500).Crop("fill").Gravity("face")
                    };
                    imageUploadResult = cloudinary.Upload(imageUploadParams);
                }
            }
            addPhotoDto.Url = imageUploadResult.Uri.ToString();
            addPhotoDto.PublicId = imageUploadResult.PublicId;

            var photo = mapper.Map<Photo>(addPhotoDto);

            if (!user.Photos.Any(p => p.IsMain)) {
                photo.IsMain = true;
            }

            user.Photos.Add(photo);

            if (await repository.SaveAll()) {
                return CreatedAtRoute();
            }
            return BadRequest("Add photo failure");
        }
    }
}