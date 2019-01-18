using System;
using System.ComponentModel.DataAnnotations;

namespace DatingApp.API.Dto
{
    public class RegisterUserDto
    {
        [Required]
        public string Username { get; set; }
        [Required]
        public string Gender { get; set; }
        [Required]
        public string City { get; set; }
        [Required]
        public string Country { get; set; }

        [Required]
        public DateTime DOB { get; set; }
        public DateTime Created { get; set; } = DateTime.Now;
        public DateTime LastActive { get; set; } = DateTime.Now;


        [Required]
        [StringLength(12, MinimumLength = 6, ErrorMessage = "Password must be between 6 and 12 characters")]
        public string Password { get; set; }
    }
}