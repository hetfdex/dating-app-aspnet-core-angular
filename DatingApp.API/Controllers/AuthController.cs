using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using AutoMapper;
using DatingApp.API.Data;
using DatingApp.API.Dto;
using DatingApp.API.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;

namespace DatingApp.API.Controllers
{
    [AllowAnonymous]
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        private readonly IAuthRepository repository;

        private readonly IConfiguration configuration;

        private readonly IMapper mapper;

        public AuthController(IAuthRepository repository, IConfiguration configuration, IMapper mapper)
        {
            this.mapper = mapper;
            this.repository = repository;
            this.configuration = configuration;
        }

        [HttpPost("register")]
        public async Task<IActionResult> Register(RegisterUserDto registerUserDto)
        {
            registerUserDto.Username = registerUserDto.Username.ToLower();

            if (await repository.UserExists(registerUserDto.Username))
            {
                return BadRequest("Username already exists");
            }

            Console.WriteLine(registerUserDto.Username + registerUserDto.City);
            
            var user = mapper.Map<User>(registerUserDto);

            var registeredUser = await repository.Register(user, registerUserDto.Password);

            var result = mapper.Map<GetUserDto>(registeredUser);

            return CreatedAtRoute("GetUser", new {controller = "Users", id = registeredUser.Id}, result);
        }

        [HttpPost("login")]
        public async Task<IActionResult> Login(LoginUserDto loginUserDto)
        {
            var user = await repository.Login(loginUserDto.Username.ToLower(), loginUserDto.Password);

            if (user == null)
            {
                return Unauthorized();
            }

            var claims = new[]
            {
                new Claim(ClaimTypes.NameIdentifier, user.Id.ToString()),
                new Claim(ClaimTypes.Name, user.UserName.ToString()),
            };

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

            var userPhotoUrl = string.Empty;
            
            if (user.Photos.Count > 0)
            {
                userPhotoUrl = user.Photos.FirstOrDefault(p => p.IsMain).Url;
            }

            var userGender = user.Gender;

            return Ok(new
            {
                token = tokenHandler.WriteToken(token),
                userPhotoUrl,
                userGender
            });
        }
    }
}