import './globals.css'
import { Metadata } from 'next';
import Cookies from './components/Cookies';

export const metadata: Metadata = {
  title: 'FitWise - Łatwe zarządzanie obiektami sportowymi',
  description: 'Osiągnij swoje obiekty fitness z FitWise.',
  icons: {
    icon: './favicon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pl">
      <body suppressHydrationWarning={true}>
        {children}
        <Cookies />
      </body>
    </html>
  );
}
