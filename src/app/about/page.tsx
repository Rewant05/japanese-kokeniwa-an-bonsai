import type { Metadata } from 'next';
import About from '../../views/About';

export const metadata: Metadata = {
  title: '私たちについて',
  description: '苔庭庵の考え方と、架空の盆栽アトリエとして大切にしている季節の楽しみ方をご紹介します。',
  alternates: {
    canonical: '/about',
  },
};

export default function Page() {
  return <About />;
}
