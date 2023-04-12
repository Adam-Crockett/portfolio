import Image from 'next/image';
import { Inter } from 'next/font/google';
import Navbar from './components/Navbar/Navbar';

import styles from './page.module.css';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <div className={styles.mainContent}>
      <h1>Main</h1>
    </div>
  );
}
