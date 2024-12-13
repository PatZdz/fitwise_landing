import './globals.css'
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "FitWise - Łatwe zarządzanie obiektami sportowymi",
  description: "Landing page FitWise SaaS.",
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