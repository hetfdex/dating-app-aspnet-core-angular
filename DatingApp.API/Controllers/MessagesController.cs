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

        [HttpGet]
        public async Task<IActionResult> GetMessages(int userId, [FromQuery]MessageParams messageParams)
        {
            if (userId != int.Parse(User.FindFirst(ClaimTypes.NameIdentifier).Value))
            {
                return Unauthorized();
            }

            messageParams.UserId = userId;

            var messages = await repository.GetMessages(messageParams);

            var result = mapper.Map<IEnumerable<GetMessagesDto>>(messages);

            Response.AddPagination(messages.CurrentPage, messages.ItemsPerPage, messages.TotalPages, messages.TotalItems);

            return Ok(result);
        }

        [HttpGet("thread/{recipientId}")]
        public async Task<IActionResult> GetMessageThread(int userId, int recipientId)
        {
            if (userId != int.Parse(User.FindFirst(ClaimTypes.NameIdentifier).Value))
            {
                return Unauthorized();
            }

            var messages = await repository.GetMessageThread(userId, recipientId);

            var result = mapper.Map<IEnumerable<GetMessagesDto>>(messages);

            return Ok(result);
        }

        [HttpPost]
        public async Task<IActionResult> CreateMessage(int userId, CreateMessageDto createMessageDto)
        {
            var sender = await repository.GetUser(userId);

            if (sender.Id != int.Parse(User.FindFirst(ClaimTypes.NameIdentifier).Value))
            {
                return Unauthorized();
            }

            createMessageDto.SenderId = sender.Id;

            var recipient = await repository.GetUser(createMessageDto.RecipientId);

            if (recipient == null)
            {
                return BadRequest("User not found");
            }

            var message = mapper.Map<Message>(createMessageDto);

            repository.Add(message);

            if (await repository.SaveAll())
            {
                var result = mapper.Map<GetMessagesDto>(message);

                return CreatedAtRoute("GetMessage", new { id = message.Id}, result);
            }
            throw new Exception("Create message fail");
        }

        [HttpPost("{id}")]
        public async Task<IActionResult> DeleteMessage(int userId, int id)
        {
            if (userId != int.Parse(User.FindFirst(ClaimTypes.NameIdentifier).Value))
            {
                return Unauthorized();
            }

            var message = await repository.GetMessage(id);

            if (message.SenderId == userId)
            {
                message.HasSenderDeleted = true;
            }

            if (message.RecipientId == userId)
            {
                message.HasRecipientDeleted = true;
            }

            if (message.HasSenderDeleted && message.HasRecipientDeleted)
            {
                repository.Delete(message);
            }

            if (await repository.SaveAll())
            {
                return NoContent();
            }
            throw new Exception("Delete message fail");
        }

        [HttpPost("{id}/read")]
        public async Task<IActionResult> MarkMessageRead(int userId, int id)
        {
            if (userId != int.Parse(User.FindFirst(ClaimTypes.NameIdentifier).Value))
            {
                return Unauthorized();
            }

            var message = await repository.GetMessage(id);

            if (message.RecipientId != userId)
            {
                return Unauthorized();
            }

            message.IsRead = true;

            message.DateRead = DateTime.Now;

            await repository.SaveAll();

            return NoContent();
        }
    }
}