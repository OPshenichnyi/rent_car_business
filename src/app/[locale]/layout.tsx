import type { Metadata } from 'next';
import './styles/globals.css';
import Header from '../shared/components/header/Header';
import Footer from '../shared/components/Footer/Footer';
import Modal from '../shared/components/Modal/Modal';
import Providers from '../shared/components/Providers/Providers';

export const metadata: Metadata = {
  title: 'Rent Car for Buisness',
  description: 'website rent a car for yuour buisness',
};
interface RootLayoutProps {
  children: React.ReactNode;
  params: {
    locale: string;
  };
}

export default function RootLayout({
  children,
  params: { locale },
}: Readonly<RootLayoutProps>) {
  return (
    <html lang={locale}>
      <body>
        <Providers>
          <Header />
          {children}
          <Footer />
        </Providers>
        {/* Added an HTML element for rendering a modal window */}
        <div id="modal-root"></div>
      </body>
    </html>
  );
}
