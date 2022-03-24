import React from 'react';
import './Switch.scss';

const Switch = ({ toggleTheme, light}) => {
  return (
    <div className='switch'>
        <div>{light ? 'Светлая' : 'Тёмная'}</div>
      <input
        className="react-switch-checkbox"
        id={`react-switch-new`}
        type="checkbox"
        onClick={toggleTheme}
      />
      <label
        className="react-switch-label"
        htmlFor={`react-switch-new`}
      >
        <span className={`react-switch-button`} />
      </label>
    </div>
  );
};

export default Switch;