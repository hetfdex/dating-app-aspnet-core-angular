using System.Collections.Generic;
using System.IO;
using System.Security.Cryptography;
using System.Text;
using DatingApp.API.Models;
using Newtonsoft.Json;
using Newtonsoft.Json.Converters;

namespace DatingApp.API.Data
{
    public class Seed
    {
        private readonly DataContext context;

        public Seed(DataContext context)
        {
            this.context = context;
        }

        public void SeedUsers()
        {
            var userData = File.ReadAllText("Data/UserSeedData.json");

            var dateTimeFormat = "ddd MMM dd yyyy HH:mm:ss 'GMT'K '(UTC)'";

            var dateTimeConverter = new IsoDateTimeConverter { DateTimeFormat = dateTimeFormat };

            var users = JsonConvert.DeserializeObject<List<User>>(userData, dateTimeConverter);

            foreach (var user in users)
            {
                byte[] passwordHash, passwordSalt;

                CreatePasswordHash("password", out passwordHash, out passwordSalt);

                user.PasswordHash = passwordHash;
                user.PasswordSalt = passwordSalt;
                user.Username = user.Username.ToLower();

                context.Users.Add(user);
            }
            context.SaveChanges();
        }

        private void CreatePasswordHash(string password, out byte[] passwordHash, out byte[] passwordSalt)
        {
            using (var hmac = new HMACSHA512())
            {
                passwordSalt = hmac.Key;

                passwordHash = hmac.ComputeHash(Encoding.UTF8.GetBytes(password));
            }
        }
    }
}