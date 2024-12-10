import React, { useState } from 'react';

const Component11 = () => {
  const [color, setColor] = useState<string>('white');

  const changeColor = () => {
    const colors = ['red', 'green', 'blue', 'yellow', 'pink'];
    setColor(colors[Math.floor(Math.random() * colors.length)]);
  };

  return (
    <div>
      <h2>Background Color Changer</h2>
      <button onClick={changeColor}>Change Color</button>
      <div
        style={{
          height: '100px',
          width: '100%',
          backgroundColor: color,
          marginTop: '10px',
        }}
      ></div>
    </div>
  );
};

export default Component11;
