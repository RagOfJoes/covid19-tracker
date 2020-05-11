import { useState } from 'react';
import Skeleton from '@material-ui/lab/Skeleton';
import LanguageIcon from '@material-ui/icons/Language';
import { Typography, Grid, IconButton, Menu, MenuItem } from '@material-ui/core';

export default ({ loading, country, setCountry, countries }) => {
	const [open, toggleOpen] = useState(false);
	const [countryRef, setCountryRef] = useState(null);

	return (
		<>
			{loading ? (
				<Skeleton width={80} height={40} component="p" />
			) : (
				<Typography variant="button">
					{country.alpha2}({country.name})
				</Typography>
			)}

			<IconButton
				onClick={(e) => {
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
