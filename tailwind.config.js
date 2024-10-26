/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: '10px',
      screens: {
        sm: '100%',
        md: '100%',
        lg: '100%',
        xl: '1340px',
        '2xl': '1340px',
      },
    },
    screens: {
      'sm': '420px',
      'md': '660px',
      'lg': '950px',
      'xl': '1340px',
      '2xl': '1640px',
    },
    borderRadius: {
      'base': '20px',
      'lg': '10px',
      'xl': '50px',
      "full": "9999px"
    },
    colors: {
      transparent: 'transparent',
      gold: 'var(--gold)',
      green: 'var(--green)',
      dark: 'var(--dark)',
      black: 'var(--black)',
      purple: 'var(--purple)',
      purpleDarken: 'var(--purpleDarken)',
      white: 'var(--white)',
      red: '#A00000',
    },
  },
  plugins: [],
}