import type { Metadata } from 'next';
import Contact from '../../views/Contact';

export const metadata: Metadata = {
  title: 'お問い合わせ',
  description: '盆栽の育て方や架空のワークショップに関するご相談を受け付けるお問い合わせページです。',
  alternates: {
    canonical: '/contact',
  },
};

export default function Page() {
  return <Contact />;
}
