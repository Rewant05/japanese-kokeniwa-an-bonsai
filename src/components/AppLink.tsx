import React from 'react';

type AppLinkProps = Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> & {
  to: string;
};

export const navigateTo = (to: string) => {
  if (window.location.pathname !== to) {
    window.history.pushState(null, '', to);
    window.dispatchEvent(new PopStateEvent('popstate'));
    return;
  }

  window.scrollTo(0, 0);
};

const isPlainLeftClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
  return event.button === 0 && !event.metaKey && !event.altKey && !event.ctrlKey && !event.shiftKey;
};

const AppLink: React.FC<AppLinkProps> = ({ to, onClick, target, ...props }) => {
  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    onClick?.(event);

    if (event.defaultPrevented || target || !isPlainLeftClick(event)) {
      return;
    }

    event.preventDefault();
    navigateTo(to);
  };

  return <a href={to} target={target} onClick={handleClick} {...props} />;
};

export default AppLink;
