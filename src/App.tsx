import React, { useState } from 'react';
import Component1 from './components/Component1';
import Component2 from './components/Component2';
import './App.css';  // Import the CSS file

const App = () => {
  const [activeComponent, setActiveComponent] = useState<string | null>(null);

  const handleComponentClick = (component: string) => {
    setActiveComponent(component);
  };

  return (
    <div className="layout">
      {/* Sidebar with list of components */}
      <div className="sidebar">
        <h1>Components List</h1>
        <ul>
          <li>
            <a
              href="#component1"
              onClick={() => handleComponentClick('component1')}
            >
              Component 1
            </a>
          </li>
          <li>
            <a
              href="#component2"
              onClick={() => handleComponentClick('component2')}
            >
              Component 2
            </a>
          </li>
        </ul>
      </div>

      {/* Main content area */}
      <div className="main-content">
        {activeComponent === 'component1' && <Component1 />}
        {activeComponent === 'component2' && <Component2 />}
      </div>
    </div>
  );
};

export default App;
