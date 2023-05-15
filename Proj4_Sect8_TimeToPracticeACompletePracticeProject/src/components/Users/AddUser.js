import React, { useState } from 'react';
import Button from '../UI/Button';
import Card from '../UI/Card';
import classes from './AddUser.module.css';
import ErrorModal from '../UI/ErrorModal';
import { Fragment } from 'react';
const AddUser = (props) => {
  //to collect data from inputs
  const [enteredUserName, setEnteredUserName] = useState('');
  const [enteredAge, setEnteredAge] = useState('');
  const [error, setError] = useState('');

  const addUserHandler = (event) => {
    event.preventDefault();
    if (enteredUserName.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: 'Invalid input',
        message: 'Please enter a valid name and age (non-empty values).',
      });
      return;
    }
    //+ convert to number
    // if (+enteredAge < 1) {
    if (isNaN(enteredAge) || +enteredAge < 1) {
      setError({
        title: 'Invalid age',
        message: 'Please enter a valid  age (> 0).',
      });
      return;
    }
    console.log(enteredUserName, enteredAge);
    //!!IMPORTANT HOW to lifting the state to app component and then it being used inside of usersList component
    props.onAddUser(enteredUserName, enteredAge);

    setEnteredUserName('');
    setEnteredAge('');
  };

  const usernameChangeHandler = (event) => {
    setEnteredUserName(event.target.value);
  };
  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  //to remove modal error
  const errorHandler = () => {
    setError(null);
  };
  return (
    <div>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      //on option1 //cssClass is a property
      {/* // <Card cssClass={classes.input}> */}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor='username'>UserName</label>
          <input
            id='username'
            type='text'
            value={enteredUserName}
            onChange={usernameChangeHandler}
          />
          <label htmlFor='age'>Age (Years)</label>
          <input
            id='age'
            type='text'
            value={enteredAge}
            onChange={ageChangeHandler}
          />
          <Button type='submit'>Add User</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;
