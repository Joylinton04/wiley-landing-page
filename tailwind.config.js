/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["class"],
    content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
  	extend: {
  		fontFamily: {
  			default: 'Open Sans, sans-serif'
  		},
  		colors: {
  			secwhite: '#eaeaea',
			priText: "#313131",
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
		padding: {
			padLR: '3rem',
		},
		fontSize: {
			title: '32px'
		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
}