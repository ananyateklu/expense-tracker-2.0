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
                <div className='TotalExpenseDiv' key={totalExpense.id}><h1 style={{ fontSize: '35px', display: 'inline' }}> <img style={{ display: 'inline', width: '25px', padding: '2px', margin: '0', border: '1px solid green', borderRadius: '60%' }} alt="money" src="/assets/money.png" /> $ {totalExpense.school}</h1><h5>Total Expenses</h5></div>
            ))}

        </div>
    )
}

export default TExpense;