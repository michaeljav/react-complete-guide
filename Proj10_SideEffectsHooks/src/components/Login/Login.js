import React, { useState, useEffect } from 'react';

import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';

const Login = (props) => {
  const [enteredEmail, setEnteredEmail] = useState('');
  const [emailIsValid, setEmailIsValid] = useState();
  const [enteredPassword, setEnteredPassword] = useState('');
  const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);

  //option 1: corre cada vez que se renderiza el componente
  // useEffect(() => {
  //   console.log('EFFECT RUNNING');
  // });

  //option 2: corre Solo la primera vez que se monta el componente, porque al inicio en el segundo parametro tiene un undefined y luego se asigna el array vacio pero espues de eso cuando se renderiza nuevamente ya tiene un array vacio y eso quiere decir que no cambia ese valor. por eso solo corre una vez.
  // useEffect(() => {
  //   console.log('EFFECT RUNNING one time');
  // }, []);

  //option 3: correra la primera vez y cada vez que una variable de las que esta en el segundo parametro cambie. en este caso  cada vez que cambie la variable  password
  // useEffect(() => {
  //   console.log('EFFECT RUNNING one time and every time that password changes');

  // }, [enteredPassword]);

  //option 4: correra la primera vez y cada vez que una variable de las que esta en el segundo parametro cambie. en este caso  cada vez que cambie la variable  password y limpia useeffect anterior corriendo la funcion de return
  useEffect(() => {
    console.log('EFFECT RUNNING one time and every time that password changes');

    return () => {
      console.log('EFFECT CLEANUP PASSWORD CHANGE');
    };
  }, []);

  //cuando cambia email o  password este funcion se ejecuta
  useEffect(() => {
    console.log('Ejecuto USEEFFECT ');
    const identifierTimer = setTimeout(() => {
      // console.clear();
      console.log('Ejecuto setTimeout');
      console.log(enteredEmail, enteredPassword);
      setFormIsValid(
        enteredEmail.includes('@') && enteredPassword.trim().length > 6
      );
    }, 500);

    //Esta funcion se ejecuta antes de  volver a ejecutar la
    //proxima vez useEffect. Me ayuda a borrar el anterior
    //setTimeout que que habia creado y me permite
    //solo cojer el ultimo ejecutar el ultimo settimeout  y  valor del inpu ya que solo se ejecuta una vez, porque los ateriores los borre con clearTimeout funcion.
    return () => {
      console.log('CLEANUP');
      clearTimeout(identifierTimer);
    };
  }, [enteredEmail, enteredPassword]);

  const emailChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
  };

  const passwordChangeHandler = (event) => {
    setEnteredPassword(event.target.value);
    setFormIsValid(
      event.target.value.trim().length > 6 && enteredEmail.includes('@')
    );
  };

  const validateEmailHandler = () => {
    setEmailIsValid(enteredEmail.includes('@'));
  };

  const validatePasswordHandler = () => {
    setPasswordIsValid(enteredPassword.trim().length > 6);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.onLogin(enteredEmail, enteredPassword);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <div
          className={`${classes.control} ${
            emailIsValid === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor='email'>E-Mail</label>
          <input
            type='email'
            id='email'
            value={enteredEmail}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
        </div>
        <div
          className={`${classes.control} ${
            passwordIsValid === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor='password'>Password</label>
          <input
            type='password'
            id='password'
            value={enteredPassword}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          />
        </div>
        <div className={classes.actions}>
          <Button type='submit' className={classes.btn} disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
