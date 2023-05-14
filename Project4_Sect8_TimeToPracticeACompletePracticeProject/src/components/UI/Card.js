import classes from './Card.module.css';

const Card = (props) => {
  //${props.className} this code is for add extra styling
  return (
    //One option 1 //className is a property
    // <div className={`${classes.card} ${props.cssClass}`}>{props.children}</div>
    <div className={`${classes.card} ${props.className}`}>{props.children}</div>
  
s};

export default Card;
