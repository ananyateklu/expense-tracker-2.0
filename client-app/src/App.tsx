import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/expenses').then(response => {
      console.log(response)
      setExpenses(response.data);
    })
  }, [])


  return (
    <div className="App">
      <header className="App-header">
       <ul>
         {expenses.map((expense: any) => (
           <li key={expense.id}>
             {expense.name}
           </li>
         ))}
       </ul>
      </header>
    </div>
  );
}

export default App;
