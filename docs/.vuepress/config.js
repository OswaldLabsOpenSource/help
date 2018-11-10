module.exports = {
	title: 'Oswald Labs Help',
	ga: 'UA-79176349-12',
	themeConfig: {
		search: false,
		sidebar: {
			'/usage-guidelines/': [
				'/usage-guidelines/',
				'/usage-guidelines/modes',
				'/usage-guidelines/browsers',
				'/usage-guidelines/do-not-track',
				'/usage-guidelines/cookies'
			],
			'/developers/': [
				'/developers/',
				'/developers/installation'
			],
		},
	  nav: [
			{ text: 'Usage Guidelines', link: '/usage-guidelines/' },
			{ text: 'Developer Documentations', link: '/developers/' },
			{ text: 'Oswald Labs Home', link: 'https://oswaldlabs.com' },
	  ]
	}
  }