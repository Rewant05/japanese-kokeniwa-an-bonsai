import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import styles from './BonsaiDisplayHero.module.css';
import WoodenLabelCTA from './WoodenLabelCTA';
import { siteData } from '../config/siteData';

const BonsaiDisplayHero: React.FC = () => {
  const [loaded, setLoaded] = useState(false);
  const heroRef = useRef<HTMLElement>(null);
  const frameRef = useRef<number | null>(null);
  const pointerRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 100);
    const hero = heroRef.current;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const canUsePointerParallax = window.matchMedia('(pointer: fine)').matches && !prefersReducedMotion;

    if (!hero || !canUsePointerParallax) {
      return () => clearTimeout(timer);
    }

    const commitPointerVars = () => {
      frameRef.current = null;
      hero.style.setProperty('--parallax-x', pointerRef.current.x.toFixed(3));
      hero.style.setProperty('--parallax-y', pointerRef.current.y.toFixed(3));
    };

    const schedulePointerUpdate = () => {
      if (frameRef.current === null) {
        frameRef.current = window.requestAnimationFrame(commitPointerVars);
      }
    };

    const handlePointerMove = (event: PointerEvent) => {
      pointerRef.current = {
        x: (event.clientX / window.innerWidth - 0.5) * 2,
        y: (event.clientY / window.innerHeight - 0.5) * 2,
      };
      schedulePointerUpdate();
    };

    const resetPointer = () => {
      pointerRef.current = { x: 0, y: 0 };
      schedulePointerUpdate();
    };

    hero.addEventListener('pointermove', handlePointerMove, { passive: true });
    hero.addEventListener('pointerleave', resetPointer);

    return () => {
      clearTimeout(timer);
      hero.removeEventListener('pointermove', handlePointerMove);
      hero.removeEventListener('pointerleave', resetPointer);
      if (frameRef.current !== null) {
        window.cancelAnimationFrame(frameRef.current);
      }
    };
  }, []);

  return (
    <section 
      className={`${styles.hero} bg-raked-sand`} 
      ref={heroRef}
    >
      <div className={`${styles.tokonomaWrapper} ${loaded ? styles.loaded : ''}`}>
        <div 
          className={`${styles.alcove} ${loaded ? styles.loaded : ''}`}
        >
          <div className={styles.bonsaiSilhouette}>
            <img
              src="/hero_bonsai.png"
              alt="Premium Bonsai"
              className={styles.bonsaiImage}
              width="1024"
              height="1024"
              decoding="async"
              fetchPriority="high"
            />
          </div>
        </div>

        <div className={`${styles.careTag} ${styles.careTagSun} ${loaded ? styles.loaded : ''}`}>
          日当たり
        </div>
        <div className={`${styles.careTag} ${styles.careTagWater} ${loaded ? styles.loaded : ''}`}>
          水やり
        </div>
        <div className={`${styles.careTag} ${styles.careTagPrune} ${loaded ? styles.loaded : ''}`}>
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
