import Card from '../UI/Card';
import classes from './AddUser.module.css';
const AddUser = (props) => {
  const addUserHandler = (event) => {
    event.preventDefault();
  };

  return (
    //on option1
    // <Card cssClass={classes.input}>
    <Card className={classes.input}>
      {' '}
      //cssClass is a property
      <form onSubmit={addUserHandler}>
        <label htmlFor='username'>UserName</label>
        <input id='username' type='text' />
        <label htmlFor='age'>Age (Years)</label>
        <input id='age' type='text' />
        <button type='submit'>Add User</button>
      </form>
    </Card>
  );
};

export default AddUser;
