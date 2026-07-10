import type { Metadata } from 'next';
import BonsaiGuide from '../../views/BonsaiGuide';

export const metadata: Metadata = {
  title: '盆栽コレクション',
  description: '黒松、五葉松、楓、真柏、苔玉など、代表的な盆栽の種類と育て方の基本を日本語で案内します。',
  alternates: {
    canonical: '/collection',
  },
};

export default function Page() {
  return <BonsaiGuide />;
}
