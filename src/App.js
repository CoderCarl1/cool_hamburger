import React, { useState } from 'react';
import { Header, TiltImageLink } from './components';
import './styles/styles.css';

export function App() {
  const [navActive, setNavActive] = useState(false);

  function handleNavOpen(Event) {
    setNavActive((prev) => !prev);
  }

  return (
    <div className="page-container">
      <Header handleNavOpen={handleNavOpen} navActive={navActive} />
      <main>
        <h1>APP</h1>
        <h2>Content</h2>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat
          quasi distinctio voluptate rerum. Nobis pariatur sapiente repellat
          saepe maxime omnis rem possimus recusandae voluptatum velit? Libero,
          pariatur tempora laboriosam animi consequatur obcaecati quo
          exercitationem, vel dolores aperiam repellat tenetur non fugit at,
          optio rerum blanditiis ad dolore ullam provident omnis.
        </p>
        {/* <TiltImageLink>
          <p className="totally-centered">TEST</p>
        </TiltImageLink> */}

        {/* <TiltImageLink
          href={'https://codercarl.xyz/'}
          imgSrc={
            'https://codercarl.xyz/static/7118055d0c087db784359b3c0ce0edea/c1587/carl_pic.webp'
          }
        /> */}
      </main>
    </div>
  );
}

export default App;
