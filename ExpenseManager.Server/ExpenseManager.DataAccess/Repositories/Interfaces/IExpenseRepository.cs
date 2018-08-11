using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ExpenseManager.DataAccess.Repositories.Interfaces
{
    public interface IExpenseRepository<Expense> : IRepository<Expense>, IExtendedRepository<Expense>
    {
        Expense GetByIds(string id, string sharedExpenseId);

        IEnumerable<Expense> GetInIntervalForUser(string userId, DateTime startDate, DateTime endDate);
    }
}
