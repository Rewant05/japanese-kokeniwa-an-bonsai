import type { Metadata } from 'next';
import PrivacyPolicy from '../../views/PrivacyPolicy';

export const metadata: Metadata = {
  title: 'プライバシーポリシー',
  description: '苔庭庵サイトにおける個人情報の取り扱い、利用目的、安全管理、免責事項についてご案内します。',
  alternates: {
    canonical: '/privacy-policy',
  },
};

export default function Page() {
  return <PrivacyPolicy />;
}
