import { useEffect, useState } from 'react';
import { Expense } from '../models/expense';
import axios from 'axios';



const ExpenseList = () => {

    const [expenses, setExpenses] = useState<Expense[]>([]);

    useEffect(() => {
        axios.get<Expense[]>('http://localhost:5000/api/expenses').then(response => {
          setExpenses(response.data);
        })
      }, [])

    return <div className="ExpenseDiv">
    {expenses.map(expense  => (
      <div className="ExpenseList" key={expense.id}>
        {expense.name}
      </div>
    ))}
  </div>
       
    

}

export default ExpenseList;
