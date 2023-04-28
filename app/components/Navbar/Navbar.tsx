'use client';
import { useState } from 'react';
import Footer from '../Footer/Footer';
import styles from './Navbar.module.scss';
import Link from 'next/link';
import Resume from '/public/resume.pdf';
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  function handleClick() {
    setMenuOpen(!menuOpen);
  }

  return (
    <nav className={styles.navbar}>
      <label
        className={`${styles.hamburgerMenu} animate__animated animate__fadeInDown`}
      >
        <input type='checkbox' checked={menuOpen} onChange={handleClick} />
      </label>

      <ul className={styles.buttonWrapper}>
        <Link
          className={`animate__animated animate__slideInLeft ${styles.hvrSweepToRight} ${styles.first}`}
          href='/'
          title='Home Page'
          onClick={handleClick}
        >
          Home
        </Link>
        <Link
          className={`animate__animated animate__slideInLeft ${styles.hvrSweepToRight} ${styles.second}`}
          href='/projects'
          title='Projects Page'
          onClick={handleClick}
        >
          Projects
        </Link>
        <Link
          className={`animate__animated animate__slideInLeft ${styles.hvrSweepToRight} ${styles.third}`}
          href='/skills'
          title='Skills Page'
          onClick={handleClick}
        >
          Skills
        </Link>
        <Link
          className={`animate__animated animate__slideInLeft ${styles.hvrSweepToRight} ${styles.forth}`}
          href='mailto:adamkcrockett@gmail.com'
          rel='noopener noreferrer'
          title='email link'
          onClick={handleClick}
          target='_blank'
        >
          Contact
        </Link>
        <a
          className={`animate__animated animate__slideInLeft ${styles.hvrSweepToRight} ${styles.fifth}`}
          href={Resume}
          rel='noopener noreferrer'
          title='Resume'
          onClick={handleClick}
          target='_blank'
          // download
        >
          Resume
        </a>
        <div className={styles.footerWrapper}>
          <Footer />
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;
