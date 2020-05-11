import React from 'react';
import LazyLoad from 'react-lazyload';
import Card from '@material-ui/core/Card';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Skeleton from '@material-ui/lab/Skeleton';
import CardMedia from '@material-ui/core/CardMedia';
import CardHeader from '@material-ui/core/CardHeader';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import useTheme from '@material-ui/core/styles/useTheme';
import makeStyles from '@material-ui/core/styles/makeStyles';
import useNeumorphShadowStyles from '../../lib/hooks/useNeumorphShadow';

const useStyles = makeStyles(({ shape, spacing }) => ({
	root: {
		margin: 0,
		borderRadius: shape.borderRadius,
	},
	content: {
		padding: spacing(2, 4),
	},
	media: {
		height: 200,
	},
}));

export default ({ title, description, avatarUrl, avatarTitle, avatarSubheader, imgUrl, imgTitle, actionUrl }) => {
	const theme = useTheme();
	const classes = useStyles();
	const shadow = useNeumorphShadowStyles({ bgColor: theme.palette.background.default });

	return (
		<Card className={`${classes.root} ${shadow.root}`}>
			<CardHeader
				title={avatarTitle}
				subheader={avatarSubheader}
				avatar={
					<Avatar>
						<img src={avatarUrl} />
					</Avatar>
				}
			/>
			{imgUrl && (
				<LazyLoad debounce={100} placeholder={<Skeleton width="100%" height={200} variant="rect" />}>
					<CardMedia image={imgUrl} title={imgTitle} className={classes.media} />
				</LazyLoad>
			)}
			<CardContent className={classes.content}>
				<Typography gutterBottom variant="subtitle1" component="h2">
					{title}
				</Typography>
				<Typography variant="body2" color="textSecondary" component="p">
					{description}
				</Typography>
			</CardContent>
			<CardActions className={classes.content}>
				<Button href={actionUrl} color="primary" variant="contained" target="__blank">
					Learn More
				</Button>
			</CardActions>
		</Card>
	);
};
