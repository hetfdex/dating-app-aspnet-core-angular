using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using AutoMapper;
using DatingApp.API.Dto;
using DatingApp.API.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;

namespace DatingApp.API.Controllers
{
    [AllowAnonymous]
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        private readonly IConfiguration configuration;

        private readonly IMapper mapper;

        private readonly UserManager<User> userManager;

        private readonly SignInManager<User> signInManager;

        public AuthController(IConfiguration configuration, IMapper mapper, UserManager<User> userManager, SignInManager<User> signInManager)
        {
            this.signInManager = signInManager;
            this.userManager = userManager;
            this.mapper = mapper;
            this.configuration = configuration;
        }

        [HttpPost("register")]
        public async Task<IActionResult> Register(RegisterUserDto registerUserDto)
        {
            var user = mapper.Map<User>(registerUserDto);

            var registeredUser = await userManager.CreateAsync(user, registerUserDto.Password);
            
            if (registeredUser.Succeeded)
            {
                var result = mapper.Map<GetUserDto>(user);

                return CreatedAtRoute("GetUser", new { controller = "Users", id = user.Id }, result);
            }
            return BadRequest(registeredUser.Errors);
        }

        [HttpPost("login")]
        public async Task<IActionResult> Login(LoginUserDto loginUserDto)
        {
            var user = await userManager.FindByNameAsync(loginUserDto.Username);

            var result = await signInManager.CheckPasswordSignInAsync(user, loginUserDto.Password, false);

            if (result.Succeeded)
            {
                var userPhotoUrl = string.Empty;

                var loggedInUser = await userManager.Users.Include(p => p.Photos).FirstOrDefaultAsync(u => u.NormalizedUserName == loginUserDto.Username.ToUpper());

                if (loggedInUser.Photos.Count > 0)
                {
                    userPhotoUrl = loggedInUser.Photos.FirstOrDefault(p => p.IsMain).Url;
                }

                var userGender = loggedInUser.Gender;

                return Ok(new
                {
                    token = GenerateJwtToken(user).Result,
                    userPhotoUrl,
                    userGender
                });
            }
            return Unauthorized();
        }

        private async Task<string> GenerateJwtToken(User user)
        {
            var claims = new List<Claim>
           {
                new Claim(ClaimTypes.NameIdentifier, user.Id.ToString()),
                new Claim(ClaimTypes.Name, user.UserName.ToString()),
            };

            var roles = await userManager.GetRolesAsync(user);

            foreach (var role in roles)
            {
                claims.Add(new Claim(ClaimTypes.Role, role));
            }

            var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(configuration.GetSection("AppSettings:Token").Value));

            var credentials = new SigningCredentials(key, SecurityAlgorithms.HmacSha512Signature);

            var tokenDescriptor = new SecurityTokenDescriptor()
            {
                Subject = new ClaimsIdentity(claims),
                Expires = DateTime.Now.AddDays(1),
                SigningCredentials = credentials
            };

            var tokenHandler = new JwtSecurityTokenHandler();

            var token = tokenHandler.CreateToken(tokenDescriptor);

            return tokenHandler.WriteToken(token);
        }
    }
}