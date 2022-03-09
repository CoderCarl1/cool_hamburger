import { motion } from 'framer-motion';
import { pageTransition } from '../utils';

export function About() {
  return (
    <motion.div
      initial={pageTransition.initial}
      animate={pageTransition.in}
      exit={pageTransition.out}
      transition={pageTransition.transitionDetails}
    >
      <h1>About Page</h1>
    </motion.div>
  );
}

export default About;
