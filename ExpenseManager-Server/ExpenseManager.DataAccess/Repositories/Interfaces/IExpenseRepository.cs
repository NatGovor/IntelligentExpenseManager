using ExpenseManager.DataAccess.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ExpenseManager.DataAccess.Repositories.Interfaces
{
    public interface IExpenseRepository
    {
        IEnumerable<Expense> GetAllExpenses();
    }
}
