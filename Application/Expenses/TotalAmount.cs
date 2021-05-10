using System.Collections.Generic;
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
        public class Query : IRequest<List<TotalExpense>> { }

        public class Handler : IRequestHandler<Query, List<TotalExpense>>
        {

            private readonly DataContext _context;

            public Handler(DataContext context)
            {
                _context = context;


            }

            public async Task<List<TotalExpense>> Handle(Query request, CancellationToken cancellationToken)
            {
                return await _context.TotalExpenses.ToListAsync();
            }
        }
    }
}