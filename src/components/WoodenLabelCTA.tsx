import React from 'react';
import styles from './WoodenLabelCTA.module.css';

interface WoodenLabelCTAProps {
  text: string;
  onClick?: () => void;
  type?: 'button' | 'submit';
}

const WoodenLabelCTA: React.FC<WoodenLabelCTAProps> = ({ text, onClick, type = 'button' }) => {
  return (
    <button className={styles.woodenLabel} onClick={onClick} type={type}>
      <span className={styles.hole}></span>
      <span className={styles.text}>{text}</span>
    </button>
  );
};

export default WoodenLabelCTA;
