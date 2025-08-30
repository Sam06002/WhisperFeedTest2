import type { Config } from "tailwindcss";

export default {
  darkMode: 'class',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Base colors
        background: 'hsl(0, 0%, 100%)',
        foreground: 'hsl(0, 0%, 10%)',
        
        // Brand colors
        brand: {
          DEFAULT: 'hsl(224, 76%, 48%)',
          light: 'hsl(224, 76%, 55%)',
          dark: 'hsl(224, 76%, 40%)',
          muted: 'hsl(224, 76%, 96%)',
        },
        
        // Accent colors
        accent: {
          DEFAULT: 'hsl(187, 100%, 42%)',
          light: 'hsl(187, 100%, 50%)',
          dark: 'hsl(187, 100%, 35%)',
        },
        
        // Gray scale
        gray: {
          50: 'hsl(0, 0%, 98%)',
          100: 'hsl(0, 0%, 95%)',
          200: 'hsl(0, 0%, 90%)',
          300: 'hsl(0, 0%, 80%)',
          400: 'hsl(0, 0%, 60%)',
          500: 'hsl(0, 0%, 45%)',
          600: 'hsl(0, 0%, 35%)',
          700: 'hsl(0, 0%, 25%)',
          800: 'hsl(0, 0%, 15%)',
          900: 'hsl(0, 0%, 10%)',
        },
        
        // Semantic colors
        success: 'hsl(142, 72%, 36%)',
        warning: 'hsl(38, 92%, 50%)',
        error: 'hsl(0, 84%, 60%)',
        info: 'hsl(199, 89%, 48%)',
      },
      
      // Border radius
      borderRadius: {
        '4xl': '2rem',
      },
      
      // Box shadow
      boxShadow: {
        'sm': '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        'DEFAULT': '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
        'md': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'lg': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        'xl': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
        'inner': 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
        'none': 'none',
      },
      
      // Animation
      animation: {
        'fade-in': 'fadeIn 150ms ease-out',
        'slide-up': 'slideUp 200ms ease-out',
      },
      
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
      
      // Typography
      fontSize: {
        'xs': '0.75rem',     // 12px
        'sm': '0.875rem',    // 14px
        'base': '1rem',      // 16px
        'lg': '1.125rem',    // 18px
        'xl': '1.25rem',     // 20px
        '2xl': '1.5rem',     // 24px
        '3xl': '1.875rem',   // 30px
        '4xl': '2.25rem',    // 36px
        '5xl': '3rem',       // 48px
      },
      
      // Spacing
      spacing: {
        '18': '4.5rem',      // 72px
        '22': '5.5rem',      // 88px
        '30': '7.5rem',      // 120px
      },
    },
  },
  variants: {
    extend: {
      opacity: ['disabled'],
      cursor: ['disabled'],
      backgroundColor: ['active', 'disabled'],
      textColor: ['active', 'disabled'],
      borderColor: ['active', 'disabled'],
      ringColor: ['hover', 'active', 'focus'],
      ringOffsetColor: ['hover', 'active', 'focus'],
      ringOffsetWidth: ['hover', 'active', 'focus'],
      ringOpacity: ['hover', 'active', 'focus'],
      ringWidth: ['hover', 'active', 'focus'],
    },
  },
  plugins: [
    require('@tailwindcss/forms')({
      strategy: 'class',
    }),
  ],
} satisfies Config;
