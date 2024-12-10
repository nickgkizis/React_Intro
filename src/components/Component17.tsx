import React, { useState } from 'react';

const CurrencyConverter = () => {
  const [amount, setAmount] = useState(0);
  const [converted, setConverted] = useState<number | null>(null);
  const [fromCurrency, setFromCurrency] = useState('USD'); // Source currency
  const [toCurrency, setToCurrency] = useState('EUR');     // Target currency

  // Static conversion rates (relative to USD as the base)
  const conversionRates: { [key: string]: number } = {
    USD: 1.0,   // Base currency
    EUR: 0.85,  // Euro
    GBP: 0.75,  // British Pound
    JPY: 110.5, // Japanese Yen
    CAD: 1.25,  // Canadian Dollar
    AUD: 1.35,  // Australian Dollar
    INR: 74.0,  // Indian Rupee
    CHF: 0.92,  // Swiss Franc
    CNY: 6.45,  // Chinese Yuan
    MXN: 20.0,  // Mexican Peso
    ZAR: 14.5,  // South African Rand
    SEK: 8.5,   // Swedish Krona
  };

  const convert = () => {
    const fromRate = conversionRates[fromCurrency];
    const toRate = conversionRates[toCurrency];

    // Conversion logic
    const convertedAmount = (amount / fromRate) * toRate;
    setConverted(convertedAmount);
  };

  return (
    <div>
      <h2>Currency Converter</h2>
      <div>
        <label>
          Amount:
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(Number(e.target.value))}
            placeholder="Enter amount"
          />
        </label>
      </div>
      <div>
        <label>
          From:
          <select
            value={fromCurrency}
            onChange={(e) => setFromCurrency(e.target.value)}
          >
            {Object.keys(conversionRates).map((currency) => (
              <option key={currency} value={currency}>
                {currency}
              </option>
            ))}
          </select>
        </label>
      </div>
      <div>
        <label>
          To:
          <select
            value={toCurrency}
            onChange={(e) => setToCurrency(e.target.value)}
          >
            {Object.keys(conversionRates).map((currency) => (
              <option key={currency} value={currency}>
                {currency}
              </option>
            ))}
          </select>
        </label>
      </div>
      <button onClick={convert}>Convert</button>
      {converted !== null && (
        <p>
          Converted Amount: {converted.toFixed(2)} {toCurrency}
        </p>
      )}
    </div>
  );
};

export default CurrencyConverter;
