using System;
using System.Collections.Generic;
using System.Text;
using AuthCentral.Core.Models;
using AutoMapper;
using Client = IdentityServer4.EntityFramework.Entities.Client;

namespace AuthCentral.Data.Ids4
{
    class Ids4AutoMapperProfile : Profile
    {
        public Ids4AutoMapperProfile()
        {
            CreateMap<Client, Core.Models.Client>()
                .ForMember(dest => dest.Name, opt => opt.MapFrom(src => src.ClientName))
                .ForMember(dest => dest.Identifier, opt => opt.MapFrom(src => src.ClientId))
                .ForMember(dest => dest.Uri, opt => opt.MapFrom(src => src.ClientUri))
                .ReverseMap()
                .ForMember(dest => dest.ClientName, opt => opt.MapFrom(src => src.Name))
                .ForMember(dest => dest.ClientId, opt => opt.MapFrom(src => src.Identifier))
                .ForMember(dest => dest.ClientUri, opt => opt.MapFrom(src => src.Uri));
        }
    }
}
