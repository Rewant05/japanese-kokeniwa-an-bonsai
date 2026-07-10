import type { Metadata } from 'next';
import Terms from '../../views/Terms';

export const metadata: Metadata = {
  title: '利用規約',
  description: '苔庭庵サイトの利用条件、掲載情報、植物管理に関する注意、免責事項についてご案内します。',
  alternates: {
    canonical: '/terms-and-conditions',
  },
};

export default function Page() {
  return <Terms />;
}
