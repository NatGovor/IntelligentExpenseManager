using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ExpenseManager.Api.Models
{
    public class AuthResultModel
    {
        public bool IsSuccess { get; set; }
        public UserModel User { get; set; }
    }
}
