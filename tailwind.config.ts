import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      maxWidth: {
        container: '1320px',
        'desktop-container': '1626px',
      },
      colors: {
        yellow: {
          200: '#FFD11A',
          300: '#FFD633',
          400: '#FFE066',
          500: '#FFEB99',
          600: '#FFF5CC',
          700: '#FFFAE5',
          800: '#FFFCF0',
          900: '#FBFBFE',
        },
        dark: {
          200: '#141414',
          300: '#1A1A1A',
          400: '#262626',
          500: '#333333',
          600: '#404040',
          700: '#4D4D4D',
          800: '#595959',
          900: '#666666',
        },
        grey: {
          200: '#7E7E81',
          300: '#98989A',
          400: '#B3B3B3',
          500: '#CCCCCC',
          600: '#E4E4E7',
          700: '#F1F1F3',
          800: '#F7F7F8',
          900: '#FCFCFD',
        },
      },
      height: {
        0.5: '2px',
        13: '52px',
        15: '60px',
        12.5: '50px',
      },
      width: {
        'calc-width': 'calc(100% + 6.5px)',
        13: '52px',
        15: '60px',
        12.5: '50px',
      },
      fontSize: {
        '4.5xl': '40px',
        '1.5xl': '22px',
        '2.5px': '26px',
      },
      gap: {
        15: '60px',
        7.5: '30px',
      },
    },
  },
  plugins: [],
}
export default config
