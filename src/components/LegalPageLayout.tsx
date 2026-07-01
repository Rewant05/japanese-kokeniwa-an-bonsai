import React from 'react';
import styles from './LegalPageLayout.module.css';

interface LegalPageLayoutProps {
  title: string;
  lastUpdated?: string;
  sections: { title: string; content: string }[];
}

const LegalPageLayout: React.FC<LegalPageLayoutProps> = ({ title, lastUpdated, sections }) => {
  return (
    <div className={styles.layout}>
      <header className={styles.header}>
        <h1 className={styles.title}>{title}</h1>
        {lastUpdated && <p className={styles.date}>最終更新日: {lastUpdated}</p>}
      </header>
      
      <div className={styles.content}>
        {sections.map((section, idx) => (
          <section key={idx} className={styles.section}>
            <h2 className={styles.sectionTitle}>{section.title}</h2>
            <p className={styles.sectionContent}>{section.content}</p>
          </section>
        ))}
      </div>
    </div>
  );
};

export default LegalPageLayout;
