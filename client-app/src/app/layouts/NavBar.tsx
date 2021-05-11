import React from 'react';
import { Menu, } from 'semantic-ui-react';
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
            />
          </Link>
          <Link className="linkAdd" to="/create">
            <img 
              alt="addexpense"
              className="addexpense"
              src="./assets/addexpense.png"/>
          </Link>
          <Link className="mobileLinks" to="/">
            <Menu />
          </Link>
        </div>
      </header>
    )
}