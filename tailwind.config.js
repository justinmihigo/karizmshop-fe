/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        // primary: '#3490dc',
        // secondary: '#ffcc00',
        black:'#1A1A1A',
        white:'#FFFFFF',
        red:'#E63946',
        blue:'#1E90FF',
        green:'#2ECC71',
        yellow:'#FFD700',
        orange:'#FF8C00',
        accent: '#ff0000',
        background: '#f8f9fa',
        text: '#212529',
        success: '#28a745',
        warning: '#ffc107',
        danger: '#dc3545',
        info: '#17a2b8',
        light: '#f8f9fa',
        dark: '#343a40',
        
      }
    },
  },
  plugins: [],
}

