import React, { Suspense, lazy, useEffect, useMemo, useState } from 'react';
import BonsaiNavbar from './components/BonsaiNavbar';

import Home from './pages/Home';
import { siteSummary } from './config/siteSummary';

const About = lazy(() => import('./pages/About'));
const BonsaiGuide = lazy(() => import('./pages/BonsaiGuide'));
const CareCalendar = lazy(() => import('./pages/CareCalendar'));
const Workshop = lazy(() => import('./pages/Workshop'));
const Contact = lazy(() => import('./pages/Contact'));
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'));
const Terms = lazy(() => import('./pages/Terms'));
const Footer = lazy(() => import('./components/Footer'));

const getPathname = () => window.location.pathname || '/';
const siteUrl = 'https://kokeniwa-an.jp';

const pageSeo: Record<string, { title: string; description: string }> = {
  '/': {
    title: '苔庭庵 | 盆栽アトリエ',
    description: '小さな鉢に、静かな景色を育てる。盆栽の選び方、育て方、季節ごとの手入れをやさしく紹介します。',
  },
  '/about': {
    title: '私たちについて | 苔庭庵',
    description: '苔庭庵の考え方と、架空の盆栽アトリエとして大切にしている季節の楽しみ方をご紹介します。',
  },
  '/guide': {
    title: '盆栽ガイド | 苔庭庵',
    description: '黒松、五葉松、楓、真柏、苔玉など、代表的な盆栽の種類と育て方の基本を日本語で案内します。',
  },
  '/calendar': {
    title: '手入れ暦 | 苔庭庵',
    description: '春夏秋冬の水やり、剪定、植え替え、苔の管理など、盆栽の季節ごとの手入れをまとめました。',
  },
  '/workshop': {
    title: '盆栽体験 | 苔庭庵',
    description: 'はじめての小品盆栽、苔玉づくり、剪定、植え替えなど、架空の盆栽体験プログラムをご紹介します。',
  },
  '/contact': {
    title: 'お問い合わせ | 苔庭庵',
    description: '盆栽の育て方や架空のワークショップに関するご相談を受け付けるお問い合わせページです。',
  },
  '/privacy': {
    title: 'プライバシーポリシー | 苔庭庵',
    description: '苔庭庵サイトにおける個人情報の取り扱い、利用目的、安全管理、免責事項についてご案内します。',
  },
  '/terms': {
    title: '利用規約 | 苔庭庵',
    description: '苔庭庵サイトの利用条件、掲載情報、植物管理に関する注意、免責事項についてご案内します。',
  },
};

const upsertMeta = (attribute: 'name' | 'property', value: string, content: string) => {
  let meta = document.head.querySelector<HTMLMetaElement>(`meta[${attribute}="${value}"]`);

  if (!meta) {
    meta = document.createElement('meta');
    meta.setAttribute(attribute, value);
    document.head.appendChild(meta);
  }

  meta.content = content;
};

const applyPageSeo = (pathname: string) => {
  const seo = pageSeo[pathname] ?? pageSeo['/'];
  const url = new URL(pathname === '/' ? '/' : pathname, siteUrl).toString();

  document.documentElement.lang = 'ja';
  document.title = seo.title;

  upsertMeta('name', 'description', seo.description);
  upsertMeta('name', 'robots', 'index, follow');
  upsertMeta('name', 'twitter:card', 'summary_large_image');
  upsertMeta('name', 'twitter:title', seo.title);
  upsertMeta('name', 'twitter:description', seo.description);
  upsertMeta('property', 'og:locale', 'ja_JP');
  upsertMeta('property', 'og:type', 'website');
  upsertMeta('property', 'og:site_name', siteSummary.websiteName);
  upsertMeta('property', 'og:title', seo.title);
  upsertMeta('property', 'og:description', seo.description);
  upsertMeta('property', 'og:url', url);

  let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (!canonical) {
    canonical = document.createElement('link');
    canonical.rel = 'canonical';
    document.head.appendChild(canonical);
  }
  canonical.href = url;

  let structuredData = document.getElementById('structured-data') as HTMLScriptElement | null;
  if (!structuredData) {
    structuredData = document.createElement('script');
    structuredData.type = 'application/ld+json';
    structuredData.id = 'structured-data';
    document.head.appendChild(structuredData);
  }

  structuredData.textContent = JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: seo.title,
    url,
    description: seo.description,
    inLanguage: 'ja-JP',
    isPartOf: {
      '@type': 'WebSite',
      name: siteSummary.websiteName,
      url: `${siteUrl}/`,
    },
  });
};

const App: React.FC = () => {
  const [pathname, setPathname] = useState(getPathname);

  useEffect(() => {
    const handleNavigation = () => setPathname(getPathname());

    window.addEventListener('popstate', handleNavigation);
    return () => window.removeEventListener('popstate', handleNavigation);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
    applyPageSeo(pathname);
  }, [pathname]);

  const page = useMemo(() => {
    switch (pathname) {
      case '/about':
        return <About />;
      case '/guide':
        return <BonsaiGuide />;
      case '/calendar':
        return <CareCalendar />;
      case '/workshop':
        return <Workshop />;
      case '/contact':
        return <Contact />;
      case '/privacy':
        return <PrivacyPolicy />;
      case '/terms':
        return <Terms />;
      case '/':
      default:
        return <Home />;
    }
  }, [pathname]);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <BonsaiNavbar />
      <div style={{ flex: 1 }}>
        <Suspense fallback={null}>{page}</Suspense>
      </div>
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </div>
  );
};

export default App;
