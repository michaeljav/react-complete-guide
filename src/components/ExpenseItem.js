import './ExpenseItem.css';

function ExpenseItem() {
  return (
    <div className='expense-item'>
      <div>
        March 28th 2021https://github.com/michaeljav/react-complete-guide.git
      </div>
      <div className='expense-item__description'>
        <h2>Car Insurance</h2>
        <div className='expense-item__price'>$294.67</div>
      </div>
    </div>
  );
}

//export default ExpenseItem;
export default ExpenseItem;
