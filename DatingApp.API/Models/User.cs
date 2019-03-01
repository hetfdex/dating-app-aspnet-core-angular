using System;
using System.Collections.Generic;
using Microsoft.AspNetCore.Identity;

namespace DatingApp.API.Models
{
    public class User : IdentityUser<int>
    {
        public string Alias { get; set; }
        public string Gender { get; set; }
        public string City { get; set; }
        public string Country { get; set; }
        public string Bio { get; set; }
        public string LookingFor { get; set; }
        public string Hobbies { get; set; }

        public DateTime DOB { get; set; }
        public DateTime Created { get; set; }
        public DateTime LastActive { get; set; }

        public ICollection<Photo> Photos { get; set; }
        public ICollection<Like> Likers { get; set; }
        public ICollection<Like> Likees { get; set; }
        public ICollection<Message> MessagesSent { get; set; }
        public ICollection<Message> MessagesReceived { get; set; }

        public ICollection<UserRole> UserRoles { get; set; }
    }
}