import localFont from "next/font/local";
import "./globals.css";
import { Links } from '@/app/ui/nav-links'

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Los Caballeros del Zodíaco",
  description: "Aplicación ABML para los Caballeros del Zodíaco",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {/*<Links />*/}
        {children}
      </body>
    </html>
  );
}
