import moment from 'moment';
import Grid from '@material-ui/core/Grid';
import { useLatestContext } from './Provider';
import Skeleton from '@material-ui/lab/Skeleton';
import ArticlesLoading from './Articles.loading';
import Typography from '@material-ui/core/Typography';
import Article from '../../components/Article/Article';
import { motion, AnimatePresence } from 'framer-motion';
import useTheme from '@material-ui/core/styles/useTheme';
import makeStyles from '@material-ui/core/styles/makeStyles';

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
	const { news, offset, setOffset } = useLatestContext();

	return (
		<>
			<Grid item xs={12}>
				<Typography variant="h5" className={classes.title}>
					Articles
				</Typography>
			</Grid>

			<AnimatePresence>
				<Grid
					item
					container
					spacing={3}
					exit="initial"
					animate="enter"
					initial="initial"
					component={motion.div}
					variants={articleParentAnim}
				>
					{news.error && (
						<Grid item>
							<Typography>An error has occured! Please try again later</Typography>
						</Grid>
					)}

					{!news.loading && !news.error && news.data.length === 0 && (
						<Grid item>
							<Typography>No Articles were found</Typography>
						</Grid>
					)}
					{!news.error &&
						news.data.length > 0 &&
						news.data.map((article, index) => {
							const { url, name, image, provider, description, datePublished } = article;
							return (
								<Grid
									item
									sm={6}
									md={4}
									xs={12}
									variants={articleAnim}
									component={motion.div}
									key={`${name}-${index}`}
								>
									<Article
										title={name}
										imgTitle={name}
										actionUrl={url}
										description={description}
										avatarTitle={provider[0]?.name}
										avatarUrl={provider[0]?.image?.thumbnail?.contentUrl}
										imgUrl={image?.thumbnail?.contentUrl.concat('?h=170')}
										avatarSubheader={moment(datePublished).format('MMM D, YYYY')}
									/>
								</Grid>
							);
						})}

					{!news.error && news.loading && <ArticlesLoading />}
				</Grid>
			</AnimatePresence>
		</>
	);
};

const articleParentAnim = {
	initial: {
		opacity: 0,
	},
	enter: {
		opacity: 1,
		transition: {
			staggerChildren: 200,
		},
	},
};

const articleAnim = {
	initial: {
		y: 40,
		opacity: 0,
	},
	enter: {
		y: 0,
		opacity: 1,
	},
};
