import { SyntheticEvent, useEffect, useState } from 'react';
import { Expense } from '../models/expense';
import axios from 'axios';
import dateFormat from 'dateformat';
import { Button, Icon } from 'semantic-ui-react';



const ExpenseList = () => {

    const [expenses, setExpenses] = useState<Expense[]>([]);
    const [submitting, setSubmitting] = useState(false);
    const [target, setTarget] = useState('');

    useEffect(() => {
        axios.get<Expense[]>('http://localhost:5000/api/expenses').then(response => {
            setExpenses(response.data);
        })
    }, [])

    function DeleteActivity(id: string) {
        setSubmitting(true);
        axios.delete(`http://localhost:5000/api/expenses/${id}`).then(() => {
            setExpenses([...expenses.filter(x => x.id !== id)]);
            setSubmitting(false);
        })

    }

    function handleActivityDelete(e: SyntheticEvent<HTMLImageElement>, id: string) {
        setTarget(e.currentTarget.name);
        DeleteActivity(id);
    }

    return (
        <div className="ExpenseDiv">
            <h4>Transactions</h4>
            {expenses.map(expense => (
                <div className="ExpenseList" key={expense.id}>
                    <div className="entries">
                        <div className="items">
                            <div className="etype">
                                <img alt="icons" src={`/assets/${expense.expenseType}.png`} />
                            </div>
                            

                            
                            <div className="typeamount">
                            <small className="type">$ {expense.amount}</small>
                            <div className="Tbutton">
                                <Button
                                    loading={submitting && target === expense.id}
                                    onClick={(e: any) => handleActivityDelete(e, expense.id)}
                                    floated='right'
                                    size= 'mini'
                                    icon >
                                    <Icon name='trash' />

                                </Button>
                            </div>
                              

                                <h6>{expense.name}</h6>

                                <small>{(dateFormat(expense.date, "mmmm dS"))}</small>

                            </div>

                        </div>

                    </div>
                </div>
            ))}
        </div>
    )

}

export default ExpenseList;
