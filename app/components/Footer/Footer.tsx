import Image from 'next/image';
import styles from './Footer.module.scss';
import darkMode from '../../../public/dark_mode.png';
const Footer = () => {
  // const toggleTheme = document.getElementById('toggle-theme-btn');
  // // const body = document.body;

  // toggleTheme.addEventListener('click', () => {
  //   console.log('clicked');
  // });
  return (
    <footer className={styles.siteFooter}>
      <button className={styles.hvrSweepToLeft} id='toggle-theme-btn'>
        <Image
          className={`${styles.darkModeToggle}`}
          title='Dark mode toggle'
          src={darkMode}
          alt='Dark mode toggle'
          width={35}
          height={35}
          style={{ color: 'red' }}
          priority
        />
      </button>
    </footer>
  );
};

export default Footer;
