import React from 'react';
import { siteData } from '../config/siteData';
import CareCalendarCard from '../components/CareCalendarCard';

const CareCalendar: React.FC = () => {
  return (
    <main style={{ paddingTop: '120px', paddingBottom: '80px', backgroundColor: 'var(--bg-color)' }}>
      <div className="container" style={{ maxWidth: '900px' }}>
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <h1 style={{ fontSize: '36px', marginBottom: '16px' }}>手入れ暦</h1>
          <p style={{ color: 'var(--moss-green)', letterSpacing: 0 }}>季節の手入れ</p>
          <p style={{ marginTop: '24px', color: 'var(--soil-brown)', maxWidth: '600px', margin: '24px auto 0' }}>
            盆栽は季節とともに変化し、その時々に必要な手入れがあります。
            一年を通して植物と寄り添うための、基本的な作業カレンダーです。
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
          {siteData.careCalendar.map((season, index) => (
            <CareCalendarCard key={index} index={index} {...season} />
          ))}
        </div>
      </div>
    </main>
  );
};

export default CareCalendar;
