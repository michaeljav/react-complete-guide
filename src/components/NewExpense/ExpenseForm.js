import React, { useState } from 'react';

import './ExpenseForm.css';
const ExpenseForm = () => {
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredAmount, setEnteredAmount] = useState('');
  const [enteredDate, setEnteredDate] = useState('');

  // const [userInput, setUserInput] = useState({
  //   enteredTitle: '',
  //   enteredAmount: '',
  //   enteredDate: '',
  // });

  const titleChangeHandler = (event) => {
    //Option1
    setEnteredTitle(event.target.value);
    //Option 2 Not recommened : because  react no actualiza inmediatamente las variable y puedo tener inconsitencia en la data.
    // setUserInput({
    //   ...userInput /*It should be first*/,
    //   enteredTitle: event.target.value /** Override enteredTitle */,
    // });
    //Option 3  CORRECT APPROACH
    // setUserInput((prevState) => {
    //   console.log({ ...prevState, enteredTitle: event.target.value });
    //   return { ...prevState, enteredTitle: event.target.value };
    // });
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);

    // setUserInput({
    //   ...userInput /*It should be first*/,
    //   enteredAmount: event.target.value /** Override enteredAmount */,
    // });

    //Option 3  CORRECT APPROACH
    // setUserInput((prevState) => {
    //   return { ...prevState, enteredAmount: event.target.value };
    // });
  };
  const dateChangeHandler = (event) => {
    console.log(event.target.value);
    setEnteredDate(event.target.value);

    // setUserInput({
    //   ...userInput /*It should be first*/,
    //   enteredDate: event.target.value /** Override enteredDate */,
    // });

    //Option 3  CORRECT APPROACH
    // setUserInput((prevState) => {
    //   return { ...prevState, enteredDate: event.target.value };
    // });
  };

  const submitHandler = (event) => {
    event.preventDefault(); //prevent send data and reload page
    console.log(enteredDate);
    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
      /*date: enteredDate,*/
    };
    console.log(expenseData);
  };

  return (
    <form onSubmit={submitHandler}>
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <label>Title = {enteredTitle}</label>
          <input type='text' onChange={titleChangeHandler} />
        </div>
        <div className='new-expense__control'>
          <label>Amount</label>
          <input
            type='number'
            min='0.01'
            step='0.01'
            onChange={amountChangeHandler}
          />
        </div>
        <div className='new-expense__control'>
          <label>Date</label>
          <input
            type='date'
            min='2019-01-01'
            max='2022-12-31'
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className='new-expense__actions'>
        <button type='submit'>Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
