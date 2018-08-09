using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ExpenseManager.DataAccess.Repositories.Interfaces
{
    public interface ISharedExpenseRepository<T> : IRepository<T>
    {
        IEnumerable<T> GetByGroupId(string groupId);
    }
}
