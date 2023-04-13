import Image from 'next/image';
import { Inter } from 'next/font/google';
import Navbar from './components/Navbar/Navbar';

import styles from './page.module.scss';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <div className={styles.mainContent}>
      <div
        className={`${styles.nameContainer} animate__animated animate__fadeInDown`}
      >
        <h1
          className={`animate__animated animate__fadeInRight ${styles.first}`}
        >
          Adam Crockett
        </h1>
        <p
          className={`animate__animated animate__fadeInRight ${styles.second}`}
        >
          Web Developer
        </p>
        <p className={`animate__animated animate__fadeInRight ${styles.third}`}>
          Software Engineer
        </p>
      </div>
      <div className={`${styles.infoContainer} `}>
        <p className={`animate__animated animate__fadeInLeft ${styles.forth}`}>
          An effective and team focused engineer, experienced in bridging
          cross-functional teams and bringing success to projects.
        </p>
      </div>
    </div>
  );
}
