using System;

namespace DatingApp.API.Models
{
    public class Message
    {
        public int Id { get; set; }
        public int SenderId { get; set; }
        public int RecipientId { get; set; }

        public User Sender { get; set; }
        public User Recipient { get; set; }

        public string Content { get; set; }

        public bool IsRead { get; set; }
        public bool HasSenderDeleted { get; set; }
        public bool HasRecipientDeleted { get; set; }

        public DateTime? DateRead { get; set; }
        public DateTime DateSent { get; set; }
    }
}