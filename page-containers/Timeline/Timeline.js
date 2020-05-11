import moment from 'moment';
import { memo } from 'react';
import Router from 'next/router';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { useTimelineContext } from './Provider';
import Skeleton from '@material-ui/lab/Skeleton';
import formatNumber from '../../lib/formatNumber';
import LineChart from '../../components/LineChart';
import Typography from '@material-ui/core/Typography';
import useTheme from '@material-ui/core/styles/useTheme';
import CountrySelect from '../../components/CountrySelect';
import PaginatedTable from '../../components/PaginatedTable';
import makeStyles from '@material-ui/core/styles/makeStyles';
import { red, green, orange } from '@material-ui/core/colors';
import useNeumorphShadowStyles from '../../lib/hooks/useNeumorphShadow';

const headCells = [
	{ id: 'country', numeric: false, disablePadding: false, label: 'Country' },
	{ id: 'last_update', numeric: true, disablePadding: false, label: 'Last Update' },
	{ id: 'cases', numeric: true, disablePadding: false, label: 'Cases' },
	{ id: 'deaths', numeric: true, disablePadding: false, label: 'Deaths' },
	{ id: 'recovered', numeric: true, disablePadding: false, label: 'Recovered' },
];

const useStyles = makeStyles(
	({ palette, spacing, typography }) => ({
		title: {
			fontWeight: typography.fontWeightMedium,
		},
		subtitle: {
			color: palette.grey[500],
		},
		chartContainer: {
			overflow: 'hidden',
			marginTop: spacing(2),
		},
		chartTitle: {
			padding: spacing(1, 3),
		},
		chart: {
			marginTop: spacing(3),
			padding: spacing(1, 0),
		},
		paper: {
			padding: spacing(1, 3),
		},
		card: {
			padding: spacing(4, 1),
		},
	}),
	{ name: 'timeline' }
);

const CardValue = ({ loading, data, title, latestNumber, diffNumber }) => {
	const classes = useStyles();
	if (loading) {
		return (
			<>
				<Grid item>
					<Skeleton width={180} height={20} />
				</Grid>
				<Grid item>
					<Skeleton width={120} height={39} />
				</Grid>

				<Grid item>
					<Skeleton width={80} height={14} />
				</Grid>
			</>
		);
	}

	if (!loading && data.length > 0) {
		return (
			<>
				<Grid item>
					<Typography gutterBottom variant="subtitle2" className={classes.subtitle}>
						{title}
					</Typography>
				</Grid>
				<Grid item>
					<Typography variant="subtitle1" className={classes.title}>
						{latestNumber}
					</Typography>
				</Grid>
				<Grid item>
					<Typography variant="caption" className={classes.subtitle}>
						{diffNumber >= 0 ? `+${formatNumber(diffNumber, 0)}` : `${formatNumber(diffNumber, 0)}`}
					</Typography>
				</Grid>
			</>
		);
	}

	if (!loading && data.length === 0) {
		return (
			<>
				<Grid item>
					<Typography gutterBottom variant="subtitle2" className={classes.subtitle}>
						{title}
					</Typography>
				</Grid>
				<Grid item>
					<Typography variant="subtitle1" className={classes.title}>
						0
					</Typography>
				</Grid>
				<Grid item>
					<Typography variant="caption" className={classes.subtitle}>
						+0
					</Typography>
				</Grid>
			</>
		);
	}
};

export default memo(() => {
	const theme = useTheme();
	const classes = useStyles();
	const shadow = useNeumorphShadowStyles({ bgColor: theme.palette.background.default });

	const { timeline, countries, setCountries, timelineCountry, setTimlineCountry } = useTimelineContext();

	const latestCaseNumber = timeline.data.length > 1 && formatNumber(timeline.data[0].cases, 0);
	const latestDeathsNumber = timeline.data.length > 1 && formatNumber(timeline.data[0].deaths, 0);
	const latestRecoveredNumber = timeline.data.length > 1 && formatNumber(timeline.data[0].recovered, 0);

	const diffCaseNumbers = timeline.data.length > 1 && timeline.data[0].cases - timeline.data[1].cases;
	const diffDeathsNumers = timeline.data.length > 1 && timeline.data[0].deaths - timeline.data[1].deaths;
	const diffRecoveredNumbers = timeline.data.length > 1 && timeline.data[0].recovered - timeline.data[1].recovered;

	const latestDate = timeline.data.length > 1 && moment(timeline.data[0].last_update).format('M/D/YYYY');
	return (
		<>
			<Grid item xs={12} container alignItems="center" justify="flex-end">
				<CountrySelect
					countries={countries}
					country={timelineCountry}
					setCountries={setCountries}
					loading={timelineCountry.name.length === 0 || timeline.loading}
					setCountry={(c) => {
						Router.push({ query: c.alpha2, pathname: '/timeline/[country]' }, `/timeline/${c.alpha2}`, {
							shallow: true,
						});
						setTimlineCountry({ ...c });
					}}
				/>
			</Grid>

			<Grid item sm={4} xs={12}>
				<Paper className={`${classes.card} ${shadow.root}`} style={{ borderBottom: `3px solid ${orange[200]}` }}>
					<Grid container direction="column" alignItems="center">
						<CardValue
							{...timeline}
							diffNumber={diffCaseNumbers}
							latestNumber={latestCaseNumber}
							title={`Cases since ${latestDate}`}
						/>
					</Grid>
				</Paper>
			</Grid>

			<Grid item sm={4} xs={12}>
				<Paper className={`${classes.card} ${shadow.root}`} style={{ borderBottom: `3px solid ${green[400]}` }}>
					<Grid container direction="column" alignItems="center">
						<CardValue
							{...timeline}
							diffNumber={diffRecoveredNumbers}
							latestNumber={latestRecoveredNumber}
							title={`Recovered since ${latestDate}`}
						/>
					</Grid>
				</Paper>
			</Grid>

			<Grid item sm={4} xs={12}>
				<Paper className={`${classes.card} ${shadow.root}`} style={{ borderBottom: `3px solid ${red[600]}` }}>
					<Grid container direction="column" alignItems="center">
						<CardValue
							{...timeline}
							diffNumber={diffDeathsNumers}
							latestNumber={latestDeathsNumber}
							title={`Deaths since ${latestDate}`}
						/>
					</Grid>
				</Paper>
			</Grid>

			<Grid item xs={12} container direction="column" className={classes.chartContainer}>
				<Grid item>
					<Typography variant="h6">Graph</Typography>
				</Grid>
				<Grid item>
					<Typography variant="subtitle2" className={classes.subtitle}>
						{timeline.data.length > 1 &&
							`${moment(timeline.data[timeline.data.length - 1].last_update).format('M/D/YYYY')} - ${moment(
								timeline.data[0].last_update
							).format('M/D/YYYY')}`}
					</Typography>
				</Grid>
				<Paper elevation={0} style={{ backgroundColor: 'transparent' }}>
					<Grid item className={classes.chart}>
						<LineChart
							height={355}
							data={timeline.data}
							tooltipProps={{
								content: ({ active, label, payload }) => {
									return (
										<Paper className={classes.paper}>
											<Grid container direction="column">
												<Grid item>
													<Typography variant="subtitle1">
														Date: {moment(label).format('M/D/YYYY')}
													</Typography>
												</Grid>

												{payload &&
													payload.map((entry, index) => {
														const { name, value } = entry;
														return (
															<Typography key={`item-${index}`} variant="subtitle2">
																{name.charAt(0).toUpperCase() + name.slice(1)}:{' '}
																{formatNumber(value, 0)}
															</Typography>
														);
													})}
											</Grid>
										</Paper>
									);
								},
							}}
						/>
					</Grid>
				</Paper>
			</Grid>

			<Grid item xs={12}>
				<PaginatedTable
					title="Table"
					data={timeline.data}
					headCells={headCells}
					defaultOrder="last_update"
					loading={timeline.loading}
				/>
			</Grid>
		</>
	);
});
