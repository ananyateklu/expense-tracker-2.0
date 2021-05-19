import { SyntheticEvent, useEffect, useState } from 'react';
import { Expense } from '../models/expense';
import dateFormat from 'dateformat';
import { Button, Icon, Transition } from 'semantic-ui-react';
import agent from '../api/agent';



const ExpenseList = () => {

    const [expenses, setExpenses] = useState<Expense[]>([]);
    const [submitting, setSubmitting] = useState(false);
    const [target, setTarget] = useState('');
    const [visible, setvisible] = useState(false);


    useEffect(() => {
        agent.Expenses.list().then(response => {
            setExpenses(response);
            setvisible(true);
        })
    }, [])

    function DeleteActivity(id: string) {
        setSubmitting(true);
        agent.Expenses.delete(id).then(() => {
            setExpenses([...expenses.filter(x => x.id !== id)]);
            setSubmitting(false);
        })

    }

    function handleActivityDelete(e: SyntheticEvent<HTMLButtonElement>, id: string) {
        setTarget(e.currentTarget.name);
        DeleteActivity(id);
    }

    return (
        <Transition visible={visible} animation='fade up' duration={1000}>
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
                                            name={expense.id}
                                            loading={submitting && target === expense.id}
                                            onClick={(e: any) => handleActivityDelete(e, expense.id)}
                                            floated='right'
                                            size='mini'
                                            icon >
                                            <Icon
                                                name='trash' />

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
        </Transition>
    )

}

export default ExpenseList;
