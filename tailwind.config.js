/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: ['class', '[data-mode="dark"]'],
  theme: {
  	screens: {
  		sm: '640px',
  		md: '768px',
  		lg: '1024px',
  		xl: '1280px',
  		'2xl': '1536px'
  	},
  	colors: {
  		transparent: 'transparent',
  		black: '#000',
  		white: '#fff',
  		current: 'currentColor',
  		grey: {
  			'10': '#F9FAFB',
  			'20': '#F3F4F6',
  			'30': '#E5E7EB',
  			'40': '#D1D5DB',
  			'50': '#9CA3AF',
  			'60': '#6B7280',
  			'70': '#4B5563',
  			'80': '#374151',
  			'90': '#1F2937',
  			'100': '#111827'
  		},
  		blue: {
  			'10': '#EFF6FF',
  			'20': '#DBEAFE',
  			'30': '#BFDBFE',
  			'40': '#93C5FD',
  			'50': '#60A5FA',
  			'60': '#3B82F6',
  			'70': '#2563EB',
  			'80': '#1D4ED8',
  			'90': '#1E40AF',
  			'100': '#1E3A8A'
  		},
  		indigo: {
  			'10': '#EEF2FF',
  			'20': '#E0E7FF',
  			'30': '#C7D2FE',
  			'40': '#A5B4FC',
  			'50': '#818CF8',
  			'60': '#6366F1',
  			'70': '#4F46E5',
  			'80': '#4338CA',
  			'90': '#3730A3',
  			'100': '#312E81'
  		},
  		purple: {
  			'10': '#F5F3FF',
  			'20': '#EDE9FE',
  			'30': '#DDD6FE',
  			'40': '#C4B5FD',
  			'50': '#A78BFA',
  			'60': '#8B5CF6',
  			'70': '#7C3AED',
  			'80': '#6D28D9',
  			'90': '#5B21B6',
  			'100': '#4C1D95'
  		},
  		red: {
  			'10': '#FEF2F2',
  			'20': '#FEE2E2',
  			'30': '#FECACA',
  			'40': '#FCA5A5',
  			'50': '#F87171',
  			'60': '#EF4444',
  			'70': '#DC2626',
  			'80': '#B91C1C',
  			'90': '#991B1B',
  			'100': '#7F1D1D'
  		},
  		green: {
  			'10': '#ECFDF5',
  			'20': '#D1FAE5',
  			'30': '#A7F3D0',
  			'40': '#6EE7B7',
  			'50': '#34D399',
  			'60': '#10B981',
  			'70': '#059669',
  			'80': '#047857',
  			'90': '#065F46',
  			'100': '#064E3B'
  		},
  		yellow: {
  			'10': '#FFFBEB',
  			'20': '#FEF3C7',
  			'30': '#FDE68A',
  			'40': '#FCD34D',
  			'50': '#FBBF24',
  			'60': '#F59E0B',
  			'70': '#D97706',
  			'80': '#B45309',
  			'90': '#92400E',
  			'100': '#78350F'
  		},
  		pink: {
  			'10': '#FDF2F8',
  			'20': '#FCE7F3',
  			'30': '#FBCFE8',
  			'40': '#F9A8D4',
  			'50': '#F472B6',
  			'60': '#EC4899',
  			'70': '#DB2777',
  			'80': '#BE185D',
  			'90': '#9D174D',
  			'100': '#831843'
  		}
  	},
  	extend: {
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		colors: {
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
