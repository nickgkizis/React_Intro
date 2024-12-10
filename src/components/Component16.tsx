import React, { useState, useRef } from 'react';

const Stopwatch = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const start = () => {
    if (!isRunning) {
      setIsRunning(true);
      intervalRef.current = setInterval(() => setTime((prev) => prev + 1), 1000);
    }
  };

  const stop = () => {
    setIsRunning(false);
    if (intervalRef.current) clearInterval(intervalRef.current);
  };

  const reset = () => {
    stop();
    setTime(0);
  };

  return (
    <div>
      <h2>Stopwatch</h2>
      <p>Time: {time}s</p>
      <button onClick={start}>Start</button>
      <button onClick={stop}>Stop</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
};

export default Stopwatch;
