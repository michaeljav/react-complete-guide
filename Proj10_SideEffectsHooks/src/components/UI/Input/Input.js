import React, { useRef, useImperativeHandle, useEffect } from 'react';

import classes from './Input.module.css';

const Input = React.forwardRef((props, ref) => {
  const inputRef = useRef();

  // useEffect(() => {
  //   if (props.id === 'email') {
  //     inputRef.current.focus();
  //   }
  // }, []);

  const activate = () => {
    inputRef.current.focus();
  };

  /*aqui  la variable que se podra llamar desde afuera del componente con 
  ref   que apunta  a la variable interna como por ejemplo activate */
  useImperativeHandle(ref, () => {
    return {
      focus: activate,
    };
  });

  return (
    <div
      className={`${classes.control} ${
        props.isValid === false ? classes.invalid : ''
      }`}
    >
      <label htmlFor={props.id}>{props.label}</label>
      <input
        ref={inputRef}
        type={props.type}
        id={props.id}
        value={props.value}
        onChange={props.onChange}
        onBlur={props.onBlur}
      />
    </div>
  );
});

export default Input;
