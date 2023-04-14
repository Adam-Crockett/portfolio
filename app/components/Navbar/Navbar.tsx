'use client';
import { useState } from 'react';
import styles from './Navbar.module.scss';
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav className={styles.navWrapper}>
      <div className={styles.navContent}>
        <button
          className={`${styles.navButton} animate__animated animate__slideInLeft ${styles.first}`}
        >
          Home
        </button>
        <button
          className={`${styles.navButton} animate__animated animate__slideInLeft ${styles.second}`}
        >
          Projects
        </button>
        <button
          className={`${styles.navButton} animate__animated animate__slideInLeft ${styles.third}`}
        >
          Work
        </button>
        <button
          className={`${styles.navButton} animate__animated animate__slideInLeft ${styles.forth}`}
        >
          Skills
        </button>
        <button
          className={`${styles.navButton} animate__animated animate__slideInLeft ${styles.fifth}`}
        >
          Contact
        </button>
        <button
          className={`${styles.navButton} animate__animated animate__slideInLeft ${styles.sixth}`}
        >
          Resume
        </button>
      </div>
      <div className={styles.navToggle}>
        <button onClick={handleToggle}>Toggle</button>
      </div>
    </nav>
  );
};

export default Navbar;
