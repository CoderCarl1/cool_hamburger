import React, { useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { About, Home, Contact } from './pages';
import { Header } from './components';

import './styles/styles.css';

export function App() {
  const [navActive, setNavActive] = useState(false);
  const location = useLocation();
  function handleNavOpen() {
    setNavActive((prev) => !prev);
  }

  return (
    <>
      <Header
        location={location}
        handleNavOpen={handleNavOpen}
        navActive={navActive}
      />

      <main className="page-container bg-light page-content">
        <AnimatePresence exitBeforeEnter>
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </AnimatePresence>
      </main>
    </>
  );
}

export default App;
