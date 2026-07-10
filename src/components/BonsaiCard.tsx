import React from 'react';
import Image from 'next/image';
import styles from './BonsaiCard.module.css';
import { Leaf, Sun, Droplets, Sparkles } from './icons';
import { getOptimizedImage } from '../config/imageAssets';

interface BonsaiCardProps {
  name: string;
  type: string;
  difficulty: string;
  sunlight: string;
  watering: string;
  seasonalHighlight: string;
  beginnerTip: string;
  description: string;
  imageUrl?: string;
}

const BonsaiCard: React.FC<BonsaiCardProps> = ({
  name, type, difficulty, sunlight, watering, seasonalHighlight, beginnerTip, description, imageUrl
}) => {
  const optimizedImage = imageUrl ? getOptimizedImage(imageUrl) : null;

  return (
    <div className={styles.card}>
      {optimizedImage && (
        <div className={styles.imageWrapper}>
          <Image
            src={optimizedImage.src}
            sizes={optimizedImage.sizes}
            alt={name}
            className={styles.image}
            loading="lazy"
            width={optimizedImage.width}
            height={optimizedImage.height}
          />
        </div>
      )}
      <div className={styles.cardContent}>
        <div className={styles.cardHeader}>
          <h3 className={styles.name}>{name}</h3>
          <span className={styles.typeBadge}>{type}</span>
        </div>
        <p className={styles.description}>{description}</p>
        
        <div className={styles.details}>
          <div className={styles.detailItem}>
            <span className={styles.label}>難易度</span>
            <span className={styles.value}>{difficulty}</span>
          </div>
          <div className={styles.detailItem}>
            <span className={styles.label}><Sun size={16} className={styles.icon}/> 日当たり</span>
            <span className={styles.value}>{sunlight}</span>
          </div>
          <div className={styles.detailItem}>
            <span className={styles.label}><Droplets size={16} className={styles.icon}/> 水やり</span>
            <span className={styles.value}>{watering}</span>
          </div>
        </div>
        
        <div className={styles.highlightSection}>
          <div className={styles.highlight}>
            <span className={styles.highlightLabel}><Sparkles size={16}/> 季節の見どころ</span>
            <p>{seasonalHighlight}</p>
          </div>
          <div className={styles.tip}>
            <span className={styles.tipLabel}><Leaf size={16}/> 初心者へのアドバイス</span>
            <p>{beginnerTip}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BonsaiCard;
