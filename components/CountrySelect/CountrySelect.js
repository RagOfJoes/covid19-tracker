import fetch from 'isomorphic-unfetch';
import { useState, memo } from 'react';
import Skeleton from '@material-ui/lab/Skeleton';
import LanguageIcon from '@material-ui/icons/Language';
import { Typography, Grid, IconButton, Menu, MenuItem } from '@material-ui/core';

export default ({ country, setCountry, countries, setCountries }) => {
	const [open, toggleOpen] = useState(false);
	const [loading, toggleLoading] = useState(false);
	const [countryRef, setCountryRef] = useState(null);

	const fetchCountries = async () => {
		toggleLoading(true);
		const res = await fetch(`/api/countries`, {
			headers: {
				'Access-Control-Allow-Origin': '*',
				'Access-Control-Allow-Methods': 'GET',
			},
		});
		const json = await res.json();
		setCountries(json);
		toggleLoading(false);
	};

	return (
		<>
			<Typography variant="button">
				{country.alpha2}({country.name})
			</Typography>
			<IconButton
				onClick={(e) => {
					if (!countries || countries.length === 0) {
						fetchCountries();
					}
					setCountryRef(e.currentTarget);
					toggleOpen(true);
				}}
			>
				<LanguageIcon />
			</IconButton>
			<Menu
				open={open}
				keepMounted
				anchorEl={countryRef}
				getContentAnchorEl={null}
				onClose={() => toggleOpen(false)}
				anchorOrigin={{
					horizontal: 'left',
					vertical: 'bottom',
				}}
				PaperProps={{
					style: {
						width: '100%',
						maxWidth: 250,
						maxHeight: 48 * 4.5,
					},
				}}
			>
				{loading && (
					<Grid item container spacing={1} direction="column">
						<Grid item xs={12}>
							<Skeleton width="100%" height={39} variant="rect" />
						</Grid>
						<Grid item xs={12}>
							<Skeleton width="100%" height={39} variant="rect" />
						</Grid>
						<Grid item xs={12}>
							<Skeleton width="100%" height={39} variant="rect" />
						</Grid>
						<Grid item xs={12}>
							<Skeleton width="100%" height={39} variant="rect" />
						</Grid>
						<Grid item xs={12}>
							<Skeleton width="100%" height={39} variant="rect" />
						</Grid>
						<Grid item xs={12}>
							<Skeleton width="100%" height={39} variant="rect" />
						</Grid>
						<Grid item xs={12}>
							<Skeleton width="100%" height={39} variant="rect" />
						</Grid>
						<Grid item xs={12}>
							<Skeleton width="100%" height={39} variant="rect" />
						</Grid>
					</Grid>
				)}
				{!loading &&
					countries.map((option) => (
						<MenuItem
							key={option.alpha2}
							selected={country.alpha2 === option.alpha2}
							onClick={() => {
								toggleOpen(false);
								country.alpha2 !== option.alpha2 && setCountry({ alpha2: option.alpha2, name: option.name });
							}}
						>
							{option.name}
						</MenuItem>
					))}
			</Menu>
		</>
	);
};
