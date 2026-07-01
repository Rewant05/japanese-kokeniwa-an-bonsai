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
  duration = 800
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (ref.current) {
            observer.unobserve(ref.current);
          }
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
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
