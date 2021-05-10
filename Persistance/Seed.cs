using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Domain;
using Persistance;

namespace Persistence
{
    public class Seed
    {
        public static async Task SeedData(DataContext context)
        {
            if (context.Expenses.Any()) return;

            var expenses = new List<Expense>
            {
                new Expense
                {
                    Name = "Past Activity 1",
                    Date = DateTime.Now.AddMonths(-2),
                    Description = "Activity 2 months ago",
                    ExpenseType = "food",
                    Amount = 15.99,
                },
                new Expense
                {
                    Name = "Past Activity 2",
                    Date = DateTime.Now.AddMonths(-7),
                    Description = "Activity 2 months ago",
                    ExpenseType = "utility",
                    Amount = 35.68,
                },
                new Expense
                {
                    Name = "Past Activity 3",
                    Date = DateTime.Now.AddMonths(-11),
                    Description = "Activity 2 months ago",
                    ExpenseType = "school",
                    Amount = 4000,
                },
                new Expense
                {
                    Name = "Past Activity 4",
                    Date = DateTime.Now.AddMonths(-3),
                    Description = "Activity 2 months ago",
                    ExpenseType = "transport",
                    Amount = 630,
                },
                new Expense
                {
                    Name = "Past Activity 5",
                    Date = DateTime.Now.AddMonths(-9),
                    Description = "Activity 2 months ago",
                    ExpenseType = "hobby",
                    Amount = 99.99,
                },
                new Expense
                {
                    Name = "Past Activity 6",
                    Date = DateTime.Now.AddMonths(-22),
                    Description = "Activity 2 months ago",
                    ExpenseType = "food",
                    Amount = 12.99,
                },
                new Expense
                {
                    Name = "Past Activity 7",
                    Date = DateTime.Now.AddMonths(-42),
                    Description = "Activity 2 months ago",
                    ExpenseType = "food",
                    Amount = 32.58,
                },
                new Expense
                {
                    Name = "Past Activity 8",
                    Date = DateTime.Now.AddMonths(-32),
                    Description = "Activity 2 months ago",
                    ExpenseType = "hobby",
                    Amount = 22,
                },
                new Expense
                {
                    Name = "Past Activity 9",
                    Date = DateTime.Now.AddMonths(-7),
                    Description = "Activity 2 months ago",
                    ExpenseType = "school",
                    Amount = 232.99,
                },
                new Expense
                {
                    Name = "Past Activity 10",
                    Date = DateTime.Now.AddMonths(-6),
                    Description = "Activity 2 months ago",
                    ExpenseType = "food",
                    Amount = 12.99,
                },
            };

            if (context.TotalExpenses.Any()) return;

            var totalExpenses = new List<TotalExpense>
            {
                new TotalExpense
                {
                     Utility = 456, 
                     School = 345,
                     Hobby = 99283,
                     Transport = 9893,
                     Food = 9989
        
     
    }   
            };

await context.Expenses.AddRangeAsync(expenses);
await context.TotalExpenses.AddRangeAsync(totalExpenses);
await context.SaveChangesAsync();
        }
    }
}