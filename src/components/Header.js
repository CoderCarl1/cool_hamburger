import React from 'react';
import { Link } from 'react-router-dom';
import CD_DEV_Logo from '../assetts/CD_Dev_Logo_200x200.png';

export function Header({ handleNavOpen, navActive, location }) {
  function closeMenu() {
    if (!navActive) return;
    handleNavOpen();
  }

  return (
    <header className="page-container">
      <h1 className="page-title uppercase text-center page-container">Shows</h1>
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
        <h2 className="sr-only">Main Menu</h2>
        {/* <div
          className={
            navActive
              ? 'logo gradient-bground nav-open'
              : 'logo gradient-bground'
          }
        >
          <img src={CD_DEV_Logo} alt="The Coder carl logo" />
        </div> */}
        <ul>
          <li
            className={
              location.pathname === '/'
                ? 'gradient-bground btn fs-500 current-page'
                : 'gradient-bground btn fs-500'
            }
          >
            <Link onClick={closeMenu} className="clr-dark bg-light" to="/">
              Home
            </Link>
          </li>
          <li
            className={
              location.pathname === '/about'
                ? 'gradient-bground btn fs-500 current-page'
                : 'gradient-bground btn fs-500'
            }
          >
            <Link onClick={closeMenu} className="clr-dark bg-light" to="/about">
              About
            </Link>
          </li>
          <li
            className={
              location.pathname === '/contact'
                ? 'gradient-bground btn fs-500 current-page'
                : 'gradient-bground btn fs-500'
            }
          >
            <Link
              onClick={closeMenu}
              className="clr-dark bg-light"
              to="/contact"
            >
              Contact
            </Link>
          </li>
        </ul>
        {navActive && (
          <div>
            <div className="balls"></div>
            <div className="balls"></div>
            <div className="balls"></div>
          </div>
        )}
      </nav>
    </header>
  );
}

export default Header;
