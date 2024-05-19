using AutoMapper;
using Yad2_Clone.Models.User;
using Yad2_Clone.ViewModels;

namespace Yad2_Clone.Mapper
{
    public class AutoMapperProfile : Profile
    {
        public AutoMapperProfile() 
        {

            CreateMap<SignupModel, AppUser>()
                .ForMember(dest => dest.Email, opt => opt.MapFrom(src => src.Email))
                .ForMember(dest => dest.UserName, opt => opt.MapFrom(src => src.Email))
                .ForMember(dest => dest.FirstName, opt => opt.MapFrom(src => src.FirstName))
                .ForMember(dest => dest.LastName, opt => opt.MapFrom(src => src.LastName))
                .ForMember(dest => dest.PhoneNumber, opt => opt.MapFrom(src => src.PhoneNumber));
                
        }
    }
}
