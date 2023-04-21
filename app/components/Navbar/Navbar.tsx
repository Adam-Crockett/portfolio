'use client';
import { useState } from 'react';
import Footer from '../Footer/Footer';
import styles from './Navbar.module.scss';
import Link from 'next/link';
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
        <a
          className={`animate__animated animate__slideInLeft ${styles.hvrSweepToRight} ${styles.second}`}
        >
          Projects
        </a>
        {/* <a
          className={`animate__animated animate__slideInLeft ${styles.hvrSweepToRight} ${styles.third}`}
        >
          Work
        </a> */}
        <Link
          className={`animate__animated animate__slideInLeft ${styles.hvrSweepToRight} ${styles.third}`}
          href='/skills'
          title='Skills Page'
          onClick={handleClick}
        >
          Skills
        </Link>
        <a
          className={`animate__animated animate__slideInLeft ${styles.hvrSweepToRight} ${styles.forth}`}
        >
          Contact
        </a>
        <a
          className={`animate__animated animate__slideInLeft ${styles.hvrSweepToRight} ${styles.fifth}`}
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
