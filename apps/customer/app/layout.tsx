import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.scss';
import Providers from '../components/App/Providers';
import { cookies } from 'next/headers';
import ThemeModeToggle from '../components/ThemeModeToggle';

import '@rainbow-me/rainbowkit/styles.css';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
});
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
});

export const metadata: Metadata = {
  title: 'Monerium',
  description:
    'Monerium issues onchain fiat – directly transferable between your wallet and bank accounts.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = cookies();
  const themeMode = cookieStore?.get('themeMode')?.value || 'light';
  return (
    <html lang="en" data-mui-color-scheme={themeMode}>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Providers>
          <ThemeModeToggle />
          {children}
        </Providers>
      </body>
    </html>
  );
}
