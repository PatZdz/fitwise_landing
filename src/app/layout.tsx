import './globals.css'
import { Metadata } from 'next';
import Cookies from './components/Cookies';

export const metadata: Metadata = {
  title: 'FitWise - Łatwe zarządzanie obiektami sportowymi',
  description: 'Osiągnij swoje cele fitness z FitWise.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pl">
      <body>
        {children}
        <Cookies />
      </body>
    </html>
  );
}
