/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	safelist: [
		'text-black',
		// Automatically generate all text color combinations
		...['blue', 'green', 'red', 'yellow', 'orange', 'purpule', 'amber', 'rose'].flatMap((color) =>
			[300, 400, 500, 600, 700, 800, 900].map((shade) => `text-${color}-${shade}`)
		)
	],
	theme: {
		extend: {}
	},
	plugins: []
};
