using System.Collections.Generic;
using System.IO;
using System.Linq;
using DatingApp.API.Models;
using Microsoft.AspNetCore.Identity;
using Newtonsoft.Json;
using Newtonsoft.Json.Converters;

namespace DatingApp.API.Data
{
    public class Seed
    {
        private readonly UserManager<User> userManager;

        public Seed(UserManager<User> userManager)
        {
            this.userManager = userManager;
        }

        public void SeedUsers()
        {
            if (!userManager.Users.Any())
            {
                var userData = File.ReadAllText("Data/UserSeedData.json");

                var dateTimeFormat = "ddd MMM dd yyyy HH:mm:ss 'GMT'K '(UTC)'";

                var dateTimeConverter = new IsoDateTimeConverter { DateTimeFormat = dateTimeFormat };

                var users = JsonConvert.DeserializeObject<List<User>>(userData, dateTimeConverter);

                foreach (var user in users)
                {
                    userManager.CreateAsync(user, "password").Wait();
                }
            }
        }
    }
}