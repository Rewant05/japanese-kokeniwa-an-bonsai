import React from 'react';
import styles from './CareCalendarCard.module.css';
import { Droplets, Scissors, AlertCircle, Eye } from 'lucide-react';
import { getOptimizedImage } from '../config/imageAssets';

interface CareCalendarCardProps {
  season: string;
  tasks: string[];
  watering: string;
  pruning: string;
  caution: string;
  observation: string;
  index: number;
  imageUrl?: string;
}

const CareCalendarCard: React.FC<CareCalendarCardProps> = ({
  season, tasks, watering, pruning, caution, observation, index, imageUrl
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
            alt={season}
            className={styles.image}
            loading="lazy"
            decoding="async"
            width={optimizedImage.width}
            height={optimizedImage.height}
          />
        </div>
      )}
      <div className={styles.cardContent}>
        <div className={styles.seasonHeader}>
          <div className={styles.seasonNumber}>{index + 1}</div>
          <h3 className={styles.seasonTitle}>{season}</h3>
        </div>
        
        <div className={styles.tasksBox}>
          <span className={styles.tasksLabel}>主な手入れ</span>
          <div className={styles.tags}>
            {tasks.map((task, i) => (
              <span key={i} className={styles.tag}>{task}</span>
            ))}
          </div>
        </div>

        <div className={styles.detailsGrid}>
          <div className={styles.detailItem}>
            <div className={styles.detailHeader}>
              <Droplets size={16} className={styles.icon} />
              <h4>水やり</h4>
            </div>
            <p>{watering}</p>
          </div>
          
          <div className={styles.detailItem}>
            <div className={styles.detailHeader}>
              <Scissors size={16} className={styles.icon} />
              <h4>剪定・手入れ</h4>
            </div>
            <p>{pruning}</p>
          </div>
        </div>

        <div className={styles.tipsBox}>
          <div className={styles.tipItem}>
            <AlertCircle size={16} className={styles.alertIcon} />
            <p>{caution}</p>
          </div>
          <div className={styles.tipItem}>
            <Eye size={16} className={styles.eyeIcon} />
            <p>{observation}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareCalendarCard;
