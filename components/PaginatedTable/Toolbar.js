import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import makeStyles from '@material-ui/core/styles/makeStyles';

const useToolbarStyles = makeStyles(
	(theme) => ({
		root: {
			paddingLeft: theme.spacing(2),
			paddingRight: theme.spacing(1),
		},
		title: {
			flex: '1 1 100%',
		},
	}),
	{ name: 'paginatedTableToolbar' }
);

export default ({ title, children }) => {
	const classes = useToolbarStyles();

	return (
		<Toolbar className={classes['root']}>
			<Typography className={classes.title} variant="h6" component="div">
				{title}
			</Typography>
			{children}
		</Toolbar>
	);
};
