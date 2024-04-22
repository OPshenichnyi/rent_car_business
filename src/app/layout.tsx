import type { Metadata } from 'next';
import './styles/globals.css';
import Header from './shared/components/header/Header';

export const metadata: Metadata = {
  title: 'Rent Car for Buisness',
  description: 'website rent a car for yuour buisness',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
