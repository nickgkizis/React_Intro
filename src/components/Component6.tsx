import React, { useState } from 'react';

const Component6 = () => {
  const [input, setInput] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value);
  };

  return (
    <div>
      <h2>Input Form</h2>
      <input
        type="text"
        value={input}
        onChange={handleChange}
        placeholder="Type something"
      />
      <p>You typed: {input}</p>
    </div>
  );
};

export default Component6;
