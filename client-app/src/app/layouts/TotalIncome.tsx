import axios from 'axios';
import { useEffect, useState } from 'react';
import { TotalExpense } from '../models/totalexpense';


const TExpense = () => {
    const [totalExpenses, setTotalExpenses] = useState<TotalExpense[]>([]);

    useEffect(() => {

        axios.get<TotalExpense[]>('http://localhost:5000/api/TotalExpense').then(response => {
            setTotalExpenses(response.data);

        })
    }, [])

    return (
        <div>
            {totalExpenses.map(totalExpense => (
                <div className='TotalIncomeDiv' key={totalExpense.id}><h1> <img alt="money" src="/assets/money2.png" /> $ {totalExpense.utility}</h1><h5>Total Income</h5></div>
            ))}
        </div>
    )
}

export default TExpense;