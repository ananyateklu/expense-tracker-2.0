import React from 'react';
import { Link } from 'react-router-dom';
import  Logo  from './assets/Logo.png';



export default function NavBar() {
    return (
        <header className="head">
        <Link className="logo" to="/">
          <img src={Logo} alt="logo" />
        </Link>
        <div className="sidebuttons">
          <Link className="links" to="/">
            <img
              alt="expenses"
              className="expenses"
              src="./assets/dashboard.png"
            /><h5>Dashboard</h5>
          </Link>
          <Link className="linkAdd" to="/create">
            <img 
              alt="addexpense"
              className="addexpense"
              src="./assets/addexpense.png"/>
              <h5>Add Expense</h5> 
          </Link>
        </div>
      </header>
    )
}