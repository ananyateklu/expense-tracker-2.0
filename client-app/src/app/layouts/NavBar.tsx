import React, { ChangeEvent, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Form, FormInput, Popup, Segment } from 'semantic-ui-react';
import { Expense } from '../models/expense';
import Logo from './assets/Logo.png';



interface Props {
    expense: Expense | undefined;
    selectExpense: (id: string) => void;
    cancelSelectExpense: () => void;
    // selectedExpense: Expense | undefined;
    editMode: boolean;
    createOrEdit: (expense: Expense) => void;
    submitting: boolean;
}


export default function NavBar({ expense: selectedExpense, createOrEdit, submitting, selectExpense, cancelSelectExpense}: Props) {
  const initialState = selectedExpense ?? {
        id: '',
        name: '',
        expenseType: '',
        amount: 0,
        description: '',
        date: ''
  }

  const [expense, setExpense] = useState(initialState);

  function handleSubmit() {
    createOrEdit(expense);
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
          <Button icon='home'  size='small' />
        </Link>
        <Link className="linkAdd" to="">
          <Popup
            trigger={
              <Button  icon='add'  size='small' />
            }
            content={
              
              <Segment clearing>
                <Form  autoComplete='off' >
                {console.log(selectedExpense)}
                  <Form.Input placeholder='Name' value={expense.name} name='name' onChange={handleInputChange}/>
                  <Form.Input type="" placeholder='Expense Type' value={expense.expenseType} name='expenseType' onChange={handleInputChange}/>
                  <Form.Input placeholder='Amount' value={expense.amount} name='amount' onChange={handleInputChange} />
                  <FormInput placeholder='Date' value={expense.date} name='date' onChange={handleInputChange} />
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