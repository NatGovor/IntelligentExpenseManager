using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ExpenseManager.Api.Models;
using ExpenseManager.DataAccess.Entities;
using ExpenseManager.DataAccess.Repositories.Interfaces;
using ExpenseManager.DataAccess.Services;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json.Linq;

namespace ExpenseManager.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserSettingsController : ControllerBase
    {
        private readonly IRepository<UserSettings> _userSettingsRepository;

        public UserSettingsController(IRepository<UserSettings> userSettingsRepository)
        {
            _userSettingsRepository = userSettingsRepository;
        }

        [HttpGet]
        public ActionResult<List<UserSettings>> GetAll()
        {
            return _userSettingsRepository.GetAll().ToList() ?? new List<UserSettings>();
        }

        [HttpGet("{id}", Name = "GetUserSettings")]
        public ActionResult<UserSettings> GetById(string id)
        {
            UserSettings userSettings = _userSettingsRepository.GetById(id);
            if (userSettings == null)
            {
                return NotFound();
            }
            return userSettings;
        }

        [HttpPost]
        public IActionResult Create(UserSettings userSettings)
        {
            _userSettingsRepository.Add(userSettings);
            return CreatedAtRoute("GetUserSettings", new { id = userSettings.UserId }, userSettings);
        }
    }
}