/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    screens: {
      'sm': '100px', // Custom breakpoint for 400px
      'md': '768px', // Default breakpoint for 768px
      // ... other breakpoints
    },
    
    extend: {
      keyframes: {
        fadeInBottom: {
          '0%': {
            opacity: '0',
            transform: 'translateY(100%)',
          },
          '100%': {
            opacity: '1',
          },
        },
      },
      animation: {
        fadeInBottom: 'fadeInBottom 1s ease-out', // Adjust duration and easing as needed
      },
      colors: {
        primary: {
          'Camel': '#b19361',
          'white': '#ffffff',
          'gray': '#f3f4f6',
          'gray2': '#d1d5db',
          'gray3': '#6b7280',
          'black': '#000000',
          'Off-White-Peach': '#fef5ef',
          'slate': '#64748b',
          'green':'#047b42'

        },
      }
    },
  },
  plugins: [],
}

