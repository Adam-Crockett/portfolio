import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import './globals.scss';
import 'animate.css';

export const metadata = {
  title: 'Adam Crockett',
  description: 'Adam Crockett - Software Engineer, Web Developer, and Gamer',
  colorScheme: 'light dark',
  keywords: [
    'Adam Crockett',
    'Software Engineer',
    'Web Developer',
    'Gamer',
    'javascript',
    'typescript',
    'react',
    'nextjs',
    'developer',
    'portfolio',
    'projects',
    'resume',
    'contact',
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <head>
        <link
          rel='icon'
          type='image/png'
          sizes='32x32'
          href='/favicon-32x32.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='16x16'
          href='/favicon-16x16.png'
        />
      </head>
      <body>
        <div className='headerWrapper'>
          <header>
            <Navbar />
            <div className='verticalLine lineNav' />
          </header>
        </div>
        <main>{children}</main>
        <div className='footerWrapper'>
          <Footer />
          <div className='verticalLine moveLineUp lineFoot' />
        </div>
      </body>
    </html>
  );
}
