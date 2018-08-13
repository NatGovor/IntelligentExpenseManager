using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ExpenseManager.Api.Models;
using ExpenseManager.DataAccess.Entities;
using ExpenseManager.DataAccess.Repositories.Interfaces;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace ExpenseManager.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        private readonly IUserRepository<User> _userRepository;

        public AuthController(IUserRepository<User> userRepository)
        {
            _userRepository = userRepository;
        }

        [HttpPost]
        public ActionResult<AuthResultModel> Authenticate(AuthModel authModel)
        {
            User user = _userRepository.GetByEmail(authModel.Email);

            if (user != null)
            {
                if (user.Password == authModel.Password)
                {
                    return new AuthResultModel()
                    {
                        IsSuccess = true,
                        User = new UserModel()
                        {
                            Id = user.Id,
                            Name = user.Name,
                            Email = user.Email
                        }
                    };
                }
            }

            return new AuthResultModel()
            {
                IsSuccess = false,
                User = null
            };
        }
    }
}