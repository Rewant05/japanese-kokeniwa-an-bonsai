import React from 'react';
import NextLink, { type LinkProps } from 'next/link';

type AppLinkProps = Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> & {
  to: LinkProps['href'];
};

const AppLink: React.FC<AppLinkProps> = ({ to, ...props }) => {
  return <NextLink href={to} {...props} />;
};

export default AppLink;
