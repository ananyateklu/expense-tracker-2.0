
using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;
using Domain;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Persistance;

namespace Application.Expenses
{
    public class TotalIncome
    {
        public class Query : IRequest<List<Income>> { }

        public class Handler : IRequestHandler<Query, List<Income>>
        {
            private readonly DataContext _context;
            public Handler(DataContext context)
            {
                _context = context;
            }

            public async Task<List<Income>> Handle(Query request, CancellationToken cancellationToken)
            {
                return await _context.TotalIncomes.ToListAsync();
            }
        }

    }
}