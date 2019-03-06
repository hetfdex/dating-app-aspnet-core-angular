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

        private readonly RoleManager<Role> roleManager;

        public Seed(UserManager<User> userManager, RoleManager<Role> roleManager)
        {
            this.roleManager = roleManager;
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

                var roles = new List<Role>
                {
                    new Role { Name = "Member"},
                    new Role { Name = "Admin"},
                    new Role { Name = "Moderator"},
                    new Role { Name = "VIP"}
                };

                foreach (var role in roles)
                {
                    roleManager.CreateAsync(role).Wait();
                }

                foreach (var user in users)
                {
                    userManager.CreateAsync(user, "password").Wait();

                    userManager.AddToRoleAsync(user, "Member").Wait();
                }

                var admin = new User
                {
                    UserName = "Admin"
                };

                var result = userManager.CreateAsync(admin, "password").Result;

                if (result.Succeeded)
                {
                    var userAdmin = userManager.FindByNameAsync("Admin").Result;

                    userManager.AddToRolesAsync(admin, new[] { "Admin", "Moderator" }).Wait();
                }
            }
        }
    }
}