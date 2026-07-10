import type { Metadata } from 'next';
import Workshop from '../../views/Workshop';

export const metadata: Metadata = {
  title: '盆栽体験',
  description: 'はじめての小品盆栽、苔玉づくり、剪定、植え替えなど、架空の盆栽体験プログラムをご紹介します。',
  alternates: {
    canonical: '/workshops',
  },
};

export default function Page() {
  return <Workshop />;
}
