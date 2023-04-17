import Footer from '../Footer/Footer';
import styles from './Navbar.module.scss';
import Link from 'next/link';
export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <label
        className={`${styles.hamburgerMenu} animate__animated animate__fadeInDown`}
      >
        <input type='checkbox' />
      </label>

      <ul className={styles.buttonWrapper}>
        <Link
          className={`animate__animated animate__slideInLeft ${styles.hvrSweepToRight} ${styles.first}`}
          href='/'
          title='Home Page'
        >
          Home
        </Link>
        <a
          className={`animate__animated animate__slideInLeft ${styles.hvrSweepToRight} ${styles.second}`}
        >
          Projects
        </a>
        <a
          className={`animate__animated animate__slideInLeft ${styles.hvrSweepToRight} ${styles.third}`}
        >
          Work
        </a>
        <Link
          className={`animate__animated animate__slideInLeft ${styles.hvrSweepToRight} ${styles.forth}`}
          href='/skills'
          title='Skills Page'
        >
          Skills
        </Link>
        <a
          className={`animate__animated animate__slideInLeft ${styles.hvrSweepToRight} ${styles.fifth}`}
        >
          Contact
        </a>
        <a
          className={`animate__animated animate__slideInLeft ${styles.hvrSweepToRight} ${styles.sixth}`}
        >
          Resume
        </a>
        <div className={styles.footerWrapper}>
          <Footer />
        </div>
      </ul>
    </nav>
  );
}
