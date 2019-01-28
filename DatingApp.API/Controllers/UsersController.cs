using System;
using System.Collections.Generic;
using System.Security.Claims;
using System.Threading.Tasks;
using AutoMapper;
using DatingApp.API.Data;
using DatingApp.API.Dto;
using DatingApp.API.Helpers;
using DatingApp.API.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace DatingApp.API.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    [ServiceFilter(typeof(LogUserActivity))]
    public class UsersController : ControllerBase
    {
        private readonly IDatingRepository repository;

        private readonly IMapper mapper;

        public UsersController(IDatingRepository repository, IMapper mapper)
        {
            this.mapper = mapper;
            this.repository = repository;
        }

        [HttpGet]
        public async Task<IActionResult> GetUsers([FromQuery]UserParams userParams)
        {
            var currentUserId = int.Parse(User.FindFirst(ClaimTypes.NameIdentifier).Value);

            var currentUser = await repository.GetUser(currentUserId);

            userParams.UserId = currentUserId;

            if (string.IsNullOrEmpty(userParams.Gender))
            {
                userParams.Gender = currentUser.Gender == "male" ? "female" : "male";
            }

            var users = await repository.GetUsers(userParams);

            var result = mapper.Map<IEnumerable<GetUsersDto>>(users);

            Response.AddPagination(users.CurrentPage, users.ItemsPerPage, users.TotalPages, users.TotalItems);

            return Ok(result);
        }

        [HttpGet("{id}", Name = "GetUser")]
        public async Task<IActionResult> GetUser(int id)
        {
            var user = await repository.GetUser(id);

            var result = mapper.Map<GetUserDto>(user);

            return Ok(result);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateUser(int id, UpdateUserDto updateUserDto)
        {
            if (id != int.Parse(User.FindFirst(ClaimTypes.NameIdentifier).Value))
            {
                return Unauthorized();
            }
            var user = await repository.GetUser(id);

            var result = mapper.Map(updateUserDto, user);

            if (await repository.SaveAll())
            {
                return NoContent();
            }
            throw new Exception($"Update user {id} save fail");
        }

        [HttpPost("{senderId}/like/{recipientId}")]
        public async Task<IActionResult> LikeUser(int senderId, int recipientId)
        {
            if (senderId != int.Parse(User.FindFirst(ClaimTypes.NameIdentifier).Value))
            {
                return Unauthorized();
            }
            var like = await repository.GetLike(senderId, recipientId);

            if (like != null)
            {
                return BadRequest("User already liked");
            }

            if (await repository.GetUser(recipientId) == null)
            {
                return NotFound();
            }
            
            like = new Like
            {
                LikerId = senderId,
                LikeeId = recipientId
            };
            repository.Add<Like>(like);

            if (await repository.SaveAll())
            {
                return Ok();
            }
            return BadRequest("Like user failure");
        }
    }
}