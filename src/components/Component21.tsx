import React, { useState, useRef } from 'react';

const PomodoroTimer = () => {
  const [timeLeft, setTimeLeft] = useState(25 * 60);
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const toggleTimer = () => {
    if (isRunning) {
      clearInterval(intervalRef.current as NodeJS.Timeout);
      setIsRunning(false);
    } else {
      intervalRef.current = setInterval(() => {
        setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
      }, 1000);
      setIsRunning(true);
    }
  };

  const resetTimer = () => {
    clearInterval(intervalRef.current as NodeJS.Timeout);
    setIsRunning(false);
    setTimeLeft(25 * 60);
  };

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div>
      <h2>Pomodoro Timer</h2>
      <p>{formatTime(timeLeft)}</p>
      <button onClick={toggleTimer}>{isRunning ? 'Pause' : 'Start'}</button>
      <button onClick={resetTimer}>Reset</button>
    </div>
  );
};

export default PomodoroTimer;
