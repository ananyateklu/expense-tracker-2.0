import React, { ChangeEvent, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Form, Popup, Segment } from 'semantic-ui-react';
import { Expense } from '../models/expense';
import Logo from './assets/Logo.png';


interface Props {
    selectedExpense: Expense | undefined;
    createOrEdit: (expense: Expense) => void;
    submitting: boolean;
}


export default function NavBar({ selectedExpense, createOrEdit, submitting}: Props) {

  const initialState = selectedExpense ?? {
        id: '',
        name: '',
        expenseType: '',
        amount: 0,
        description: '',
        date: '2020-04-08'
  }

  const [expense, setExpense] = useState(initialState);

  function handleSubmit() {
    console.log(expense);
    createOrEdit(expense);
    window.location.reload();

  }

  function handleInputChange(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = event.target;
    setExpense({...expense, [name]: value})
  }

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
                <Form  autoComplete='off' >
                  <Form.Input placeholder='Name' value={expense.name} name='name' onChange={handleInputChange}/>
                  <Form.Input placeholder='Expense Type' value={expense.expenseType} name='expenseType' onChange={handleInputChange}/>
                  <Form.Input placeholder='Amount' value={expense.amount} name='amount' onChange={handleInputChange} />
                  <Form.Input type='date' placeholder='Date' value={expense.date} name='date' onChange={handleInputChange} />
                  <Form.TextArea placeholder='Description' value={expense.description} name='description' onChange={handleInputChange} />
                  <Button onClick={handleSubmit} loading={submitting} floated='right' positive type='submit' content='Submit' />
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