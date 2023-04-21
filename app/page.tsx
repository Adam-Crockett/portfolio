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
          An effective and team focused engineer, experienced in bridging
          cross-functional teams and bringing success to projects.
        </p>
      </div>
    </div>
  );
}
