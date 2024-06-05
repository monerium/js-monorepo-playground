import StoreProvider from './StoreProvider';
import { Roboto } from 'next/font/google';

import './global.css';
import Layout from '../lib/Layout/Layout';
// TOOD: remember to import normalize.css and rainbow styling.

// TODO: add appLinks and twitter
// https://nextjs.org/docs/app/api-reference/functions/generate-metadata#applinks
// https://nextjs.org/docs/app/api-reference/functions/generate-metadata#metadata-fields
export const metadata = {
  title: 'Monerium',
  description: 'Making money smarter.',
  icons: {
    icon: '/icon.png',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/manifest.json',
  category: 'technology',
};

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <StoreProvider>
      <html lang="en" className={roboto.className}>
        <head>
          <meta charSet="utf-8" />
          <meta name="referrer" content="origin-when-cross-origin" />
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
          <link
            href="https://fonts.googleapis.com/icon?family=Material+Icons"
            rel="stylesheet"
          />
          <link
            rel="manifest"
            href="/manifest.json"
            crossOrigin="use-credentials"
          />
          <link rel="apple-touch-icon" href="/icon.png" />
        </head>

        <body>
          <Layout isProtected={true}>{children}</Layout>
          {/* TODO: Google Analytics, see: https://nextjs.org/docs/app/building-your-application/optimizing/third-party-libraries#google-tag-manager */}
        </body>
      </html>
    </StoreProvider>
  );
}
