import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Header, List } from 'semantic-ui-react';

function App() {
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/expenses').then(response => {
      setExpenses(response.data);
    })
  }, [])


  return (
    <div>
      <Header as='h2' icon='money' content='Expense-Tracker'/>
       <List>
         {expenses.map((expense: any) => (
           <List.Item key={expense.id}>
             {expense.name}
           </List.Item>
         ))}
       </List>
    </div>
  );
}

export default App;
