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
                <div className='TotalIncomeDiv' key={totalExpense.id}><h1 style={{ fontSize: '35px', display: 'inline' }}> <img style={{ display: 'inline', width: '25px', padding: '2px', margin: '0', border: '1px solid #3498DB', borderRadius: '60%' }} alt="money" src="/assets/money2.png" /> $ {totalExpense.utility}</h1><h5>Total Income</h5></div>
            ))}
        </div>
    )
}

export default TExpense;