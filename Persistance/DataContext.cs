using Domain;
using Microsoft.EntityFrameworkCore;

namespace Persistance
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions options) : base(options)
        {
        }

        public DbSet<Expense> Expenses { get; set; }

        public DbSet<TotalExpense> TotalExpenses { get; set; }

        public DbSet<Income> TotalIncomes {get; set;}
        
        
    }
}