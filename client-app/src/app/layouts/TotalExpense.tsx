import { useEffect, useState } from 'react';
import { Transition } from 'semantic-ui-react';
import agent from '../api/agent';
import { TotalExpense } from '../models/totalexpense';


const TExpense = () => {
    const [totalExpenses, setTotalExpenses] = useState<TotalExpense[]>([]);
    const [visible, setvisible] = useState(false);

    useEffect(() => {

        agent.Expenses.totalExpense().then(response => {
            setTotalExpenses(response);
            setvisible(true);
          })
          
    }, [])
 

    return (
        <Transition visible={visible} animation='fade' duration={1000}>
        <div>
            {totalExpenses.map(totalExpense => (
                <div className='TotalExpenseDiv' key={totalExpense.id}><h1> <img  alt="money" src="/assets/money.png" /> $ {totalExpense.total}</h1><h5>Total Expenses</h5></div>
            ))}
        </div>
        </Transition>
    )
}

export default TExpense;