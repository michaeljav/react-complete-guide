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

  const addUserHandler = (event) => {
    event.preventDefault();
    if (enteredUserName.trim().length === 0 || enteredAge.trim().length === 0) {
      return;
    }
    //+ convert to number
    // if (+enteredAge < 1) {
    if (isNaN(enteredAge) || +enteredAge < 1) {
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

  return (
    <div>
      <ErrorModal title='An error occurred!' message='Something went wrong!' />
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
