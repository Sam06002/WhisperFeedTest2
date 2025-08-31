import { ReactNode } from 'react';
import { Inter } from 'next/font/google';
import { cn } from '@/lib/utils';
import { Nav } from '@/components/nav';
import { Sidebar } from '@/components/sidebar';
import { MobileNav } from '@/components/mobile-nav';
import { Toaster } from '@/components/toaster';
import { AuthProvider } from '@/contexts/AuthContext';

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });

export default function MainLayout({
  children,
  modal,
}: {
  children: ReactNode;
  modal?: ReactNode;
}) {
  return (
    <AuthProvider>
      <div
        className={cn(
          'min-h-screen bg-background font-sans antialiased',
          inter.variable
        )}
      >
        <div className="flex h-screen overflow-hidden">
          {/* Left Navigation - Desktop */}
          <div className="hidden md:flex md:flex-shrink-0">
            <div className="flex flex-col w-64 border-r border-gray-200 bg-white dark:bg-gray-900">
              <Nav />
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1 flex flex-col overflow-hidden">
            {/* Top Navigation - Mobile */}
            <div className="md:hidden">
              <MobileNav />
            </div>

            {/* Page Content */}
            <main className="flex-1 overflow-y-auto bg-gray-50 dark:bg-gray-900">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                {children}
              </div>
            </main>
          </div>

          {/* Right Sidebar - Desktop */}
          <div className="hidden lg:flex lg:flex-shrink-0">
            <div className="flex flex-col w-80 border-l border-gray-200 bg-white dark:bg-gray-900">
              <Sidebar />
            </div>
          </div>
        </div>
        {modal}
        <Toaster />
      </div>
    </AuthProvider>
  );
}
