import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import styles from './BonsaiDisplayHero.module.css';
import WoodenLabelCTA from './WoodenLabelCTA';
import { siteData } from '../config/siteData';

const BonsaiDisplayHero: React.FC = () => {
  const [loaded, setLoaded] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // Trigger entrance animation
    const timer = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!heroRef.current) return;
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    
    // Calculate mouse position relative to center of screen (-1 to 1)
    const x = (clientX / innerWidth - 0.5) * 2;
    const y = (clientY / innerHeight - 0.5) * 2;
    
    setMousePos({ x, y });
  };

  return (
    <section 
      className={`${styles.hero} bg-raked-sand`} 
      ref={heroRef}
      onMouseMove={handleMouseMove}
    >
      <div 
        className={`${styles.tokonomaWrapper} ${loaded ? styles.loaded : ''}`}
        style={{
          transform: `translate(${mousePos.x * -10}px, ${mousePos.y * -10}px)`
        }}
      >
        <div 
          className={`${styles.alcove} ${loaded ? styles.loaded : ''}`}
          style={{
            transform: loaded ? `translate(${mousePos.x * 15}px, ${mousePos.y * 15}px) scale(1)` : 'scale(0.9) translateY(20px)'
          }}
        >
          <div className={styles.bonsaiSilhouette}>
            <img src="/hero_bonsai.png" alt="Premium Bonsai" style={{ width: '100%', height: '100%', objectFit: 'contain', filter: 'drop-shadow(0 20px 30px rgba(0,0,0,0.15))' }} />
          </div>
        </div>

        {/* Floating Care Tags */}
        <div 
          className={`${styles.careTag} ${loaded ? styles.loaded : ''}`} 
          style={{ top: '15%', left: '-10%', animationDelay: '0.2s', transform: `translate(${mousePos.x * -20}px, ${mousePos.y * -20}px)` }}
        >
          日当たり
        </div>
        <div 
          className={`${styles.careTag} ${loaded ? styles.loaded : ''}`} 
          style={{ top: '40%', right: '-15%', animationDelay: '1.5s', transform: `translate(${mousePos.x * -25}px, ${mousePos.y * -25}px)` }}
        >
          水やり
        </div>
        <div 
          className={`${styles.careTag} ${loaded ? styles.loaded : ''}`} 
          style={{ bottom: '25%', left: '-5%', animationDelay: '2.8s', transform: `translate(${mousePos.x * -15}px, ${mousePos.y * -15}px)` }}
        >
          剪定
        </div>
      </div>

      <div className={styles.heroContent}>
        <h1 className={styles.headline}>「小さな庭を、毎日の手の中に。」</h1>
        <p className={styles.subtext}>{siteData.description}</p>
        
        <div className={styles.ctaGroup}>
          <Link to="/guide">
            <WoodenLabelCTA text="盆栽ガイドを見る" />
          </Link>
          <Link to="/workshop" className={styles.secondaryCta}>
            手入れを学ぶ
          </Link>
        </div>
      </div>

      {/* Seasonal care calendar strip */}
      <div className={styles.seasonalStrip}>
        <div className={styles.seasonalTrack}>
          {siteData.careCalendar.map((item, idx) => (
            <div key={idx} className={styles.seasonalItem}>
              <span className={styles.seasonMark}>〇</span>
              {item.season}
            </div>
          ))}
          {/* Duplicate for infinite scroll illusion */}
          {siteData.careCalendar.map((item, idx) => (
            <div key={`dup-${idx}`} className={styles.seasonalItem}>
              <span className={styles.seasonMark}>〇</span>
              {item.season}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BonsaiDisplayHero;
