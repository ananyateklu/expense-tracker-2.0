import NavBar from './NavBar';
import { BrowserRouter as Router } from "react-router-dom";
import './styles.css';
import ExpenseList from './ExpenseList';
import Donat from './Chart.jsx';
import TExpense from './TotalExpense';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { TotalExpense } from '../models/totalexpense';
import Loading from './Loading';

function App() {
  const [totalExpenses, setTotalExpenses] = useState<TotalExpense[]>([]);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    axios.get<TotalExpense[]>('http://localhost:5000/api/TotalExpense').then(response => {
      setTotalExpenses(response.data);

      setLoading(false);
    })
  }, [])

  if (loading) return <Loading content='Loading app'/>
  const chartData = totalExpenses.map((type) => (<Donat key="Donat" food={type.food} utility={type.utility} school={type.school} transport={type.transport} hobby={type.hobby} />))
  return (
    <div>
      <Router>
        <NavBar />
        <TExpense />
        {chartData}
        <ExpenseList />
      </Router>
    </div>
  );
}

export default App;
