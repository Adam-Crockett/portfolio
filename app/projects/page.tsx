import Link from 'next/link';
import Image from 'next/image';
import styles from './page.module.scss';
export default function Projects() {
  return (
    <div className={styles.mainContent}>
      <section className={`${styles.sectionOne} ${styles.sectionContainer}`}>
        <div className={styles.projectCard}>
          <h2 className={styles.cardTitle}>Power Level: EDH Tool</h2>
          <Link href='#'>
            <Image src='' alt='test' />
          </Link>
        </div>
      </section>
      <section className={`${styles.sectionTwo} ${styles.sectionContainer}`}>
        <div className={styles.projectCard}>
          <h2 className={styles.cardTitle}>Memories Application</h2>
          <Link href='#'>
            <Image src='' alt='test' />
          </Link>
        </div>
      </section>
    </div>
  );
}
