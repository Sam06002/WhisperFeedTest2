import * as React from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';

interface AvatarProps extends React.HTMLAttributes<HTMLDivElement> {
  src?: string | null;
  alt?: string;
  name?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  status?: 'online' | 'offline' | 'busy' | 'away';
  className?: string;
}

const sizeMap = {
  sm: 'h-8 w-8 text-xs',
  md: 'h-10 w-10 text-sm',
  lg: 'h-12 w-12 text-base',
  xl: 'h-16 w-16 text-lg',
  '2xl': 'h-24 w-24 text-xl',
} as const;

const statusMap = {
  online: 'bg-green-500',
  offline: 'bg-gray-400',
  busy: 'bg-red-500',
  away: 'bg-yellow-500',
} as const;

const Avatar = React.forwardRef<HTMLDivElement, AvatarProps>(
  (
    {
      src,
      alt = 'User avatar',
      name,
      size = 'md',
      status,
      className,
      ...props
    },
    ref
  ) => {
    const initials = name
      ? name
          .split(' ')
          .map((n) => n[0])
          .join('')
          .toUpperCase()
          .slice(0, 2)
      : null;

    return (
      <div
        ref={ref}
        className={cn(
          'relative inline-flex items-center justify-center rounded-full bg-gray-200 overflow-hidden',
          'transition-all duration-200',
          'hover:ring-2 hover:ring-offset-2 hover:ring-brand/30',
          'focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-brand/50',
          'active:scale-95',
          'select-none',
          sizeMap[size],
          className
        )}
        {...props}
        role="img"
        aria-label={alt}
      >
        {src ? (
          <div className="h-full w-full">
            <Image
              src={src}
              alt={alt}
              fill
              className="object-cover"
              onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
                // Fallback to initials if image fails to load
                const target = e.target as HTMLImageElement;
                if (name) {
                  target.style.display = 'none';
                }
              }}
              unoptimized={process.env.NODE_ENV !== 'production'}
            />
          </div>
        ) : null}
        {(!src || (name && !src)) && (
          <span className="font-medium text-gray-600">{initials || '?'}</span>
        )}
        {status && (
          <span
            className={cn(
              'absolute bottom-0 right-0 block rounded-full border-2 border-white',
              statusMap[status],
              size === 'sm' ? 'h-2 w-2' : 'h-3 w-3',
              {
                'h-2 w-2': size === 'sm',
                'h-3 w-3': size === 'md',
                'h-3.5 w-3.5': size === 'lg',
                'h-4 w-4': size === 'xl',
                'h-5 w-5': size === '2xl',
              }
            )}
          />
        )}
      </div>
    );
  }
);

Avatar.displayName = 'Avatar';

export { Avatar };
export type { AvatarProps };
