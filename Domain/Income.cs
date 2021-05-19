using System;

namespace Domain
{
    public class Income
    {
        public Guid Id { get; set; }
        public string IncomeType { get; set; }
        public double Amount { get; set; }
    }
}