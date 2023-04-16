'use client';
import { useRef } from 'react';
import Image from 'next/image';
import styles from './Footer.module.scss';
import darkMode from '../../../public/dark_mode.png';
const Footer = () => {
  const themeToggle = useRef(document.body);
  const toggleTheme = () => {
    themeToggle.current.classList.toggle('dark');
  };

  return (
    <footer className={styles.siteFooter}>
      <button
        className={styles.hvrSweepToLeft}
        id='toggle-theme-btn'
        onClick={toggleTheme}
      >
        <Image
          className={`${styles.darkModeToggle}`}
          title='Dark mode toggle'
          src={darkMode}
          alt='Dark mode toggle'
          width={35}
          height={35}
          style={{ color: 'red' }}
          priority
        />
      </button>
    </footer>
  );
};

export default Footer;
