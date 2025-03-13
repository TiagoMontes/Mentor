/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animation: {
        'spin-anti': 'spinAnti 1s linear infinite', // Nova animação anti-horária
      },
      keyframes: {
        spinAnti: {
          '0%': { transform: 'rotate(360deg)' }, // Começa em 360
          '100%': { transform: 'rotate(0deg)' }, // Termina em 0 (anti-horário)
        },
      },
    },
  },
  plugins: [],
}
