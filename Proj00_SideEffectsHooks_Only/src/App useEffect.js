import React, { useEffect, useState } from 'react';

function App() {
  const [count, setCount] = useState(0);
  const [search, setSearch] = useState({ value: false });

  useEffect(() => {
    console.log('Total ', count);
  }, [count]);

  useEffect(() => {
    console.log('Searching ', search);
    //LOOP
    setSearch((prev) => {
      console.log('Searching changing to  ', !prev.value);
      return (prev = { ...prev, value: !prev.value });
    });
  }, [search]);

  const onCount = () => {
    setCount((prev) => {
      return (prev = prev + 1);
    });
  };
  const onSearch = () => {
    setSearch((prev) => {
      return (prev = { ...prev, value: !prev.value });
    });
  };

  return (
    <React.Fragment>
      {/* {console.log('entro')} */}
      <h4>{count}</h4>
      <button onClick={onCount}>Count</button>
      <button onClick={onSearch}>search</button>
    </React.Fragment>
  );
}

export default App;
