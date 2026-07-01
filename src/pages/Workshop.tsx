import React from 'react';
import { siteData } from '../config/siteData';
import WorkshopCard from '../components/WorkshopCard';

const Workshop: React.FC = () => {
  return (
    <main style={{ paddingTop: '120px', paddingBottom: '80px' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <h1 style={{ fontSize: '36px', marginBottom: '16px' }}>盆栽体験</h1>
          <p style={{ color: 'var(--moss-green)', letterSpacing: '0.1em' }}>WORKSHOP</p>
          <p style={{ marginTop: '24px', color: 'var(--soil-brown)', maxWidth: '600px', margin: '24px auto 0' }}>
            土に触れ、樹の形を思い描く時間。
            苔庭庵では、初めての方でも安心して参加できる様々な体験プログラムをご用意しています。
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: '32px' }}>
          {siteData.workshops.map((workshop, index) => (
            <WorkshopCard 
              key={index} 
              title={workshop.name}
              duration={workshop.duration}
              difficulty={workshop.difficulty}
              audience={workshop.audience}
              learn={workshop.learn}
              bring={workshop.bring}
              careNote={workshop.careNote}
              cta={workshop.cta}
              imageUrl={workshop.imageUrl}
            />
          ))}
        </div>

        <div style={{ marginTop: '60px', padding: '24px', backgroundColor: 'rgba(200, 75, 49, 0.05)', border: '1px solid rgba(200, 75, 49, 0.2)', borderRadius: '4px', textAlign: 'center' }}>
          <h3 style={{ color: 'var(--vermilion)', fontSize: '16px', marginBottom: '8px' }}>ご参加にあたって</h3>
          <p style={{ fontSize: '14px', color: 'var(--soil-brown)', marginBottom: '8px' }}>{siteData.disclaimers.workshopSafety}</p>
          <p style={{ fontSize: '12px', color: 'var(--stone-gray)' }}>
            ※当サイトは架空のウェブサイトであり、実際のワークショップの予約や金銭の支払いは発生しません。
          </p>
        </div>
      </div>
    </main>
  );
};

export default Workshop;
