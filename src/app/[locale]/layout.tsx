import type { Metadata } from 'next';
import './styles/globals.css';
import Header from '../shared/components/header/Header';
import Footer from '../shared/components/Footer/Footer';

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
        <Header />
        {children}

        <Footer />
      </body>
    </html>
  );
}
