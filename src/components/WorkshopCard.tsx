import React from 'react';
import styles from './WorkshopCard.module.css';
import { Clock, Users, Leaf } from './icons';
import WoodenLabelCTA from './WoodenLabelCTA';
import { getOptimizedImage } from '../config/imageAssets';

interface WorkshopCardProps {
  title: string;
  duration: string;
  difficulty?: string;
  audience: string;
  learn: string;
  bring: string;
  careNote: string;
  cta: string;
  imageUrl?: string;
}

const WorkshopCard: React.FC<WorkshopCardProps> = ({
  title, duration, difficulty, audience, learn, bring, careNote, cta, imageUrl
}) => {
  const optimizedImage = imageUrl ? getOptimizedImage(imageUrl) : null;

  return (
    <div className={styles.card}>
      {optimizedImage && (
        <div className={styles.imageWrapper}>
          <img
            src={optimizedImage.src}
            srcSet={optimizedImage.srcSet}
            sizes={optimizedImage.sizes}
            alt={title}
            className={styles.image}
            loading="lazy"
            decoding="async"
            width={optimizedImage.width}
            height={optimizedImage.height}
          />
        </div>
      )}
      <div className={styles.cardContent}>
        <h3 className={styles.name}>{title}</h3>
        <p className={styles.audience}>{audience}</p>
        
        <div className={styles.infoGrid}>
          <div className={styles.infoItem}>
            <Clock size={16} className={styles.icon}/>
            <span>{duration}</span>
          </div>
          {difficulty && (
            <div className={styles.infoItem}>
              <Users size={16} className={styles.icon}/>
              <span>{difficulty}</span>
            </div>
          )}
        </div>
        
        <div className={styles.detailsList}>
          <div className={styles.detailRow}>
            <div className={styles.detailLabel}>学べること</div>
            <div className={styles.detailValue}>{learn}</div>
          </div>
          <div className={styles.detailRow}>
            <div className={styles.detailLabel}>持ち物</div>
            <div className={styles.detailValue}>{bring}</div>
          </div>
        </div>
        
        <div className={styles.careNote}>
          <Leaf size={16} className={styles.leafIcon}/>
          <p>{careNote}</p>
        </div>
        
        <div className={styles.ctaWrapper}>
          <WoodenLabelCTA text={cta} onClick={() => window.location.href = '#contact'} />
        </div>
      </div>
    </div>
  );
};

export default WorkshopCard;
