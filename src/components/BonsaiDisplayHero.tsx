import React, { useEffect, useRef } from 'react';
import Link from './AppLink';
import styles from './BonsaiDisplayHero.module.css';
import WoodenLabelCTA from './WoodenLabelCTA';
import { siteSummary } from '../config/siteSummary';

const BonsaiDisplayHero: React.FC = () => {
  const heroRef = useRef<HTMLElement>(null);
  const frameRef = useRef<number | null>(null);
  const pointerRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const hero = heroRef.current;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const canUsePointerParallax = window.matchMedia('(pointer: fine)').matches && !prefersReducedMotion;

    if (!hero || !canUsePointerParallax) {
      return;
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
      <div className={styles.tokonomaWrapper}>
        <div className={styles.alcove}>
          <div className={styles.bonsaiSilhouette}>
            <img
              src="/hero_bonsai-520.jpg"
              srcSet="/hero_bonsai-360.jpg 360w, /hero_bonsai-520.jpg 520w, /hero_bonsai-720.jpg 720w"
              sizes="(max-width: 767px) 200px, 240px"
              alt="Premium Bonsai"
              className={styles.bonsaiImage}
              width="520"
              height="520"
              decoding="async"
              fetchPriority="high"
            />
          </div>
        </div>

        <div className={`${styles.careTag} ${styles.careTagSun}`}>
          日当たり
        </div>
        <div className={`${styles.careTag} ${styles.careTagWater}`}>
          水やり
        </div>
        <div className={`${styles.careTag} ${styles.careTagPrune}`}>
          剪定
        </div>
      </div>

      <div className={styles.heroContent}>
        <h1 className={styles.headline}>「小さな庭を、毎日の手の中に。」</h1>
        <p className={styles.subtext}>{siteSummary.description}</p>
        
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
          {siteSummary.seasonalStrip.map((season, idx) => (
            <div key={idx} className={styles.seasonalItem}>
              <span className={styles.seasonMark}>〇</span>
              {season}
            </div>
          ))}
          {/* Duplicate for infinite scroll illusion */}
          {siteSummary.seasonalStrip.map((season, idx) => (
            <div key={`dup-${idx}`} className={styles.seasonalItem}>
              <span className={styles.seasonMark}>〇</span>
              {season}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BonsaiDisplayHero;
