import type { Metadata } from 'next';
import CareCalendar from '../../views/CareCalendar';

export const metadata: Metadata = {
  title: '手入れ暦',
  description: '春夏秋冬の水やり、剪定、植え替え、苔の管理など、盆栽の季節ごとの手入れをまとめました。',
  alternates: {
    canonical: '/care-guide',
  },
};

export default function Page() {
  return <CareCalendar />;
}
