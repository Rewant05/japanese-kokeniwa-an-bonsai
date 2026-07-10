import React from 'react';
import LegalPageLayout from '../components/LegalPageLayout';
import { siteData } from '../config/siteData';

const PrivacyPolicy: React.FC = () => {
  return (
    <main style={{ paddingTop: '120px', paddingBottom: '80px', backgroundColor: 'var(--bg-color)' }}>
      <div className="container">
        <LegalPageLayout 
          title="プライバシーポリシー" 
          lastUpdated="2023年10月1日"
          sections={siteData.privacyPolicy} 
        />
      </div>
    </main>
  );
};

export default PrivacyPolicy;
