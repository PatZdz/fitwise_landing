import './globals.css'
// Removed unused import

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'FitWise - Twój Partner w Zdrowym Stylu Życia',
  description: 'Osiągnij swoje cele fitness z FitWise.',
};export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pl">
      <body>
        {children}
      </body>
    </html>
  );
}