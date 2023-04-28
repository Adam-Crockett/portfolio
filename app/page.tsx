import styles from './page.module.scss';
export default function Home() {
  return (
    <div className={styles.mainContent}>
      <div
        className={`${styles.nameContainer} animate__animated animate__fadeInDown ${styles.containerDelay}`}
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
        <div className={`verticalLine moveLineUp ${styles.homePageLine}`} />
      </div>
      <div className={`${styles.infoContainer} `}>
        <p className={`animate__animated animate__fadeInLeft ${styles.forth}`}>
          I am an experienced developer in building and deploying full-stack
          solutions.
        </p>
        <br />
        <p className={`animate__animated animate__fadeInLeft ${styles.forth}`}>
          I have a passion for exploring the latest tools and technologies to
          create exceptional products and user experiences.
        </p>
      </div>
    </div>
  );
}
