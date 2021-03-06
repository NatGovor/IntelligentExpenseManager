﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ExpenseManager.DataAccess.Repositories.Interfaces
{
    public interface IExtendedRepository<T> : IRepository<T>
    {
        IEnumerable<T> GetByUserId(string userId);
    }
}
