import React from 'react';
import LegalPageLayout from '../components/LegalPageLayout';
import { siteData } from '../config/siteData';

const Terms: React.FC = () => {
  return (
    <main style={{ paddingTop: '120px', paddingBottom: '80px', backgroundColor: 'var(--bg-color)' }}>
      <div className="container">
        <LegalPageLayout 
          title="利用規約" 
          lastUpdated="2023年10月1日"
          sections={siteData.terms} 
        />
        
        <div style={{ maxWidth: '800px', margin: '40px auto 0', padding: '24px', backgroundColor: 'rgba(213, 213, 209, 0.3)', borderRadius: '4px', textAlign: 'center', fontSize: '13px', color: 'var(--stone-gray)' }}>
          <p>{siteData.disclaimers.plantCare}</p>
          <p style={{ marginTop: '12px' }}>{siteData.disclaimers.fictional}</p>
        </div>
      </div>
    </main>
  );
};

export default Terms;
