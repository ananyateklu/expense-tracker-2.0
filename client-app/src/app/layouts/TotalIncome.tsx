import { useEffect, useState } from 'react';
import { Transition } from 'semantic-ui-react';
import agent from '../api/agent';
import { TotalIncome } from '../models/totalincome';


const TExpense = () => {
    const [totalIncome, setTotalIncome] = useState<TotalIncome[]>([]);
    const [visible, setvisible] = useState(false);

    useEffect(() => {
        agent.Expenses.totalIncome().then(response => {
            setTotalIncome(response);
            setvisible(true);
          })
    }, [])

    return (
        <Transition visible={visible} animation='fade' duration={1000}>
        <div>
            
            {totalIncome.map(totalincome => (
                <div className='TotalIncomeDiv' key={totalincome.id}><h1> <img alt="money" src="/assets/money2.png" /> ${totalincome.amount}</h1><h5>Total Income</h5></div>
            ))}
        </div>
        </Transition>
    )
}

export default TExpense;