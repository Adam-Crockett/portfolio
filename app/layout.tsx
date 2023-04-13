import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import './globals.css';
import 'animate.css';

export const metadata = {
  title: 'Adam Crockett',
  description: 'Adam Crockett - Software Engineer',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body>
        <header>
          <Navbar />
        </header>
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
