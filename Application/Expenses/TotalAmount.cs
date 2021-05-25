using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Domain;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Persistance;

namespace Application.Expenses
{
    public class TotalAmount
    {
        public class Query : IRequest<Dictionary<string, double>[]> { }

        public class Handler : IRequestHandler<Query, Dictionary<string, double>[]>
        {

            private readonly DataContext _context;

            public Handler(DataContext context)
            {
                _context = context;


            }

            public async Task<Dictionary<string, double>[]> Handle(Query request, CancellationToken cancellationToken)
            {
                Dictionary<string, double> dictExpense = new Dictionary<string, double>();
                Dictionary<string,double>[] expenseArr = new Dictionary <string,double>[1];
                
                double totalUtility = _context.Expenses.Where(expense => expense.ExpenseType == "utility")
                .Select(expense => expense.Amount)
                .Sum();

                double totalSchool = _context.Expenses.Where(expense => expense.ExpenseType == "school")
                .Select(expense => expense.Amount)
                .Sum();

                double totalHobby = _context.Expenses.Where(expense => expense.ExpenseType == "hobby")
                .Select(expense => expense.Amount)
                .Sum();

                 double totalTransport = _context.Expenses.Where(expense => expense.ExpenseType == "transport")
                .Select(expense => expense.Amount)
                .Sum();

                double totalFood = _context.Expenses.Where(expense => expense.ExpenseType == "food")
                .Select(expense => expense.Amount)
                .Sum();

                double totalAll = (totalFood + totalHobby + totalSchool + totalTransport + totalUtility);


               
             

                dictExpense.Add("utility", totalUtility);
                dictExpense.Add("school", totalSchool);
                dictExpense.Add("hobby", totalHobby);
                dictExpense.Add("transport", totalTransport);
                dictExpense.Add("food", totalFood);
                dictExpense.Add("total", totalAll);

                 expenseArr[0] = dictExpense;

                return await Task.FromResult(expenseArr);
            }
        }
    }
}