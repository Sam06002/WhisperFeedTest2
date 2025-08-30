import * as React from 'react';
import { cn } from '@/lib/utils';

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: string;
  label?: string;
  helperText?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  fullWidth?: boolean;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const {
    className,
    type = 'text',
    error,
    label,
    helperText,
    leftIcon,
    rightIcon,
    fullWidth = false,
    id: propId,
    ...restProps
  } = props;
  
  const generatedId = React.useId();
  const inputId = propId || `input-${generatedId}`;
  const hasError = !!error;

  return (
    <div className={cn('space-y-1.5', { 'w-full': fullWidth })}>
      {label && (
        <label
          htmlFor={inputId}
          className={cn(
            'block text-sm font-medium text-gray-700',
            hasError ? 'text-red-600' : ''
          )}
        >
          {label}
        </label>
      )}
      <div className="relative">
        {leftIcon && (
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            {leftIcon}
          </div>
        )}
        <input
          id={inputId}
          type={type}
          className={cn(
            'flex h-10 w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm',
            'file:border-0 file:bg-transparent file:text-sm file:font-medium',
            'placeholder:text-gray-400',
            'transition-all duration-200',
            'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/50 focus-visible:ring-offset-1',
            'disabled:cursor-not-allowed disabled:opacity-50 disabled:bg-gray-50',
            'hover:border-gray-400',
            'dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:placeholder-gray-500',
            'dark:focus-visible:ring-brand/30 dark:focus-visible:ring-offset-gray-900',
            hasError
              ? [
                  'border-red-500 focus-visible:ring-red-400/50',
                  'dark:border-red-600 dark:focus-visible:ring-red-500/50',
                ]
              : 'focus:border-brand dark:focus:border-brand/70',
            leftIcon ? 'pl-10' : '',
            rightIcon ? 'pr-10' : '',
            className
          )}
          ref={ref}
          aria-invalid={hasError}
          aria-describedby={hasError ? `${inputId}-error` : undefined}
          {...restProps}
        />
        {rightIcon && (
          <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
            {rightIcon}
          </div>
        )}
      </div>
      {hasError ? (
        <p
          id={`${inputId}-error`}
          className="text-sm text-red-600 mt-1"
          role="alert"
        >
          {error}
        </p>
      ) : helperText ? (
        <p className="text-xs text-gray-500 mt-1">{helperText}</p>
      ) : null}
    </div>
  );
});

Input.displayName = 'Input';

export { Input };
