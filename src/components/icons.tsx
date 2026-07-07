import React from 'react';

type IconProps = {
  size?: number;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
  strokeWidth?: number;
};

type IconBaseProps = IconProps & {
  children: React.ReactNode;
};

const IconBase: React.FC<IconBaseProps> = ({
  children,
  size = 24,
  color = 'currentColor',
  className,
  style,
  strokeWidth = 2,
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    style={style}
    aria-hidden="true"
    focusable="false"
  >
    {children}
  </svg>
);

export const Menu: React.FC<IconProps> = (props) => (
  <IconBase {...props}>
    <path d="M4 7h16" />
    <path d="M4 12h16" />
    <path d="M4 17h16" />
  </IconBase>
);

export const X: React.FC<IconProps> = (props) => (
  <IconBase {...props}>
    <path d="M18 6 6 18" />
    <path d="m6 6 12 12" />
  </IconBase>
);

export const Leaf: React.FC<IconProps> = (props) => (
  <IconBase {...props}>
    <path d="M4 21c8-1 15-8 16-17-9 1-16 8-16 17Z" />
    <path d="M4 21c4-6 8-10 16-17" />
  </IconBase>
);

export const Sun: React.FC<IconProps> = (props) => (
  <IconBase {...props}>
    <circle cx="12" cy="12" r="4" />
    <path d="M12 2v2" />
    <path d="M12 20v2" />
    <path d="m4.93 4.93 1.41 1.41" />
    <path d="m17.66 17.66 1.41 1.41" />
    <path d="M2 12h2" />
    <path d="M20 12h2" />
    <path d="m6.34 17.66-1.41 1.41" />
    <path d="m19.07 4.93-1.41 1.41" />
  </IconBase>
);

export const Droplets: React.FC<IconProps> = (props) => (
  <IconBase {...props}>
    <path d="M7 16.3A4 4 0 0 1 3 12c0-2.6 4-7.3 4-7.3s4 4.7 4 7.3a4 4 0 0 1-4 4.3Z" />
    <path d="M17 21a4 4 0 0 1-4-4c0-2.4 4-6.8 4-6.8s4 4.4 4 6.8a4 4 0 0 1-4 4Z" />
  </IconBase>
);

export const Sparkles: React.FC<IconProps> = (props) => (
  <IconBase {...props}>
    <path d="m12 3 1.7 4.3L18 9l-4.3 1.7L12 15l-1.7-4.3L6 9l4.3-1.7L12 3Z" />
    <path d="m19 14 .8 2.2L22 17l-2.2.8L19 20l-.8-2.2L16 17l2.2-.8L19 14Z" />
    <path d="m5 15 .7 1.8L8 17.5l-2.3.7L5 20l-.7-1.8-2.3-.7 2.3-.7L5 15Z" />
  </IconBase>
);

export const Scissors: React.FC<IconProps> = (props) => (
  <IconBase {...props}>
    <circle cx="6" cy="6" r="3" />
    <circle cx="6" cy="18" r="3" />
    <path d="M20 4 8.1 15.9" />
    <path d="M8.1 8.1 20 20" />
  </IconBase>
);

export const AlertCircle: React.FC<IconProps> = (props) => (
  <IconBase {...props}>
    <circle cx="12" cy="12" r="10" />
    <path d="M12 8v5" />
    <path d="M12 16h.01" />
  </IconBase>
);

export const Eye: React.FC<IconProps> = (props) => (
  <IconBase {...props}>
    <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7Z" />
    <circle cx="12" cy="12" r="3" />
  </IconBase>
);

export const Clock: React.FC<IconProps> = (props) => (
  <IconBase {...props}>
    <circle cx="12" cy="12" r="10" />
    <path d="M12 6v6l4 2" />
  </IconBase>
);

export const Users: React.FC<IconProps> = (props) => (
  <IconBase {...props}>
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M22 21v-2a4 4 0 0 0-3-3.9" />
    <path d="M16 3.1a4 4 0 0 1 0 7.8" />
  </IconBase>
);

export const Mail: React.FC<IconProps> = (props) => (
  <IconBase {...props}>
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="m3 7 9 6 9-6" />
  </IconBase>
);

export const MapPin: React.FC<IconProps> = (props) => (
  <IconBase {...props}>
    <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" />
    <circle cx="12" cy="10" r="3" />
  </IconBase>
);
