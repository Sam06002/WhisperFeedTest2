import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Home, Search, Bell, Mail, Bookmark, List, User, MoreHorizontal } from 'lucide-react';

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

  return (
    <nav className="flex-1 px-2 py-4 space-y-1">
      <div className="flex items-center justify-center md:justify-start px-4 mb-6">
        <div className="h-10 w-10 rounded-full bg-brand flex items-center justify-center">
          <span className="text-white font-bold">W</span>
        </div>
      </div>
      
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
