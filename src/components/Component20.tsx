import React, { useState } from 'react';

const ExpenseTracker = () => {
  const [expenses, setExpenses] = useState<{ description: string; amount: number }[]>([]);
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState<number | ''>('');

  const addExpense = () => {
    if (description && amount) {
      setExpenses([...expenses, { description, amount: Number(amount) }]);
      setDescription('');
      setAmount('');
    }
  };

  const total = expenses.reduce((sum, expense) => sum + expense.amount, 0);

  return (
    <div>
      <h2>Expense Tracker</h2>
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
      />
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(Number(e.target.value))}
        placeholder="Amount"
      />
      <button onClick={addExpense}>Add Expense</button>
      <ul>
        {expenses.map((expense, index) => (
          <li key={index}>
            {expense.description}: ${expense.amount}
          </li>
        ))}
      </ul>
      <h3>Total: ${total}</h3>
    </div>
  );
};

export default ExpenseTracker;
