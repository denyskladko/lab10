import React from 'react';
import Logo from './Logo';
import DateTime from './DateTime';

const Header = (props) => {
  return (
    <header className="header">
      <Logo />
      <div className="date-time">
        <DateTime />
      </div>
      <h1>{props.title}</h1>
    </header>
  );
};

export default Header;
