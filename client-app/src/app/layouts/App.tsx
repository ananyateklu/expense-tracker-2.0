import  NavBar  from './NavBar';
import { BrowserRouter as Router } from "react-router-dom";
import './styles.css';
import ExpenseList from './ExpenseList';

function App() {


  return (
    <div>
      <Router>
      <NavBar/>
      <ExpenseList/>
      </Router>
    </div>
  );
}

export default App;
