using System;

namespace DatingApp.API.Dto
{
    public class GetMessagesDto
    {
        
        public int Id { get; set; }
        public int SenderId { get; set; }
        public int RecipientId { get; set; }

        public string SenderAlias { get; set; }
        public string RecipientAlias { get; set; }
        public string SenderPhotoUrl { get; set; }
        public string RecipientPhotoUrl { get; set; }
        public string Content { get; set; }

        public bool IsRead { get; set; }

        public DateTime? DateRead { get; set; }
        public DateTime DateSent { get; set; }
    }
}