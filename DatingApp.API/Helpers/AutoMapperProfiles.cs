using System.Linq;
using AutoMapper;
using DatingApp.API.Dto;
using DatingApp.API.Models;

namespace DatingApp.API.Helpers
{
    public class AutoMapperProfiles : Profile
    {
        public AutoMapperProfiles()
        {
            CreateMap<User, GetUsersDto>().ForMember(destination => destination.PhotoUrl, options =>
            {
                options.MapFrom(source => source.Photos.FirstOrDefault(p => p.IsMain).Url);
            }).ForMember(destination => destination.Age, options =>
            {
                options.MapFrom(date => date.DOB.CalculateAge());
            });

            CreateMap<User, GetUserDto>().ForMember(destination => destination.PhotoUrl, options =>
            {
                options.MapFrom(source => source.Photos.FirstOrDefault(p => p.IsMain).Url);
            }).ForMember(destination => destination.Age, options =>
            {
                options.MapFrom(date => date.DOB.CalculateAge());
            });

            CreateMap<User, GetMainPhotoDto>().ForMember(destination => destination.PhotoUrl, options =>
            {
                options.MapFrom(source => source.Photos.FirstOrDefault(p => p.IsMain).Url);
            });

            CreateMap<UpdateUserDto, User>();

            CreateMap<RegisterUserDto, User>();

            CreateMap<Photo, GetUserPhotosDto>();

            CreateMap<Photo, GetPhotoDto>();

            CreateMap<AddPhotoDto, Photo>();

            CreateMap<CreateMessageDto, Message>().ReverseMap();

            CreateMap<Message, GetMessagesDto>().ForMember(m => m.SenderPhotoUrl, options =>
            {
                options.MapFrom(u => u.Sender.Photos.FirstOrDefault(p => p.IsMain).Url);
            }).ForMember(m => m.RecipientPhotoUrl, options =>
            {
                options.MapFrom(u => u.Recipient.Photos.FirstOrDefault(p => p.IsMain).Url);
            });
        }
    }
}