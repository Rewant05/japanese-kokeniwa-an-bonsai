import type { Metadata, Viewport } from 'next';
import type { ReactNode } from 'react';
import BonsaiNavbar from '../components/BonsaiNavbar';
import Footer from '../components/Footer';
import { siteData } from '../config/siteData';
import './globals.css';

const siteUrl = 'https://kokeniwa-an.jp';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${siteData.websiteName} | 盆栽アトリエ`,
    template: `%s | ${siteData.websiteName}`,
  },
  description: siteData.description,
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: `${siteData.websiteName} | 盆栽アトリエ`,
    description: siteData.description,
    url: siteUrl,
    siteName: siteData.websiteName,
    locale: 'ja_JP',
    type: 'website',
    images: [
      {
        url: '/hero_bonsai-720.jpg',
        width: 720,
        height: 720,
        alt: `${siteData.websiteName}の盆栽`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${siteData.websiteName} | 盆栽アトリエ`,
    description: siteData.description,
    images: ['/hero_bonsai-720.jpg'],
  },
  icons: {
    icon: '/favicon.svg',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#F9F7F2',
  colorScheme: 'light',
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="ja">
      <body>
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
          <BonsaiNavbar />
          <div style={{ flex: 1 }}>{children}</div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
