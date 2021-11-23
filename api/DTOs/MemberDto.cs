using api.Entities;
using api.Extensions;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace api.DTOs
{
    public class MemberDto
    {
        public int Id { get; set; }
        public string UserName { get; set; }

        public int Age { get; set; }

        public String KnownAs { get; set; }

        public string PhotoUrl { get; set; }

        public DateTime Created { get; set; }

        public DateTime LastActive { get; set; }


        public String Gender { get; set; }

        public String Introduction { get; set; }

        public String LookingFor { get; set; }

        public String Interests { get; set; }

        public String City { get; set; }

        public String MyProperty { get; set; }
        public String Country { get; set; }

        public ICollection<PhotoDTO> Photos { get; set; }

        
    }
}
