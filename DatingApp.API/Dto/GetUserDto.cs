using System;
using System.Collections.Generic;
using DatingApp.API.Models;

namespace DatingApp.API.Dto
{
    public class GetUserDto
    {
        public int Id { get; set; }

        public string Username { get; set; }
        public string Alias { get; set; }
        public string Gender { get; set; }
        public string City { get; set; }
        public string Country { get; set; }
        public string Bio { get; set; }
        public string LookingFor { get; set; }
        public string Hobbies { get; set; }
        public string PhotoUrl { get; set; }

        public int Age { get; set; }

        public DateTime Created { get; set; }
        public DateTime LastActive { get; set; }

        public ICollection<GetUserPhotosDto> Photos { get; set; }
    }
}