import React from 'react';

export function Header({ handleNavOpen }) {
  return (
    <header>
      <button className="hamburger-wrapper">
        <div className="hamburger"></div>
      </button>
      <nav></nav>
    </header>
  );
}
