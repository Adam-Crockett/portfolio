'use client';
import { useRef, useEffect, useState } from 'react';
import Image from 'next/image';
import styles from './Footer.module.scss';
import darkMode from '../../../public/dark_mode.png';
const Footer = () => {
  const [isBrowser, setIsBrowser] = useState(false);
  const themeToggle = useRef<HTMLElement | undefined>();
  const toggleTheme = () => {
    if (themeToggle.current) {
      const prefersDarkScheme = window.matchMedia(
        '(prefers-color-scheme: dark)'
      );
      if (prefersDarkScheme.matches) {
        themeToggle.current.classList.toggle('light-theme');
      } else {
        themeToggle.current.classList.toggle('dark-theme');
      }
    }
  };

  useEffect(() => {
    setIsBrowser(typeof window !== 'undefined');
    themeToggle.current = document.body;
  }, []);

  return isBrowser ? (
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
  ) : null;
};

export default Footer;
