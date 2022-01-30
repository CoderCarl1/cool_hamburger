import React from 'react';
import { Header } from './components/header';
import './styles/styles.css';

export function App() {
  function handleNavOpen(Event) {
    console.log('NAV BUTTON CLICKED', Event.target);
    return;
  }

  return (
    <>
      <Header handleNavOpen={handleNavOpen} />
      <h1>APP</h1>
      <main>
        <h2>Content</h2>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat
          quasi distinctio voluptate rerum. Nobis pariatur sapiente repellat
          saepe maxime omnis rem possimus recusandae voluptatum velit? Libero,
          pariatur tempora laboriosam animi consequatur obcaecati quo
          exercitationem, vel dolores aperiam repellat tenetur non fugit at,
          optio rerum blanditiis ad dolore ullam provident omnis.
        </p>
      </main>
    </>
  );
}

export default App;
