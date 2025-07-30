/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				'primary-blue': '#163158',
				'primary-lemon-green': '#59790b',
				'primary-dark-green': '#033e28',
			},
			typography: {
				DEFAULT: {
					css: {
						maxWidth: 'none',
						color: '#374151',
						lineHeight: '1.75',
						fontSize: '1.125rem',
						p: {
							marginTop: '1rem',
							marginBottom: '1rem',
						},
						h1: {
							color: '#111827',
							fontWeight: '700',
							fontSize: '2.25rem',
							marginTop: '2rem',
							marginBottom: '1rem',
							lineHeight: '1.25',
						},
						h2: {
							color: '#111827',
							fontWeight: '700',
							fontSize: '1.875rem',
							marginTop: '2rem',
							marginBottom: '1rem',
							lineHeight: '1.25',
						},
						h3: {
							color: '#111827',
							fontWeight: '600',
							fontSize: '1.5rem',
							marginTop: '1.5rem',
							marginBottom: '0.75rem',
							lineHeight: '1.375',
						},
						h4: {
							color: '#111827',
							fontWeight: '600',
							fontSize: '1.25rem',
							marginTop: '1.5rem',
							marginBottom: '0.75rem',
							lineHeight: '1.375',
						},
						strong: {
							color: '#111827',
							fontWeight: '600',
						},
						blockquote: {
							fontStyle: 'italic',
							color: '#6B7280',
							borderLeftColor: '#163158',
							borderLeftWidth: '4px',
							paddingLeft: '1.5rem',
							paddingTop: '0.5rem',
							paddingBottom: '0.5rem',
							marginTop: '1.5rem',
							marginBottom: '1.5rem',
							backgroundColor: '#F9FAFB',
						},
						code: {
							color: '#163158',
							backgroundColor: '#F3F4F6',
							paddingTop: '0.25rem',
							paddingBottom: '0.25rem',
							paddingLeft: '0.5rem',
							paddingRight: '0.5rem',
							borderRadius: '0.25rem',
							fontSize: '0.875rem',
							fontFamily:
								'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace',
						},
						a: {
							color: '#163158',
							textDecoration: 'none',
							'&:hover': {
								textDecoration: 'underline',
							},
						},
						ul: {
							listStyleType: 'disc',
							paddingLeft: '1.5rem',
							marginTop: '1rem',
							marginBottom: '1rem',
						},
						ol: {
							listStyleType: 'decimal',
							paddingLeft: '1.5rem',
							marginTop: '1rem',
							marginBottom: '1rem',
						},
						li: {
							marginTop: '0.5rem',
							marginBottom: '0.5rem',
						},
					},
				},
			},
		},
	},
	plugins: [
		require('@tailwindcss/typography'),
		// require('@tailwindcss/line-clamp'),
	],
};
