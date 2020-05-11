import Grid from '@material-ui/core/Grid';
import Skeleton from '@material-ui/lab/Skeleton';

export default (props) => {
	return (
		<>
			<Grid item sm={6} md={4} xs={12}>
				<Skeleton width="100%" height={500} variant="rect" />
			</Grid>
			<Grid item sm={6} md={4} xs={12}>
				<Skeleton width="100%" height={500} variant="rect" />
			</Grid>
			<Grid item sm={6} md={4} xs={12}>
				<Skeleton width="100%" height={500} variant="rect" />
			</Grid>
			<Grid item sm={6} md={4} xs={12}>
				<Skeleton width="100%" height={500} variant="rect" />
			</Grid>
			<Grid item sm={6} md={4} xs={12}>
				<Skeleton width="100%" height={500} variant="rect" />
			</Grid>
			<Grid item sm={6} md={4} xs={12}>
				<Skeleton width="100%" height={500} variant="rect" />
			</Grid>
		</>
	);
};
