import './globals.css'
import { Metadata } from "next";

export const metadata = {
  robots: {
    index: false,
    follow: false
  }
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
      </body>
    </html>
  );
}