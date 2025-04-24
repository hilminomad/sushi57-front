'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

export const ScrollLink = ({
  children,
  href,
  ...props
}: React.ComponentProps<typeof Link>) => {
  const pathname = usePathname();

  useEffect(() => {
    // Handle hash navigation after page load
    if (typeof window !== 'undefined' && window.location.hash) {
      const element = document.querySelector(window.location.hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [pathname]);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const targetId = href.toString().replace(/.*#/, '');
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      // Update URL without page reload
      window.history.pushState(null, '', `#${targetId}`);
    }
  };

  return (
    <Link href={href} scroll={false} onClick={handleClick} {...props}>
      {children}
    </Link>
  );
};