import React, { useEffect, useRef, useState } from 'react';
import styles from './ScrollReveal.module.css';

interface ScrollRevealProps {
  children: React.ReactNode;
  animation?: 'fadeUp' | 'fadeLeft' | 'fadeRight' | 'zoomIn';
  delay?: number;
  duration?: number;
}

const ScrollReveal: React.FC<ScrollRevealProps> = ({ 
  children, 
  animation = 'fadeUp', 
  delay = 0,
  duration = 600
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = ref.current;

    if (!node || !('IntersectionObserver' in window)) {
      setIsVisible(true);
      return;
    }

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setIsVisible(true);
      return;
    }

    let revealFrame: number | null = null;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          revealFrame = window.requestAnimationFrame(() => setIsVisible(true));
          observer.unobserve(entry.target);
        }
      },
      {
        root: null,
        rootMargin: '0px 0px -8% 0px',
        threshold: 0.01,
      }
    );

    observer.observe(node);

    return () => {
      observer.unobserve(node);
      if (revealFrame !== null) {
        window.cancelAnimationFrame(revealFrame);
      }
    };
  }, []);

  const getAnimationClass = () => {
    switch (animation) {
      case 'fadeLeft': return styles.fadeLeft;
      case 'fadeRight': return styles.fadeRight;
      case 'zoomIn': return styles.zoomIn;
      case 'fadeUp':
      default:
        return styles.fadeUp;
    }
  };

  return (
    <div 
      ref={ref} 
      className={`${styles.revealWrapper} ${getAnimationClass()} ${isVisible ? styles.visible : ''}`}
      style={{ 
        transitionDelay: `${delay}ms`,
        transitionDuration: `${duration}ms`
      }}
    >
      {children}
    </div>
  );
};

export default ScrollReveal;
