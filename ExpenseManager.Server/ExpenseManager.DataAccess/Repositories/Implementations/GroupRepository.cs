using ExpenseManager.DataAccess.Entities;
using ExpenseManager.DataAccess.Repositories.Interfaces;
using Microsoft.Extensions.Options;
using MongoDB.Driver;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ExpenseManager.DataAccess.Repositories.Implementations
{
    public class GroupRepository : IRepository<Group>
    {
        private readonly DbContext _context = null;

        public GroupRepository(IOptions<Settings> settings)
        {
            _context = new DbContext(settings);
        }

        public IEnumerable<Group> GetAll()
        {
            try
            {
                return _context.Groups.Find(_ => true).ToList();
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
    }
}
