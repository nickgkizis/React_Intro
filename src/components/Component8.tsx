const Component8 = () => {
  const items = ['Apple', 'Banana', 'Cherry', 'Date'];

  return (
    <div>
      <h2>Fruit List</h2>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default Component8;
