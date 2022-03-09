import { motion } from 'framer-motion';
import { pageTransition } from '../utils';

export function Contact() {
  return (
    <motion.div
      initial={pageTransition.initial}
      animate={pageTransition.in}
      exit={pageTransition.out}
      transition={pageTransition.transitionDetails}
    >
      <h1>Contact Page</h1>
    </motion.div>
  );
}

export default Contact;
