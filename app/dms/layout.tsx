import { ReactNode } from 'react';
import { Nav } from '@/components/nav';
import { MobileNav } from '@/components/mobile-nav';

export default function DMsLayout({ children }: { children: ReactNode }) {
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
