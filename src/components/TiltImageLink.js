import { useEffect, useRef } from 'react';
import VanillaTilt from 'vanilla-tilt';

export function TiltImageLink({ href, imgSrc, imgAlt = '' }) {
  const ref = useRef();

  useEffect(() => {
    const tiltNode = ref.current;

    VanillaTilt.init(tiltNode, {
      max: 25,
      speed: 400,
      glare: true,
      'max-glare': 1,
      scale: 1.5,
    });
    return function cleanUp() {
      tiltNode.vanillaTilt.destroy();
    };
  }, []);

  return (
    <div className="tilt-root" ref={ref}>
      <a href={href} className="tilt-child">
        <img className="centered" src={imgSrc} alt={imgAlt} />
      </a>
    </div>
  );
}

export default TiltImageLink;
