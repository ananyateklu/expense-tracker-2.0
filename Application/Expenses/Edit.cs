using System.Threading;
using System.Threading.Tasks;
using AutoMapper;
using Domain;
using MediatR;
using Persistance;

namespace Application.Expenses
{
    public class Edit
    {
        public class Command : IRequest
        {
            public Expense Expense { get; set; }
        }

        public class Handler : IRequestHandler<Command>
        {
            private readonly DataContext _context;
            private readonly IMapper _mapper;
            public Handler(DataContext context, IMapper mapper)
            {
                _mapper = mapper;
                _context = context;
            }

            public async Task<Unit> Handle(Command request, CancellationToken cancellationToken)
            {
                var expense = await _context.Expenses.FindAsync(request.Expense.Id);

                _mapper.Map(request.Expense, expense);

                await _context.SaveChangesAsync();

                return Unit.Value;
            }
        }

    }
}