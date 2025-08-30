import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { Home, Search, Bell, Mail, User } from 'lucide-react';

type MobileNavItem = {
  name: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
};

const mobileNavItems: MobileNavItem[] = [
  { name: 'Home', href: '/home', icon: Home },
  { name: 'Explore', href: '/explore', icon: Search },
  { name: 'Notifications', href: '/notifications', icon: Bell },
  { name: 'Messages', href: '/dms', icon: Mail },
  { name: 'Profile', href: '/profile', icon: User },
];

export function MobileNav() {
  const pathname = usePathname();

  return (
    <nav className="flex items-center justify-around h-16">
      {mobileNavItems.map((item) => {
        const isActive = pathname === item.href;
        return (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              'flex flex-col items-center justify-center flex-1 h-full',
              'text-xs font-medium',
              isActive ? 'text-brand' : 'text-gray-500',
              'transition-colors duration-200'
            )}
          >
            <item.icon
              className={cn(
                'h-6 w-6 mb-1',
                isActive ? 'text-brand' : 'text-gray-500'
              )}
              aria-hidden="true"
            />
            <span>{item.name}</span>
          </Link>
        );
      })}
    </nav>
  );
}
