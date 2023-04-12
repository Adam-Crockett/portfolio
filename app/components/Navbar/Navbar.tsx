import styles from './Navbar.module.scss';
export default function Navbar() {
  return (
    <nav className={styles.navWrapper}>
      <button
        className={`animate__animated animate__slideInLeft ${styles.first}`}
      >
        Home
      </button>
      <button
        className={`animate__animated animate__slideInLeft ${styles.second}`}
      >
        Projects
      </button>
      <button
        className={`animate__animated animate__slideInLeft ${styles.third}`}
      >
        Work
      </button>
      <button
        className={`animate__animated animate__slideInLeft ${styles.forth}`}
      >
        Skills
      </button>
      <button
        className={`animate__animated animate__slideInLeft ${styles.fifth}`}
      >
        Contact
      </button>
      <button
        className={`animate__animated animate__slideInLeft ${styles.sixth}`}
      >
        Resume
      </button>
    </nav>
  );
}
