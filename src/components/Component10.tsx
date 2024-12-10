import React, { useState } from 'react';

const Component10 = () => {
  const [number, setNumber] = useState<number>(0);

  const generateRandomNumber = () => {
    setNumber(Math.floor(Math.random() * 100));
  };

  return (
    <div>
      <h2>Random Number Generator</h2>
      <button onClick={generateRandomNumber}>Generate Number</button>
      <p>Random number: {number}</p>
    </div>
  );
};

export default Component10;
