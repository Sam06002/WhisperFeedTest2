import type { Config } from "tailwindcss";

const colors = {
  // Base colors
  background: {
    light: '#ffffff',
    dark: '#000000',
    subtle: {
      light: '#f7f9f9',
      dark: '#16181c'
    }
  },
  
  // Text colors
  text: {
    primary: {
      light: '#0f1419',
      dark: '#e7e9ea'
    },
    secondary: {
      light: '#536471',
      dark: '#8b98a5'
    },
    tertiary: {
      light: '#8b98a5',
      dark: '#71767b'
    }
  },
  
  // Brand colors (Twitter Blue)
  brand: {
    DEFAULT: '#1d9bf0',
    hover: '#1a8cd8',
    active: '#1773be',
    subtle: {
      light: '#e8f5fd',
      dark: '#1a8cd8'
    }
  },
  
  // Border colors
  border: {
    light: '#eff3f4',
    dark: '#2f3336'
  },
  
  // State colors
  success: '#00ba7c',
  warning: '#ffd400',
  error: '#f91880',
  info: '#1d9bf0',
  
  // Gray scale
  gray: {
    50: '#f7f9f9',
    100: '#e6e6e6',
    200: '#d9d9d9',
    300: '#b3b3b3',
    400: '#8a8a8a',
    500: '#6e767d',
    600: '#536471',
    700: '#3d3d3d',
    800: '#2f3336',
    900: '#1a1a1a',
  },
  
  // Overlay colors
  overlay: {
    light: 'rgba(91, 112, 131, 0.4)',
    dark: 'rgba(91, 112, 131, 0.4)'
  }
};

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
        ...colors,
      },
      
      // Border radius
      borderRadius: {
        none: '0px',
        xs: '0.25rem',     // 4px
        sm: '0.5rem',      // 8px
        DEFAULT: '1rem',   // 16px
        md: '1.25rem',     // 20px
        lg: '1.5rem',      // 24px
        xl: '2rem',        // 32px
        full: '9999px',
      },
      
      // Border colors
      borderColor: {
        DEFAULT: 'hsl(220 13% 91%)',
      },
      
      // Box shadow
      boxShadow: {
        'sm': '0 1px 2px 0 rgba(0, 0, 0, 0.03)',
        'DEFAULT': '0 1px 3px 0 rgba(0, 0, 0, 0.05), 0 1px 2px 0 rgba(0, 0, 0, 0.03)',
        'md': '0 4px 6px -1px rgba(0, 0, 0, 0.03), 0 2px 4px -1px rgba(0, 0, 0, 0.02)',
        'lg': '0 10px 15px -3px rgba(0, 0, 0, 0.03), 0 4px 6px -2px rgba(0, 0, 0, 0.02)',
        'xl': '0 20px 25px -5px rgba(0, 0, 0, 0.05), 0 10px 10px -5px rgba(0, 0, 0, 0.02)',
        '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.1)',
        'inner': 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.02)',
        'none': 'none',
        'button': '0 2px 4px rgba(0, 0, 0, 0.04)',
        'button-hover': '0 4px 8px rgba(0, 0, 0, 0.06)',
      },
      
      // Animation
      animation: {
        'fade-in': 'fadeIn 150ms ease-out',
        'fade-out': 'fadeOut 150ms ease-out',
        'slide-up': 'slideUp 200ms ease-out',
        'slide-down': 'slideDown 200ms ease-out',
        'scale-in': 'scaleIn 200ms cubic-bezier(0.16, 1, 0.3, 1)',
      },
      
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeOut: {
          '0%': { opacity: '1' },
          '100%': { opacity: '0' },
        },
        slideUp: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
      
      // Typography
      fontSize: {
        'xs': '0.75rem',     // 12px
        'sm': '0.8125rem',   // 13px
        'base': '0.9375rem', // 15px
        'lg': '1rem',        // 16px
        'xl': '1.25rem',     // 20px
        '2xl': '1.5rem',     // 24px
        '3xl': '1.75rem',    // 28px
        '4xl': '2rem',       // 32px
        '5xl': '2.5rem',     // 40px
      },
      lineHeight: {
        'tight': '1.25',
        'normal': '1.5',
        'relaxed': '1.75',
      },
      
      // Spacing
      spacing: {
        '0.5': '0.125rem',   // 2px
        '1.5': '0.375rem',   // 6px
        '2.5': '0.625rem',   // 10px
        '3.5': '0.875rem',   // 14px
        '4.5': '1.125rem',   // 18px
        '13': '3.25rem',     // 52px
        '15': '3.75rem',     // 60px
        '18': '4.5rem',      // 72px
        '22': '5.5rem',      // 88px
        '30': '7.5rem',      // 120px
        '34': '8.5rem',      // 136px
      },
      
      // Z-index
      zIndex: {
        '1': '1',
        '2': '2',
        '3': '3',
        '4': '4',
        '5': '5',
        'max': '9999',
      },
      
      // Transitions
      transitionProperty: {
        'all': 'all',
        'color': 'color, background-color, border-color, text-decoration-color, fill, stroke',
        'opacity': 'opacity',
        'transform': 'transform',
      },
      
      // Extend container
      container: {
        center: true,
        padding: '1rem',
        screens: {
          '2xl': '1265px',
        },
      },
    },
  },
  variants: {
    extend: {
      opacity: ['disabled', 'group-hover'],
      scale: ['group-hover', 'hover'],
      backgroundColor: ['active', 'disabled', 'group-hover', 'dark'],
      textColor: ['active', 'disabled', 'group-hover', 'dark'],
      borderColor: ['active', 'disabled', 'group-hover', 'dark'],
      ringColor: ['hover', 'active', 'focus', 'dark'],
      ringOffsetColor: ['hover', 'active', 'focus', 'dark'],
      ringOffsetWidth: ['hover', 'active', 'focus', 'dark'],
      ringOpacity: ['hover', 'active', 'focus', 'dark'],
      ringWidth: ['hover', 'active', 'focus', 'dark'],
      boxShadow: ['active', 'focus', 'dark'],
      transform: ['group-hover', 'hover'],
      translate: ['group-hover', 'hover'],
    },
  },
  
  plugins: [
    require('@tailwindcss/forms')({
      strategy: 'class',
    }),
    require('@tailwindcss/typography'),
  ],
} satisfies Config;
