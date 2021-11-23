using api.DTOs;
using api.Entities;
using api.Extensions;
using AutoMapper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace api.Helpers
{
    public class AutoMapperProfiles : Profile
    {
    public AutoMapperProfiles()
        {
            CreateMap<AppUser, MemberDto>()
                .ForMember(Dest => Dest.PhotoUrl,opt => opt.MapFrom(src => src.Photos.FirstOrDefault(x => x.IsMain).Url))
                .ForMember(Dest => Dest.Age,opt => opt.MapFrom(src => src.DateOfBirth.CalculateAge()))
                ;
            CreateMap<Photo, PhotoDTO>();
        }
    }
}
