/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		colors: {
			transparent: 'transparent',
			current: 'currentColor',
			ebony: '#47533E',
			eerie: '#1E221B',
			night: '#141414',
			red: '#E00004',
			smoke: '#F5F5F5'
		},
		container: {
			center: true,
			padding: {
				DEFAULT: '1rem',
				lg: '2rem'
			}
		},
		extend: {}
	},
	plugins: []
};
