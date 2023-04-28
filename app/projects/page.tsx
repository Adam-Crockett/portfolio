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
          <Link
            className={styles.projectImageWrapper}
            href='http://power-level-client.herokuapp.com/'
            target='_blank'
            rel='noopener noreferrer'
            title='Power Level: EDH Tool'
          >
            <Image
              className={styles.projectImage}
              src={powerLevelPNG}
              alt='Power Level Screenshot'
            />
          </Link>
          <div className={styles.textContent}>
            <p className={styles.projectDescription}>
              I enjoy creating tier lists in the Magic the Gathering format
              Commander(EDH). As a result I created Power Level, a full-stack
              web application that allows users to create a tier list for
              commanders. The site features a drag and drop implementation,
              managed state, server and API requests, and cached data.
            </p>
            <p className={styles.projectTools}>
              <p>JavaScript</p>
              <p className={styles.toolSeparator}>|</p>
              <p>TypeScript</p>
              <p className={styles.toolSeparator}>|</p>
              <p>Next.js</p>
              <p className={styles.toolSeparator}>|</p>
              <p>React</p>
              <p className={styles.toolSeparator}>|</p>
              <p>MongoDB</p>
              <p className={styles.toolSeparator}>|</p>
              <p>Node.js</p>
            </p>
          </div>
          <div className={styles.cardLinks}>
            <Link
              href='https://github.com/Adam-Crockett/client-edh-tier-list'
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
          <Link
            className={styles.projectImageWrapper}
            href='https://mynewmemories.net/#/posts'
            target='_blank'
            rel='noopener noreferrer'
            title='Memories Application'
          >
            <Image
              className={styles.projectImage}
              src={memoriesPNG}
              alt='Memories Screenshot'
            />
          </Link>
          <div className={styles.textContent}>
            <p className={styles.projectDescription}>
              The Memories Project is a full-stack social media application
              developed using the MERN stack. The users can authenticate using
              their email and password or use OAuth with a Google account. The
              project was developed for scalability, managing user database
              content, authentication, and creating common social media user
              interactions.
            </p>
            <p className={styles.projectTools}>
              <p>JavaScript</p>
              <p className={styles.toolSeparator}>|</p>
              <p>Express</p>
              <p className={styles.toolSeparator}>|</p>
              <p>Redux</p>
              <p className={styles.toolSeparator}>|</p>
              <p>React</p>
              <p className={styles.toolSeparator}>|</p>
              <p>MongoDB</p>
              <p className={styles.toolSeparator}>|</p>
              <p>Node.js</p>
            </p>
          </div>
          <div className={styles.cardLinks}>
            <Link
              href='https://github.com/Adam-Crockett/memories_project'
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
