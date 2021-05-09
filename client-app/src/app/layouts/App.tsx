import  NavBar  from './NavBar';
import { BrowserRouter as Router } from "react-router-dom";
import './styles.css';
import ExpenseList from './ExpenseList';
import Donat from './Chart.jsx';
import { ChartData } from './ChartData'

function App() {


  const chartData = ChartData.map((type) => (<Donat key="Donat" food={type.food} utility={type.utitity} school={type.school} transport={type.transport} hobby={type.hobby} />))
  return (
    
    <div>
      <Router>
      <NavBar/>
      {chartData}
      <ExpenseList/>
      </Router>
    </div>
  );
}

export default App;
