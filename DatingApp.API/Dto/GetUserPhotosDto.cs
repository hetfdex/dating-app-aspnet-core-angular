using System;

namespace DatingApp.API.Dto
{
    public class GetUserPhotosDto
    {
        public int Id { get; set; }

        public string Url { get; set; }

        public string Description { get; set; }

        public bool IsMain { get; set; }

        public DateTime Added { get; set; }
    }
}