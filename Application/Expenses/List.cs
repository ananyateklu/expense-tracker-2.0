using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;
using Domain;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Persistance;

namespace Application.Expenses
{
    public class List
    {
        public class Query : IRequest<List<Expense>> { }

        public class Handler : IRequestHandler<Query, List<Expense>>
        {
            private readonly DataContext _context;
            public Handler(DataContext context)
            {
                _context = context;
            }

            public async Task<List<Expense>> Handle(Query request, CancellationToken cancellationToken)
            {
                return await _context.Expenses.ToListAsync();
            }
        }
    }
}