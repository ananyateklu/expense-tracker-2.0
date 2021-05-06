import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Header, List } from 'semantic-ui-react';
import { Expense } from '../models/expense';

function App() {
  const [expenses, setExpenses] = useState<Expense[]>([]);

  useEffect(() => {
    axios.get<Expense[]>('http://localhost:5000/api/expenses').then(response => {
      setExpenses(response.data);
    })
  }, [])


  return (
    <div>
      <Header as='h2' icon='money' content='Expense-Tracker'/>
       <List>
         {expenses.map(expense  => (
           <List.Item key={expense.id}>
             {expense.name}
           </List.Item>
         ))}
       </List>
    </div>
  );
}

export default App;
