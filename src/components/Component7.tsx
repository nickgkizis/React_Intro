import React, { useState, useEffect } from 'react';

const Component7 = () => {
  const [time, setTime] = useState<string>('');

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(interval); // Cleanup the interval on unmount
  }, []);

  return (
    <div>
      <h2>Current Time</h2>
      <p>{time}</p>
    </div>
  );
};

export default Component7;
