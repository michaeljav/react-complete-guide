import React, { useEffect, useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  const onCount = () => {
    setCount((prev) => {
      return (prev = prev + 1);
    });
  };

  return (
    <React.Fragment>
      {/* {console.log('entro')} */}
      <h4>{count}</h4>
      <button onClick={onCount}>Count</button>
    </React.Fragment>
  );
}

export default App;
