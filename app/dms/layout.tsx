'use client';

import { ReactNode, useEffect, useState } from 'react';
import dynamic from 'next/dynamic';

// Import navigation components with no SSR
const Nav = dynamic(() => import('@/components/nav').then(mod => mod.Nav), { ssr: false });
const MobileNav = dynamic(() => import('@/components/mobile-nav').then(mod => mod.MobileNav), { ssr: false });

export default function DMsLayout({ children }: { children: ReactNode }) {
  const [isMounted, setIsMounted] = useState(false);

  // Only render navigation after mounting to avoid hydration issues
  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return <div className="flex h-screen w-full items-center justify-center">Loading...</div>;
  }

  return (
    <div className="flex h-screen flex-col md:flex-row">
      {/* Left Navigation - Desktop */}
      <div className="hidden md:flex md:flex-shrink-0">
        <Nav />
      </div>
      
      {/* Main Content */}
      <main className="flex-1 overflow-y-auto">
        {children}
      </main>
      
      {/* Mobile Navigation */}
      <div className="md:hidden">
        <MobileNav />
      </div>
    </div>
  );
}
