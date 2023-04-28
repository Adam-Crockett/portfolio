'use client';
import Link from 'next/link';
import Image from 'next/image';
import styles from './page.module.scss';
import powerLevelPNG from '../../public/power_level_screenshot.png';
import memoriesPNG from '../../public/memories_app_screenshot.png';
import GitHubIcon from '@mui/icons-material/GitHub';

const Projects = () => {
  return (
    <div className={styles.mainContent}>
      <section
        className={`animate__animated animate__rotateInUpRight ${styles.sectionOne} ${styles.sectionContainer}`}
      >
        <div
          className={`animate__animated animate__slideInRight ${styles.cardOne} ${styles.projectCard} ${styles.leftSideCard}`}
        >
          <h2 className={styles.cardTitle}>Power Level: EDH Tool</h2>
          <Link className={styles.projectImageWrapper} href='#'>
            <Image
              className={styles.projectImage}
              src={powerLevelPNG}
              alt='test'
            />
          </Link>
          <div className={styles.textContent}>
            <p className={styles.projectDescription}>
              Description of the project
            </p>
            <p className={styles.projectTools}>Stack tools here</p>
          </div>
          <div className={styles.cardLinks}>
            <Link
              href='https://github.com/Adam-Crockett'
              target='_blank'
              rel='noopener noreferrer'
              className={styles.cardLinks}
              title='Github link'
            >
              <GitHubIcon className={`${styles.darkModeToggle}`} />
            </Link>
          </div>
        </div>
        <div
          className={`verticalLine moveLineDown ${styles.cardLineOnRight} ${styles.firstCardLineOnRight}`}
        />
      </section>
      <section
        className={`animate__animated animate__rotateInUpLeft ${styles.sectionTwo} ${styles.sectionContainer}`}
      >
        <div
          className={`verticalLine moveLineUp ${styles.cardLineOnLeft} ${styles.firstCardLineOnLeft}`}
        />
        <div
          className={`animate__animated animate__slideInLeft ${styles.cardTwo} ${styles.projectCard} ${styles.rightSideCard}`}
        >
          <h2 className={styles.cardTitle}>Memories Application</h2>
          <Link className={styles.projectImageWrapper} href='#'>
            <Image
              className={styles.projectImage}
              src={memoriesPNG}
              alt='test'
            />
          </Link>
          <div className={styles.textContent}>
            <p className={styles.projectDescription}>
              Description of the project
            </p>
            <p className={styles.projectTools}>Stack tools here</p>
          </div>
          <div className={styles.cardLinks}>
            <Link
              href='https://github.com/Adam-Crockett'
              target='_blank'
              rel='noopener noreferrer'
              className={styles.cardLinks}
              title='Github link'
            >
              <GitHubIcon className={`${styles.darkModeToggle}`} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
