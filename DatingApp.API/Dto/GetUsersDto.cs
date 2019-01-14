using System;

namespace DatingApp.API.Dto
{
    public class GetUsersDto
    {
        public int Id { get; set; }

        public string Username { get; set; }

        public string Alias { get; set; }

        public string Gender { get; set; }

        public string City { get; set; }

        public string Country { get; set; }

        public string PhotoUrl { get; set; }

        public int Age { get; set; }

        public DateTime Created { get; set; }

        public DateTime LastActive { get; set; }
    }
}