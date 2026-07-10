'use client';

import React, { useState } from 'react';
import Link from './AppLink';
import { Menu, X } from './icons';
import { siteSummary } from '../config/siteSummary';
import styles from './BonsaiNavbar.module.css';
import WoodenLabelCTA from './WoodenLabelCTA';

const BonsaiNavbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className={styles.header}>
      <div className={`container ${styles.navContainer}`}>
        <Link to="/" className={styles.logoGroup} onClick={() => setIsOpen(false)}>
          <div className={styles.vermilionStamp}>庵</div>
          <div className={styles.logoText}>
            <span className={styles.siteName}>{siteSummary.websiteName}</span>
            <span className={styles.romanized}>{siteSummary.romanizedName}</span>
          </div>
        </Link>

        <nav className={styles.desktopNav}>
          <ul className={styles.navLinks}>
            {siteSummary.navigation.map((item, index) => (
              <li key={index}>
                <Link to={item.path} className={styles.navLink}>{item.label}</Link>
              </li>
            ))}
          </ul>
          <WoodenLabelCTA text="育て方を見る" href="/collection" />
        </nav>

        <button className={styles.mobileToggle} onClick={toggleMenu} aria-label="メニューを開閉する">
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        <div className={`${styles.mobileNav} ${isOpen ? styles.open : ''}`}>
          <ul className={styles.mobileNavLinks}>
            {siteSummary.navigation.map((item, index) => (
              <li key={index}>
                <Link to={item.path} className={styles.mobileNavLink} onClick={() => setIsOpen(false)}>
                  {item.label}
                </Link>
              </li>
            ))}
            <li className={styles.mobileCtaWrapper}>
              <WoodenLabelCTA text="育て方を見る" href="/collection" onClick={() => setIsOpen(false)} />
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default BonsaiNavbar;
