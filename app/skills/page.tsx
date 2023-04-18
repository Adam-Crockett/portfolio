import styles from './page.module.scss';
export default function Skills() {
  return (
    <div className={styles.mainContent}>
      {/* <div
        className={`${styles.divider} animate__animated animate__fadeIn ${styles.dividerDelay}`}
      > */}
      <section className={`${styles.sectionOne} ${styles.sectionContainer}`}>
        <div
          className={`${styles.sectionTitleWrapper} animate__animated animate__fadeInDown ${styles.dividerDelay}`}
        >
          <h2
            className={`animate__animated animate__fadeInUp ${styles.titleDelay}`}
          >
            Languages
          </h2>
        </div>
        <div>
          <ul>
            <li
              className={`animate__animated animate__fadeInDown ${styles.first}`}
            >
              JavaScript
            </li>
            <li
              className={`animate__animated animate__fadeInDown ${styles.second}`}
            >
              Python
            </li>
            <li
              className={`animate__animated animate__fadeInDown ${styles.third}`}
            >
              Java
            </li>
            <li
              className={`animate__animated animate__fadeInDown ${styles.forth}`}
            >
              CSS
            </li>
          </ul>
        </div>
      </section>
      <section className={`${styles.sectionTwo} ${styles.sectionContainer}`}>
        <div
          className={`${styles.sectionTitleWrapper} animate__animated animate__fadeInDown ${styles.dividerDelay}`}
        >
          <h2
            className={`animate__animated animate__fadeInUp ${styles.titleDelay}`}
          >
            JS Stack
          </h2>
        </div>
        <div>
          <ul>
            <li
              className={`animate__animated animate__fadeInDown ${styles.first}`}
            >
              TypeScript
            </li>
            <li
              className={`animate__animated animate__fadeInDown ${styles.second}`}
            >
              React
            </li>
            <li
              className={`animate__animated animate__fadeInDown ${styles.third}`}
            >
              Next.js
            </li>
            <li
              className={`animate__animated animate__fadeInDown ${styles.forth}`}
            >
              Gatsby
            </li>
            <li
              className={`animate__animated animate__fadeInDown ${styles.fifth}`}
            >
              Node.js
            </li>
            <li
              className={`animate__animated animate__fadeInDown ${styles.sixth}`}
            >
              Express.js
            </li>
          </ul>
        </div>
      </section>
      <section className={`${styles.sectionThree} ${styles.sectionContainer}`}>
        <div
          className={`${styles.sectionTitleWrapper} animate__animated animate__fadeInDown ${styles.dividerDelay}`}
        >
          <h2
            className={`animate__animated animate__fadeInUp ${styles.titleDelay}`}
          >
            Databases
          </h2>
        </div>
        <div>
          <ul>
            <li
              className={`animate__animated animate__fadeInDown ${styles.first}`}
            >
              SQL
            </li>
            <li
              className={`animate__animated animate__fadeInDown ${styles.second}`}
            >
              GraphQL
            </li>
          </ul>
        </div>
      </section>
      {/* </div> */}
    </div>
  );
}
