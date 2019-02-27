using System;
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
    [Route("api/users/{userId}/[controller]")]
    [ApiController]
    [ServiceFilter(typeof(LogUserActivity))]
    public class MessagesController : ControllerBase
    {
        private readonly IDatingRepository repository;

        private readonly IMapper mapper;

        public MessagesController(IDatingRepository repository, IMapper mapper)
        {
            this.mapper = mapper;
            this.repository = repository;
        }

        [HttpGet("{id}", Name = "GetMessage")]
        public async Task<IActionResult> GetMessage(int userId, int id)
        {
            if (userId != int.Parse(User.FindFirst(ClaimTypes.NameIdentifier).Value))
            {
                return Unauthorized();
            }

            var message = await repository.GetMessage(id);

            if (message == null)
            {
                return NotFound();
            }
            return Ok(message);
        }

        [HttpPost]
        public async Task<IActionResult> CreateMessage(int userId, CreateMessageDto createMessageDto)
        {
            if (userId != int.Parse(User.FindFirst(ClaimTypes.NameIdentifier).Value))
            {
                return Unauthorized();
            }

            createMessageDto.SenderId = userId;

            var recipient = await repository.GetUser(createMessageDto.RecipientId);

            if (recipient == null)
            {
                return BadRequest("User not found");
            }

            var message = mapper.Map<Message>(createMessageDto);

            repository.Add(message);

            var result = mapper.Map<CreateMessageDto>(message);

            if (await repository.SaveAll())
            {
                return CreatedAtRoute("GetMessage", new { id = message.Id}, result);
            }
            throw new Exception($"Create message save fail");
        }
    }
}