import styles from './skills.module.scss';
export default function Skills() {
  return (
    <div className={styles.mainContent}>
      <section>
        <title>Languages</title>
        <ul>
          <li>JavaScript</li>
          <li>Python</li>
          <li>Java</li>
          <li>CSS</li>
        </ul>
      </section>
      <section>
        <title>JS Stack</title>
        <ul>
          <li>TypeScript</li>
          <li>React</li>
          <li>Next.js</li>
          <li>Gatsby</li>
          <li>Node.js</li>
          <li>Express.js</li>
        </ul>
      </section>
      <section>
        <title>Databases</title>
        <ul>
          <li>SQL</li>
          <li>GraphQL</li>
        </ul>
      </section>
    </div>
  );
}
