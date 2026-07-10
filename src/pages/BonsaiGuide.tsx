import React from 'react';
import { siteData } from '../config/siteData';
import BonsaiCard from '../components/BonsaiCard';

const BonsaiGuide: React.FC = () => {
  return (
    <main style={{ paddingTop: '120px', paddingBottom: '80px' }} className="bg-raked-sand">
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <h1 style={{ fontSize: '36px', marginBottom: '16px' }}>盆栽ガイド</h1>
          <p style={{ color: 'var(--moss-green)', letterSpacing: 0 }}>樹種と育て方</p>
          <p style={{ marginTop: '24px', color: 'var(--soil-brown)', maxWidth: '600px', margin: '24px auto 0' }}>
            苔庭庵がおすすめする、代表的な盆栽の種類と育て方の基本をご紹介します。
            お住まいの環境やライフスタイルに合ったひと鉢を見つけてください。
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 320px), 1fr))', gap: '24px' }}>
          {siteData.bonsaiGuides.map((guide, index) => (
            <BonsaiCard key={index} {...guide} />
          ))}
        </div>
        
        <div style={{ marginTop: '60px', padding: '24px', backgroundColor: 'var(--warm-ivory)', border: '1px solid var(--stone-gray-light)', borderRadius: '4px', textAlign: 'center', fontSize: '13px', color: 'var(--stone-gray)' }}>
          <p>{siteData.disclaimers.plantCare}</p>
        </div>
      </div>
    </main>
  );
};

export default BonsaiGuide;
