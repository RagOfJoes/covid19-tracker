import { useEffect, useMemo } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider, createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';

export default ({ Component, pageProps }) => {
	useEffect(() => {
		// Remove the server-side injected CSS.
		const jssStyles = document.querySelector('#jss-server-side');
		if (jssStyles) {
			jssStyles.parentNode.removeChild(jssStyles);
		}
	}, []);

	const theme = useMemo(
		() =>
			responsiveFontSizes(
				createMuiTheme({
					palette: {
						type: 'dark',

						primary: {
							main: '#009688',
							dark: '#00695f',
							light: '#33ab9f',
						},
						secondary: {
							main: '#1de9b6',
							dark: '#14a37f',
							light: '#4aedc4',
						},
					},
				})
			),
		[]
	);

	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<Component {...pageProps} />
		</ThemeProvider>
	);
};
