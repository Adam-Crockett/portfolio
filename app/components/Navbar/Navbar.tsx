import Footer from '../Footer/Footer';
import styles from './Navbar.module.scss';
export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <label
        className={`${styles.hamburgerMenu} animate__animated animate__fadeInDown`}
      >
        <input type='checkbox' />
      </label>

      <ul className={styles.buttonWrapper}>
        <a
          className={`animate__animated animate__slideInLeft ${styles.hvrSweepToRight} ${styles.first}`}
        >
          Home
        </a>
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
        <a
          className={`animate__animated animate__slideInLeft ${styles.hvrSweepToRight} ${styles.forth}`}
        >
          Skills
        </a>
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
