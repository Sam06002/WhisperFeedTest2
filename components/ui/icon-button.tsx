import * as React from 'react';
import { cn } from '@/lib/utils';

interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'outline' | 'ghost' | 'link';
  size?: 'sm' | 'md' | 'lg';
  isRounded?: boolean;
  isLoading?: boolean;
  icon: React.ReactNode;
  'aria-label': string;
}

const iconButtonVariants = {
  default: [
    'bg-brand text-white',
    'hover:bg-brand-dark/90 active:bg-brand-dark/80',
    'focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-brand/50',
    'disabled:opacity-50 disabled:pointer-events-none',
    'transition-all duration-200',
  ],
  outline: [
    'border border-gray-300 bg-transparent',
    'hover:bg-gray-50/80 active:bg-gray-100/60',
    'focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-gray-200',
    'dark:border-gray-600 dark:hover:bg-gray-700/50 dark:active:bg-gray-600/50',
    'disabled:opacity-50 disabled:pointer-events-none',
    'transition-all duration-200',
  ],
  ghost: [
    'bg-transparent',
    'hover:bg-gray-100/80 active:bg-gray-200/60',
    'focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-gray-100',
    'dark:hover:bg-gray-700/50 dark:active:bg-gray-600/40',
    'disabled:opacity-50 disabled:pointer-events-none',
    'transition-all duration-200',
  ],
  link: [
    'text-brand hover:underline underline-offset-4',
    'hover:text-brand-dark active:text-brand-dark/80',
    'focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-brand/30',
    'disabled:opacity-50 disabled:pointer-events-none',
    'transition-all duration-200',
  ],
};

const iconButtonSizes = {
  sm: 'h-8 w-8',
  md: 'h-10 w-10',
  lg: 'h-12 w-12',
};

const IconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>(
  (
    {
      className,
      variant = 'default',
      size = 'md',
      isRounded = true,
      isLoading = false,
      icon,
      disabled = false,
      'aria-label': ariaLabel,
      ...props
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        type="button"
        disabled={isLoading || disabled}
        aria-label={ariaLabel}
        className={cn(
          'inline-flex items-center justify-center',
          'focus:outline-none select-none',
          'active:scale-95',
          isRounded ? 'rounded-full' : 'rounded-lg',
          ...(Array.isArray(iconButtonVariants[variant]) 
            ? iconButtonVariants[variant] 
            : [iconButtonVariants[variant]]),
          iconButtonSizes[size],
          className
        )}
        {...props}
      >
        {isLoading ? (
          <div className="animate-spin h-4 w-4 border-2 border-current border-t-transparent rounded-full" />
        ) : (
          icon
        )}
      </button>
    );
  }
);

IconButton.displayName = 'IconButton';

export { IconButton, type IconButtonProps };
