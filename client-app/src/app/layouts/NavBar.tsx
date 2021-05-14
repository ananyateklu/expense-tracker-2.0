import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Form, Popup, Segment } from 'semantic-ui-react';
import Logo from './assets/Logo.png';



export default function NavBar() {
  return (
    <header className="head">
      <Link className="logo" to="/">
        <img src={Logo} alt="logo" />
      </Link>
      <div className="sidebuttons">
        <Link className="links" to="/">
          <Button color='teal' icon='home' content='Dashboard' size='small' />
        </Link>
        <Link className="linkAdd" to="">
          <Popup
            trigger={
              <Button color='blue' icon='add' content='Add Expense' size='small' />
            }
            content={
              <Segment clearing>
                <Form autoComplete='off' >
                  <Form.Input placeholder='Name' name='name' />
                  <Form.Input placeholder='Expense Type' name='expensetype' />
                  <Form.Input placeholder='Amount' name='amount' />
                  <Form.Input type='date' placeholder='Date' name='date' />
                  <Form.TextArea placeholder='Description' name='description' />
                  <Button floated='right' positive type='submit' content='Submit' />
                  <Button floated='right' type='button' content='Cancel' />
                </Form>
              </Segment>}
            on='click'
            position='right center'
          />
        </Link>

      </div>

    </header>
  )
}