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
      colors:{
        'primary': 'rgb(0,0,0)',/* black */
        'second': 'rgb(253,156,13)',/* moztasa */
        'third':'#3b3b3b', /* gray */
        'fourth':'rgb(255,255,255)'/* white*/
      },
      gridTemplateColumns:{
        'responsive':'repeat(auto-fill, minmax(150px, 1fr))',
        'responsiveCart':'repeat(auto-fill, minmax(400px, 1fr))'
      }
    },
  },
  plugins: [],
}
export default config
