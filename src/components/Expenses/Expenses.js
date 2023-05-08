import React, { useState } from 'react';

import ExpensesList from './ExpensesList';
import Card from '../UI/Card'; //TO GO UP ONE LEVEL WITH TWO DOTS
import './Expenses.css';
import ExpensesFilter from './ExpensesFilter';

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2020');

  //This method if for comunication from child to parent
  const filterChangeHandler = (selectedYear) => {
    // console.log('Expenses.js');
    // console.log(selectedYear);
    setFilteredYear(selectedYear);
  };

  const itemsFiltered = props.items.filter((word) => {
    // console.log('Inside filter');
    // console.log(word.date.getFullYear());
    return word.date.getFullYear().toString() === filteredYear;
  });

  // console.log('new added');
  // console.log(props.items);

  return (
    <div>
      <Card className='expenses'>
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpensesList items={itemsFiltered} />
      </Card>
    </div>
  );
};

export default Expenses;
