﻿using api.Extensions;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace api.Entities
{
    public class AppUser
    {
        public int Id { get; set; }
        public string UserName { get; set; }

        public byte[] PasswordHash { get; set; }

        public byte[] PasswordSalt { get; set; }

        public DateTime DateOfBirth { get; set; }

        public String KnownAs { get; set; }

        public DateTime Created { get; set; }

        public DateTime LastActive { get; set; }


        public String Gender { get; set; }

        public String Introduction { get; set; }

        public String LookingFor { get; set; }

        public String Interests { get; set; }

        public String City { get; set; }

        public String MyProperty { get; set; }
        public String Country { get; set; }

        public ICollection<Photo> Photos { get; set; }

        public int GetAge()
        {
            return DateOfBirth.CalculateAge();
        } 

    }
}
