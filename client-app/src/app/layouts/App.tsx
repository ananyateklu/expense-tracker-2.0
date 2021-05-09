import  NavBar  from './NavBar';
import { BrowserRouter as Router } from "react-router-dom";
import './styles.css';
import ExpenseList from './ExpenseList';
import Donat from './Chart.jsx';

function App() {


  return (
    <div>
      <Router>
      <NavBar/>
      <Donat/>
      <ExpenseList/>
      </Router>
    </div>
  );
}

export default App;
