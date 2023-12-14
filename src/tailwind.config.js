tailwind.config = {
	theme: {
		extend: {
			fontFamily: {
				sans: ['Inter', 'san-serif']
			},
			colors: {
				'orange': 'hsl(35, 77%, 62%)',
				'red': 'hsl(5, 85%, 63%)',
				'white': 'hsl(36, 100%, 99%)',
				'gray': 'hsl(233, 8%, 79%)',
				'gray-blue': 'hsl(236, 13%, 42%)',
				'dark-blue': 'hsl(240, 100%, 5%)',
			},
			fontSize: {
				'4.5xl': ['2.5rem', { lineHeight: '2.5rem'}],
				'5.5xl': ['3.25rem', { lineHeight: '3.25rem'}]
			},
		}
	}
}