import { ButtonHTMLAttributes, forwardRef } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const buttonVariants = cva(
  'inline-flex items-center justify-center rounded-lg text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none',
  {
    variants: {
      variant: {
        default: [
          'bg-brand text-white',
          'hover:bg-brand-dark/90',
          'active:bg-brand-dark/80',
          'focus-visible:ring-brand/50',
          'disabled:bg-brand/50',
        ],
        secondary: [
          'bg-gray-100 text-gray-900',
          'hover:bg-gray-200/90',
          'active:bg-gray-200/80',
          'focus-visible:ring-gray-300',
          'disabled:bg-gray-100/50',
        ],
        outline: [
          'border border-gray-300 bg-transparent',
          'hover:bg-gray-50/80',
          'active:bg-gray-100/60',
          'focus-visible:ring-gray-200',
          'disabled:opacity-40',
        ],
        ghost: [
          'hover:bg-gray-100/80',
          'active:bg-gray-200/60',
          'focus-visible:ring-gray-100',
          'disabled:opacity-40',
        ],
        link: [
          'text-brand',
          'hover:underline hover:text-brand-dark',
          'focus-visible:ring-brand/30',
          'active:text-brand-dark/80',
          'disabled:opacity-60',
        ],
        accent: [
          'bg-accent text-white',
          'hover:bg-accent-dark/90',
          'active:bg-accent-dark/80',
          'focus-visible:ring-accent/50',
          'disabled:bg-accent/50',
        ],
      },
      size: {
        default: 'h-10 py-2 px-4',
        sm: 'h-9 px-3 rounded-md',
        lg: 'h-11 px-8 rounded-xl',
        icon: 'h-10 w-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  isLoading?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, isLoading = false, children, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        disabled={isLoading || props.disabled}
        {...props}
      >
        {isLoading ? (
          <>
            <svg
              className="animate-spin -ml-1 mr-2 h-4 w-4 text-current"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              />
            </svg>
            {children}
          </>
        ) : (
          children
        )}
      </button>
    );
  }
);

Button.displayName = 'Button';

export { Button, buttonVariants };
