import Head from 'next/head';
import Link from 'next/link';
import Articles from './Articles';
import { Waypoint } from 'react-waypoint';
import Grid from '@material-ui/core/Grid';
import { useLatestContext } from './Provider';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import TimelineIcon from '@material-ui/icons/Timeline';
import useTheme from '@material-ui/core/styles/useTheme';
import makeStyles from '@material-ui/core/styles/makeStyles';
import PaginatedTable from '../../components/PaginatedTable';
import useNeumorphShadowStyles from '../../lib/hooks/useNeumorphShadow';

const headCells = [
	{ id: 'country', numeric: false, disablePadding: false, label: 'Country' },
	{ id: 'last_update', numeric: true, disablePadding: false, label: 'Last Update' },
	{ id: 'cases', numeric: true, disablePadding: false, label: 'Cases' },
	{ id: 'deaths', numeric: true, disablePadding: false, label: 'Deaths' },
	{ id: 'recovered', numeric: true, disablePadding: false, label: 'Recovered' },
];

const useStyles = makeStyles(({ palette, spacing, typography, breakpoints }) => ({
	container: {
		padding: spacing(3, 2),

		[breakpoints.down('sm')]: {
			padding: spacing(2, 0),
		},
	},
	title: {
		fontWeight: typography.fontWeightMedium,
	},
	subtitle: {
		color: palette.grey[500],
	},
}));

export default (props) => {
	const theme = useTheme();
	const classes = useStyles();
	const { latestStatus, news, offset, setOffset } = useLatestContext();
	const shadow = useNeumorphShadowStyles({ spread: 1, blurLength: 7, bgColor: theme.palette.secondary.main });

	return (
		<>
			<Head>
				<title>Latest News | Covid-19</title>
			</Head>
			<Container maxWidth="lg" style={{ overflow: 'hidden' }}>
				<Grid container spacing={3} className={classes.container}>
					{/* Header */}
					<Grid item container spacing={2} alignItems="center" justify="space-between">
						<Grid item>
							<Grid item>
								<Typography variant="h5" className={classes.title}>
									Latest News
								</Typography>
							</Grid>

							<Grid item>
								<Typography variant="subtitle1" className={classes.subtitle}>
									Get the latest news on Covid-19
								</Typography>
							</Grid>
						</Grid>

						<Grid
							item
							style={{
								marginLeft: 'auto',
							}}
						>
							<Link passHref href="/timeline">
								<Button
									variant="text"
									disableFocusRipple
									className={shadow.root}
									endIcon={<TimelineIcon />}
									style={{
										color: theme.palette.background.default,
										backgroundColor: theme.palette.secondary.main,
									}}
								>
									Timeline
								</Button>
							</Link>
						</Grid>
					</Grid>

					<Grid item xs={12}>
						<PaginatedTable
							title="Table"
							headCells={headCells}
							data={latestStatus.data}
							defaultOrder="last_update"
							loading={latestStatus.loading}
						/>
					</Grid>

					<Articles />

					<Grid item>
						<Waypoint
							fireOnRapidScroll={false}
							onEnter={() => {
								if (news.loading) return;

								setOffset(offset + 1);
							}}
						/>
					</Grid>
				</Grid>
			</Container>
		</>
	);
};
