import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        "primary": '#011915',
        "primary-300": '#1A302C',
        "secondary": '#AAFFC3',
        "secondary-300": '#F2FFF2',
        "text-on-light": "#546052",
        "light-200": "#F9FAFB"
      }
    },
  },
  plugins: [],
}
export default config
