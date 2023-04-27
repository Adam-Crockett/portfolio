import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import './globals.scss';
import 'animate.css';

export const metadata = {
  title: 'Adam Crockett',
  description: 'Adam Crockett - Software Engineer',
  colorScheme: 'light dark',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
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
