import React from 'react';
import Link from 'next/link';
import styles from './WoodenLabelCTA.module.css';

interface WoodenLabelCTAProps {
  text: string;
  href?: string;
  onClick?: React.MouseEventHandler<HTMLAnchorElement | HTMLButtonElement>;
  type?: 'button' | 'submit';
}

const WoodenLabelCTA: React.FC<WoodenLabelCTAProps> = ({ text, href, onClick, type = 'button' }) => {
  const content = (
    <>
      <span className={styles.hole}></span>
      <span className={styles.text}>{text}</span>
    </>
  );

  if (href) {
    return (
      <Link className={styles.woodenLabel} href={href} onClick={onClick}>
        {content}
      </Link>
    );
  }

  return (
    <button className={styles.woodenLabel} onClick={onClick} type={type}>
      {content}
    </button>
  );
};

export default WoodenLabelCTA;
