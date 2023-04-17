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
      let theme = document.body.classList.contains('light-theme')
        ? 'light'
        : 'dark';
      localStorage.setItem('theme', theme);
    }
  };

  useEffect(() => {
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme === 'dark') {
      document.body.classList.toggle('dark-theme');
    } else if (currentTheme === 'light') {
      document.body.classList.toggle('light-theme');
    }
    setIsBrowser(typeof window !== 'undefined');
    themeToggle.current = document.body;
  }, []);

  return isBrowser ? (
    <footer className={styles.siteFooter}>
      <button
        className={styles.hvrSweepToLeft}
        id='toggle-theme-btn'
        onClick={toggleTheme}
        title='Dark mode toggle'
      >
        <Image
          className={`${styles.darkModeToggle}`}
          title='Dark mode toggle'
          src={darkMode}
          alt='Dark mode toggle, moon icon'
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
