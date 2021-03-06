﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ExpenseManager.DataAccess.Repositories.Interfaces
{
    public interface ISharedExpenseRepository<SharedExpense> : IRepository<SharedExpense>
    {
        IEnumerable<SharedExpense> GetByGroupId(string groupId);
    }
}
