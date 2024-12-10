import React, { useState } from 'react';

const Component9 = () => {
  const [isOn, setIsOn] = useState(false);

  const toggleSwitch = () => setIsOn(!isOn);

  return (
    <div>
      <h2>Toggle Switch</h2>
      <button onClick={toggleSwitch}>
        {isOn ? 'Turn Off' : 'Turn On'}
      </button>
      <p>The switch is {isOn ? 'On' : 'Off'}</p>
    </div>
  );
};

export default Component9;
