// src/App.tsx
import React, { useState } from 'react';
import Component1 from './components/Component1';
import Component2 from './components/Component2';
import Component3 from './components/Component3';
import Component4 from './components/Component4';
import Component5 from './components/Component5';
import Component6 from './components/Component6';
import Component7 from './components/Component7';
import Component8 from './components/Component8';
import Component9 from './components/Component9';
import Component10 from './components/Component10';
import Component11 from './components/Component11';
import Component12 from './components/component12';
import Component13 from './components/Component13';
import Component14 from './components/Component14';
import Component15 from './components/Component15';
import Component16 from './components/Component16';
import Component17 from './components/Component17';
// import Component18 from './components/Component18';
import Component19 from './components/Component19';
import Component20 from './components/Component20';
import Component21 from './components/Component21';
import './App.css';

const App = () => {
  const [activeComponent, setActiveComponent] = useState<string | null>(null);

  const handleComponentClick = (component: string) => {
    setActiveComponent(component);
  };

  return (
    <div className="layout">
      <div className="sidebar">
        <h1>Components List</h1>
        <ul>
          <li><a href="#component1" onClick={() => handleComponentClick('component1')}>Like/Dislike Button</a></li>
          <li><a href="#component2" onClick={() => handleComponentClick('component2')}>Counter with Increment/Decrement</a></li>
          <li><a href="#component3" onClick={() => handleComponentClick('component3')}>Simple Button</a></li>
          <li><a href="#component4" onClick={() => handleComponentClick('component4')}>Greeting Message</a></li>
          <li><a href="#component5" onClick={() => handleComponentClick('component5')}>Simple Card</a></li>
          <li><a href="#component6" onClick={() => handleComponentClick('component6')}>Input Field with Display</a></li>
          <li><a href="#component7" onClick={() => handleComponentClick('component7')}>Current Time Display</a></li>
          <li><a href="#component8" onClick={() => handleComponentClick('component8')}>List Rendering with Static Data</a></li>
          <li><a href="#component9" onClick={() => handleComponentClick('component9')}>Toggle Switch Button</a></li>
          <li><a href="#component10" onClick={() => handleComponentClick('component10')}>Random Number Generator</a></li>
          <li><a href="#component11" onClick={() => handleComponentClick('component11')}>Background Color Changer</a></li>
          <li><a href="#component12" onClick={() => handleComponentClick('component12')}>To Do List</a></li>
          <li><a href="#component13" onClick={() => handleComponentClick('component13')}>Weather Widget</a></li>
          <li><a href="#component14" onClick={() => handleComponentClick('component14')}>Quiz App</a></li>
          <li><a href="#component15" onClick={() => handleComponentClick('component15')}>Dynamic Image Gallery</a></li>
          <li><a href="#component16" onClick={() => handleComponentClick('component16')}>Stopwatch</a></li>
          <li><a href="#component17" onClick={() => handleComponentClick('component17')}>Currency Converter</a></li>
          <li><a href="#component19" onClick={() => handleComponentClick('component19')}>Password Strength Checker</a></li>
          <li><a href="#component20" onClick={() => handleComponentClick('component20')}>Expense Tracker</a></li>
          <li><a href="#component21" onClick={() => handleComponentClick('component21')}>Pomodoro Timer</a></li>
        </ul>
      </div>

      <div className="main-content">
        {activeComponent === 'component1' && <Component1 />}
        {activeComponent === 'component2' && <Component2 />}
        {activeComponent === 'component3' && <Component3 />}
        {activeComponent === 'component4' && <Component4 />}
        {activeComponent === 'component5' && <Component5 />}
        {activeComponent === 'component6' && <Component6 />}
        {activeComponent === 'component7' && <Component7 />}
        {activeComponent === 'component8' && <Component8 />}
        {activeComponent === 'component9' && <Component9 />}
        {activeComponent === 'component10' && <Component10 />}
        {activeComponent === 'component11' && <Component11 />}
        {activeComponent === 'component12' && <Component12 />}
        {activeComponent === 'component13' && <Component13 />}
        {activeComponent === 'component14' && <Component14 />}
        {activeComponent === 'component15' && <Component15 />}
        {activeComponent === 'component16' && <Component16 />}
        {activeComponent === 'component17' && <Component17 />}
        {/* {activeComponent === 'component18' && <Component18 />} */}
        {activeComponent === 'component19' && <Component19 />}
        {activeComponent === 'component20' && <Component20 />}
        {activeComponent === 'component21' && <Component21 />}
      </div>
    </div>
  );
};

export default App;
