import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { List } from 'semantic-ui-react';
import { Expense } from '../models/expense';
import  NavBar  from './NavBar';

function App() {
  const [expenses, setExpenses] = useState<Expense[]>([]);

  useEffect(() => {
    axios.get<Expense[]>('http://localhost:5000/api/expenses').then(response => {
      setExpenses(response.data);
    })
  }, [])


  return (
    <div>
      <NavBar/>
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
