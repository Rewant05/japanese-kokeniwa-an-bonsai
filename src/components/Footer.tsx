import React from 'react';
import Link from './AppLink';
import { siteData } from '../config/siteData';
import styles from './Footer.module.css';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footerContainer}`}>
        <div className={styles.brandSection}>
          <div className={styles.logoGroup}>
            <div className={styles.vermilionStamp}>庵</div>
            <div className={styles.logoText}>
              <span className={styles.siteName}>{siteData.websiteName}</span>
            </div>
          </div>
          <p className={styles.tagline}>{siteData.tagline}</p>
          <div className={styles.addressBlock}>
            <p>{siteData.atelierName}</p>
            <p>{siteData.address}</p>
            <p>営業時間: {siteData.businessHours}</p>
            <p>Email: <a href={`mailto:${siteData.email}`}>{siteData.email}</a></p>
          </div>
        </div>
        
        <div className={styles.linksSection}>
          <ul className={styles.footerLinks}>
            {siteData.footerLinks.map((link, idx) => (
              <li key={idx}>
                <Link to={link.path}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      
      <div className={styles.bottomSection}>
        <div className="container">
          <p className={styles.disclaimer}>{siteData.disclaimers.fictional}</p>
          <p className={styles.disclaimer}>{siteData.disclaimers.plantCare}</p>
          <p className={styles.copyright}>&copy; {new Date().getFullYear()} {siteData.websiteName}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
