import React from 'react';
import Skeleton from '@material-ui/lab/Skeleton';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

export default ({}) => {
	return (
		<>
			<TableRow style={{ height: 53 }}>
				<TableCell colSpan={5}>
					<Skeleton variant="rect" height={20} />
				</TableCell>
			</TableRow>
			<TableRow style={{ height: 53 }}>
				<TableCell colSpan={5}>
					<Skeleton variant="rect" height={20} />
				</TableCell>
			</TableRow>
			<TableRow style={{ height: 53 }}>
				<TableCell colSpan={5}>
					<Skeleton variant="rect" height={20} />
				</TableCell>
			</TableRow>
			<TableRow style={{ height: 53 }}>
				<TableCell colSpan={5}>
					<Skeleton variant="rect" height={20} />
				</TableCell>
			</TableRow>
			<TableRow style={{ height: 53 }}>
				<TableCell colSpan={5}>
					<Skeleton variant="rect" height={20} />
				</TableCell>
			</TableRow>
		</>
	);
};
