import React, { useEffect } from 'react';
import CD_DEV_Logo from '../assetts/CD_Dev_Logo_200x200.png';

export function Header({ handleNavOpen, navActive }) {
  useEffect(() => {});

  return (
    <header>
      <button
        onClick={handleNavOpen}
        aria-controls="primary-navigation"
        aria-expanded={navActive ? 'true' : 'false'}
        className={navActive ? 'hamburger-wrapper active' : 'hamburger-wrapper'}
      >
        <div className={navActive ? 'hamburger active' : 'hamburger'}>
          <span className="sr-only">Open Menu</span>
        </div>
      </button>

      <nav id="primary-navigation" className={navActive ? 'active' : 'closed'}>
        <div
          className={
            navActive
              ? 'logo gradient-bground nav-open'
              : 'logo gradient-bground'
          }
        >
          <img src={CD_DEV_Logo} alt="The Coder carl logo" />
        </div>
        <ul>
          <li className="gradient-bground btn fs-500">
            <a className="clr-dark bg-light" href="/home">
              Home
            </a>
          </li>
          <li className="gradient-bground btn fs-500">
            <a className="clr-dark bg-light" href="/about">
              About
            </a>
          </li>
          <li className="gradient-bground btn fs-500">
            <a className="clr-dark bg-light" href="/contact">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
