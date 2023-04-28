'use client';
import { useRef, useEffect, useState } from 'react';
import styles from './Footer.module.scss';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Link from 'next/link';
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
      <Link
        href='https://github.com/Adam-Crockett'
        target='_blank'
        rel='noopener noreferrer'
        className={`animate__animated animate__slideInRight ${styles.hvrSweepToLeft} ${styles.first}`}
        title='Github link'
      >
        <GitHubIcon className={`${styles.darkModeToggle}`} />
      </Link>
      <Link
        href='https://www.linkedin.com/in/adam-crockett/'
        target='_blank'
        rel='noopener noreferrer'
        className={`animate__animated animate__slideInRight ${styles.hvrSweepToLeft} ${styles.second}`}
        title='LinkedIn link'
      >
        <LinkedInIcon className={`${styles.darkModeToggle}`} />
      </Link>
      <button
        className={`animate__animated animate__slideInRight ${styles.hvrSweepToLeft} ${styles.third}`}
        id='toggle-theme-btn'
        onClick={toggleTheme}
        title='Dark mode toggle'
      >
        <DarkModeIcon className={`${styles.darkModeToggle}`} />
      </button>
    </footer>
  ) : null;
};

export default Footer;
