import NavBar from './NavBar';
import { BrowserRouter as Router } from "react-router-dom";
import './styles.css';
import ExpenseList from './ExpenseList';
import Donat from './Chart.jsx';
import TExpense from './TotalExpense';
import { useEffect, useState } from 'react';
import { TotalExpense } from '../models/totalexpense';
import TotalIncome from './TotalIncome';
import Loading from './Loading';
import Top from './Top';
import { Expense } from '../models/expense';
import agent from '../api/agent';
import { v4 as uuid } from 'uuid';

function App() {
  const [totalExpenses, setTotalExpenses] = useState<TotalExpense[]>([]);
  const [loading, setLoading] = useState(true);
  const [expenses, setExpenses] = useState<Expense[]>([]);
  const [selectedExpense, setSelectedExpense] = useState<Expense | undefined>(undefined);
  const [submitting, setSubmitiing] = useState(false);
  
  useEffect(() => {
    agent.Expenses.totalExpense().then(response => {
      setTotalExpenses(response);
      setLoading(false);
    })
   
    agent.Expenses.list().then(response => {
      let expenses: Expense[] = [];
      response.forEach(expense => {
        expense.date = expense.date.split('T')[0];
        expenses.push(expense);
      })
      setExpenses(expenses);
      setLoading(false);
      
    })
  }, [])

  // function handleSelectExpense(id: string) {
  //   setSelectedExpense(expenses.find(x => x.id))
  // }

  // function handleCancelSelectExpense() {
  //   setSelectedExpense(undefined);
  // }

  function handleCreateOrEditExpense(expense: Expense) {
    setSubmitiing(true);
    if(expense.id) {
      agent.Expenses.update(expense).then(() => {
      setExpenses([...expenses.filter(a => a.id !== expense.id), expense])
      setSelectedExpense(expense);
      setSubmitiing(false);
      })
    } else {
      expense.id = uuid();
      agent.Expenses.create(expense).then(() => {
        setExpenses([...expenses, expense])
        setSelectedExpense(expense);
        setSubmitiing(false);
      })
    }

    expense.id ? setExpenses([...expenses.filter(x => x.id !== expense.id), expense])
      : setExpenses([...expenses, { ...expense, id: uuid()}]);
      setSelectedExpense(expense);

  }

  if (loading) return <Loading content='Loading app' />
  const chartData = totalExpenses.map((type) => (<Donat key="Donat" food={type.food} utility={type.utility} school={type.school} transport={type.transport} hobby={type.hobby} />))
  return (
    <div>
      <Router>
        <NavBar 
          selectedExpense={selectedExpense}
          createOrEdit={handleCreateOrEditExpense}
          submitting={submitting}

           />
        <Top />
        <div className="TotalAll">
         
          <TExpense />
          <TotalIncome />

        </div>

        {chartData}
        <ExpenseList />
      </Router>
    </div>
  );
}

export default App;
