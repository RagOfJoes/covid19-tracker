import _ from 'lodash';
import Link from 'next/link';
import Head from 'next/head';
import Router from 'next/router';
import Timeline from './Timeline';
import { useEffect, memo } from 'react';
import Grid from '@material-ui/core/Grid';
import { useTimelineContext } from './Provider';
import Container from '@material-ui/core/Container';
import { Button, useTheme } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import makeStyles from '@material-ui/core/styles/makeStyles';
import AnnouncementIcon from '@material-ui/icons/Announcement';
import useNeumorphShadowStyles from '../../lib/hooks/useNeumorphShadow';

const useStyles = makeStyles(({ palette, spacing, typography }) => ({
	container: {
		padding: spacing(3, 2),
	},
	title: {
		fontWeight: typography.fontWeightMedium,
	},
	subtitle: {
		color: palette.grey[500],
	},
}));

export default memo((props) => {
	const theme = useTheme();
	const classes = useStyles();
	const { countries, setCountries, timelineCountry, setTimlineCountry } = useTimelineContext();
	const shadow = useNeumorphShadowStyles({ spread: 1, blurLength: 7, bgColor: theme.palette.secondary.main });

	useEffect(() => {
		if (countries.length === 0) setCountries(props.countries);
		const foundCountry = _.find(props.countries, (v) => v.alpha2.toLowerCase() === timelineCountry.alpha2.toLowerCase());
		if (foundCountry && timelineCountry.name.length === 0) {
			setTimlineCountry({ name: foundCountry.name, alpha2: foundCountry.alpha2 });
		}

		if (!foundCountry) {
			setTimlineCountry({ name: props.countries[0].name, alpha2: props.countries[0].alpha2 });
			Router.replace(
				{ query: { content: props.countries[0].alpha2 }, pathname: '/timeline/[country]' },
				'/timeline/' + props.countries[0].alpha2
			);
		}
	}, []);

	return (
		<>
			<Head>
				<title>{timelineCountry.alpha2} Timeline | Covid-19</title>
			</Head>
			<Container maxWidth="lg" style={{ overflow: 'hidden' }}>
				<Grid container spacing={3} className={classes.container}>
					{/* Header */}
					<Grid item container spacing={2} alignItems="center" justify="space-between">
						<Grid item>
							<Grid item>
								<Typography variant="h5" className={classes.title}>
									Timeline by Country
								</Typography>
							</Grid>

							<Grid item>
								<Typography variant="subtitle1" className={classes.subtitle}>
									Select a country to see its entire timeline
								</Typography>
							</Grid>
						</Grid>

						<Grid
							item
							style={{
								marginLeft: 'auto',
							}}
						>
							<Link passHref href="/latest">
								<Button
									variant="text"
									disableFocusRipple
									className={shadow.root}
									endIcon={<AnnouncementIcon />}
									style={{
										color: theme.palette.background.default,
										backgroundColor: theme.palette.secondary.main,
									}}
								>
									Latest
								</Button>
							</Link>
						</Grid>
					</Grid>

					<Timeline />
				</Grid>
			</Container>
		</>
	);
});
