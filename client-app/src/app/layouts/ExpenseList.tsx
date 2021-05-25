import { SyntheticEvent, useEffect, useState } from 'react';
import { Expense } from '../models/expense';
import dateFormat from 'dateformat';
import { Button, Icon, Transition } from 'semantic-ui-react';


interface Props {
    expenses: Expense[];
    deleteExpense: (id: string) => void;
    submitting: boolean;
    openForm: (id: string) => void;
    closeForm: () => void;
}

function ExpenseList({expenses, deleteExpense, submitting, openForm, closeForm }: Props) {

    const [target, setTarget] = useState('');
    const [visible, setvisible] = useState(false);


    useEffect(() => {
            setvisible(true);
    }, [])


    function handleExpenseDelete(e: SyntheticEvent<HTMLButtonElement>, id: string) {
        setTarget(e.currentTarget.name);
        deleteExpense(id);
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
                                            onClick={(e: any) => handleExpenseDelete(e, expense.id)}
                                            floated='right'
                                            size='mini'
                                            icon >
                                            <Icon
                                                name='trash alternate outline'
                                                 />

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
