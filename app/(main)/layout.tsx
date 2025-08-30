import { ReactNode } from 'react';
import { Inter } from 'next/font/google';
import { cn } from '@/lib/utils';
import { Nav } from '@/components/nav';
import { Sidebar } from '@/components/sidebar';
import { MobileNav } from '@/components/mobile-nav';

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });

export default function MainLayout({
  children,
  modal,
}: {
  children: ReactNode;
  modal?: ReactNode;
}) {
  return (
    <div
      className={cn(
        'min-h-screen bg-background font-sans antialiased',
        inter.variable
      )}
    >
      <div className="flex h-screen overflow-hidden">
        {/* Left Navigation - Desktop */}
        <div className="hidden md:flex md:flex-shrink-0">
          <div className="flex flex-col w-64 border-r border-gray-200 bg-white">
            <Nav />
          </div>
        </div>

        {/* Mobile Bottom Navigation */}
        <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200">
          <MobileNav />
        </div>

        {/* Main Content */}
        <div className="flex flex-col flex-1 w-0 overflow-hidden">
          <main className="flex-1 relative z-0 overflow-y-auto focus:outline-none pt-16 pb-20 md:pb-0 md:pt-0">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-6">
              {children}
            </div>
          </main>
        </div>

        {/* Right Sidebar - Desktop */}
        <div className="hidden lg:flex lg:flex-shrink-0">
          <div className="flex flex-col w-80 border-l border-gray-200 bg-white p-4">
            <Sidebar />
          </div>
        </div>
      </div>
      
      {/* Modal Slot */}
      {modal}
    </div>
  );
}
