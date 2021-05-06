using System;
using System.Threading;
using System.Threading.Tasks;
using Domain;
using MediatR;
using Persistance;

namespace Application.Expenses
{
    public class details
    {
        public class Query : IRequest<Expense>
        {
            public Guid Id { get; set; }

        }

        public class Handler : IRequestHandler<Query, Expense>
        {
            private readonly DataContext _context;
            public Handler(DataContext context)
            {
                _context = context;
            }

            public async Task<Expense> Handle(Query request, CancellationToken cancellationToken)
            {
                return await _context.Expenses.FindAsync(request.Id);
            }
        }
    }
}