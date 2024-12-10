import React, { useState } from 'react';

const PasswordStrengthChecker = () => {
  const [password, setPassword] = useState('');
  const [strength, setStrength] = useState('');

  const checkStrength = (password: string) => {
    if (password.length < 6) return 'Weak';
    if (password.match(/[A-Z]/) && password.match(/[0-9]/)) return 'Strong';
    return 'Moderate';
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setPassword(value);
    setStrength(checkStrength(value));
  };

  return (
    <div>
      <h2>Password Strength Checker</h2>
      <input
        type="password"
        value={password}
        onChange={handleChange}
        placeholder="Enter password"
      />
      <p>Strength: {strength}</p>
    </div>
  );
};

export default PasswordStrengthChecker;
