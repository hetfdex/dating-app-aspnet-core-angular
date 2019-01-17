using System;
using Microsoft.AspNetCore.Http;

namespace DatingApp.API.Dto
{
    public class AddPhotoDto
    {
        public string PublicId { get; set; }
        public string Url { get; set; }
        public string Description { get; set; }

        public IFormFile File { get; set; }

        public DateTime Added { get; set; } = DateTime.Now;
    }
}