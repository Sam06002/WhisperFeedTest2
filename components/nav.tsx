import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Home, Search, Bell, Mail, Bookmark, List, User, MoreHorizontal, LogIn, LogOut } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { useEffect, useState } from 'react';

type NavItem = {
  name: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
};

const navItems: NavItem[] = [
  { name: 'Home', href: '/home', icon: Home },
  { name: 'Explore', href: '/explore', icon: Search },
  { name: 'Notifications', href: '/notifications', icon: Bell },
  { name: 'Messages', href: '/dms', icon: Mail },
  { name: 'Bookmarks', href: '/bookmarks', icon: Bookmark },
  { name: 'Lists', href: '/lists', icon: List },
  { name: 'Profile', href: '/profile', icon: User },
  { name: 'More', href: '/more', icon: MoreHorizontal },
];

export function Nav() {
  const pathname = usePathname();
  const router = useRouter();
  const { user, isAuthenticated, logout, isLoading } = useAuth();
  const [isClient, setIsClient] = useState(false);

  // Fix hydration issues with Next.js
  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleLogout = () => {
    logout();
    router.push('/login');
  };

  // Don't render anything during server-side rendering
  if (!isClient || isLoading) {
    return null;
  }

  // Navigation items for authenticated users
  const authNavItems: NavItem[] = [
    { name: 'Home', href: '/home', icon: Home },
    { name: 'Explore', href: '/explore', icon: Search },
    { name: 'Notifications', href: '/notifications', icon: Bell },
    { name: 'Messages', href: '/dms', icon: Mail },
    { name: 'Bookmarks', href: '/bookmarks', icon: Bookmark },
    { name: 'Lists', href: '/lists', icon: List },
    { name: 'Profile', href: '/profile', icon: User },
    { name: 'More', href: '/more', icon: MoreHorizontal },
  ];

  // Navigation items for non-authenticated users
  const publicNavItems: NavItem[] = [
    { name: 'Home', href: '/', icon: Home },
    { name: 'Explore', href: '/explore', icon: Search },
    { name: 'Login', href: '/login', icon: LogIn },
  ];

  const navItems = isAuthenticated ? authNavItems : publicNavItems;

  return (
    <nav className="flex-1 px-2 py-4 space-y-1">
      <div className="flex items-center justify-center md:justify-start px-4 mb-6">
        <Link href="/" className="h-10 w-10 rounded-full bg-brand flex items-center justify-center hover:bg-brand/90 transition-colors">
          <span className="text-white font-bold">W</span>
        </Link>
      </div>
      
      {isAuthenticated ? (
        <>
          <div className="mt-6">
            <Button className="w-full rounded-full font-bold">
              Post
            </Button>
          </div>
          <div className="mt-4 pt-4 border-t border-gray-200">
            <div className="flex items-center px-4 py-2">
              <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center">
                <span className="text-gray-700 font-bold text-sm">
                  {user?.name?.charAt(0) || 'U'}
                </span>
              </div>
              <div className="ml-3">
                <p className="text-sm font-medium text-gray-900">
                  {user?.name || 'User'}
                </p>
                <p className="text-xs text-gray-500">
                  @{user?.username || 'user'}
                </p>
              </div>
              <Button 
                variant="ghost" 
                size="icon" 
                className="ml-auto"
                onClick={handleLogout}
                aria-label="Sign out"
              >
                <LogOut className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </>
      ) : (
        <div className="mt-6 space-y-2">
          <Link 
            href="/login"
            className="w-full inline-flex items-center justify-center rounded-full font-bold border border-input bg-background px-4 py-2 text-sm font-medium ring-offset-background transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
          >
            Sign in
          </Link>
          <Link 
            href="/signup"
            className="w-full inline-flex items-center justify-center rounded-full font-bold bg-primary text-primary-foreground hover:bg-primary/90 px-4 py-2 text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
          >
            Sign up
          </Link>
        </div>
      )}
      
      {navItems.map((item) => {
        const isActive = pathname === item.href;
        return (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              'group flex items-center px-4 py-3 text-base font-medium rounded-full',
              isActive
                ? 'font-bold'
                : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900',
              'transition-colors duration-200'
            )}
          >
            <item.icon
              className={cn(
                'mr-4 h-6 w-6 flex-shrink-0',
                isActive ? 'text-current' : 'text-gray-500 group-hover:text-gray-700'
              )}
              aria-hidden="true"
            />
            <span className="hidden md:inline">{item.name}</span>
          </Link>
        );
      })}
      
      <div className="mt-4 px-4">
        <Button className="hidden md:flex w-full justify-center rounded-full bg-brand hover:bg-brand-dark text-white font-bold py-3 px-4">
          Post
        </Button>
      </div>
      
      {/* User Profile Dropdown */}
      <div className="absolute bottom-4 left-0 right-0 px-4">
        <div className="hidden md:flex items-center p-3 rounded-full hover:bg-gray-100 cursor-pointer">
          <div className="flex-shrink-0 h-10 w-10 rounded-full bg-gray-300"></div>
          <div className="ml-3 hidden lg:block">
            <p className="text-sm font-medium text-gray-900">User Name</p>
            <p className="text-xs text-gray-500">@username</p>
          </div>
          <MoreHorizontal className="ml-auto h-5 w-5 text-gray-500 hidden lg:block" />
        </div>
      </div>
    </nav>
  );
}
