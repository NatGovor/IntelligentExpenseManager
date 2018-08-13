using ExpenseManager.DataAccess.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ExpenseManager.DataAccess.Repositories.Interfaces
{
    public interface IRepository<T>
    {
        IEnumerable<T> GetAll();

        T GetById(string id);

        string Add(T item);

        void Update(T item);

        void Remove(string id);
    }
}
