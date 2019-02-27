using System;

namespace DatingApp.API.Dto
{
    public class CreateMessageDto
    {
        public int SenderId { get; set; }
        public int RecipientId { get; set; }

        public string Content { get; set; }

        public DateTime DateSent { get; set; }

        public CreateMessageDto()
        {
            DateSent = DateTime.Now;
        }
    }
}