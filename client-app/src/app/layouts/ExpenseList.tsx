import { useEffect, useState } from 'react';
import { Expense } from '../models/expense';
import axios from 'axios';
import dateFormat from 'dateformat';



const ExpenseList = () => {

    const [expenses, setExpenses] = useState<Expense[]>([]);

    useEffect(() => {
        axios.get<Expense[]>('http://localhost:5000/api/expenses').then(response => {
            setExpenses(response.data);
        })
    }, [])


    return <div className="ExpenseDiv">
        {expenses.map(expense => (
            <div className="ExpenseList" key={expense.id}>
                <div className="entries">
                    <div className="items">
                        <div className="etype">
                            <img alt="icons" src={`/assets/${expense.expenseType}.png`} />
                        </div>
                        <img className="remove" alt="remove" src="https://img.icons8.com/fluent-systems-regular/50/4a90e2/filled-trash.png" />
                        <div className="typeamount">
                            <small className="type">$ {expense.amount}</small>

                            <h6 className="iname">{expense.name}</h6>

                            <small>{(dateFormat(expense.date, "mmmm dS"))}</small>

                        </div>

                    </div>

                </div>
            </div>
        ))}
    </div>



}

export default ExpenseList;
