import moment from 'moment';
import Toolbar from './Toolbar';
import React, { memo } from 'react';
import TableHead from './TableHead';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import Loading from './PaginatedTable.loading';
import formatNumber from '../../lib/formatNumber';
import TableRow from '@material-ui/core/TableRow';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import useTheme from '@material-ui/core/styles/useTheme';
import makeStyles from '@material-ui/core/styles/makeStyles';
import TableContainer from '@material-ui/core/TableContainer';
import TablePagination from '@material-ui/core/TablePagination';
import useNeumorphShadow from '../../lib/hooks/useNeumorphShadow';

function descendingComparator(a, b, orderBy) {
	if (b[orderBy] < a[orderBy]) {
		return -1;
	}
	if (b[orderBy] > a[orderBy]) {
		return 1;
	}
	return 0;
}

function getComparator(order, orderBy) {
	return order === 'desc' ? (a, b) => descendingComparator(a, b, orderBy) : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
	const stabilizedThis = array.map((el, index) => [el, index]);
	stabilizedThis.sort((a, b) => {
		const order = comparator(a[0], b[0]);
		if (order !== 0) return order;
		return a[1] - b[1];
	});
	return stabilizedThis.map((el) => el[0]);
}

const useStyles = makeStyles((theme) => ({
	root: {
		width: '100%',
	},
	paper: {
		width: '100%',
		marginBottom: theme.spacing(2),
	},
	table: {},
	visuallyHidden: {
		border: 0,
		clip: 'rect(0 0 0 0)',
		height: 1,
		margin: -1,
		overflow: 'hidden',
		padding: 0,
		position: 'absolute',
		top: 20,
		width: 1,
	},
}));

export default memo(({ data, title, loading, defaultOrder, headCells, ToolbarChildren }) => {
	const theme = useTheme();
	const classes = useStyles();
	const [page, setPage] = React.useState(0);
	const [order, setOrder] = React.useState('desc');
	const [rowsPerPage, setRowsPerPage] = React.useState(5);
	const [orderBy, setOrderBy] = React.useState(defaultOrder || 'cases');
	const shadow = useNeumorphShadow({ darken: 0.23, bgColor: theme.palette.background.default });

	const handleRequestSort = (event, property) => {
		const isAsc = orderBy === property && order === 'asc';
		setOrder(isAsc ? 'desc' : 'asc');
		setOrderBy(property);
	};

	const handleChangePage = (event, newPage) => {
		setPage(newPage);
	};

	const handleChangeRowsPerPage = (event) => {
		setRowsPerPage(parseInt(event.target.value, 10));
		setPage(0);
	};

	const emptyRows = rowsPerPage - Math.min(rowsPerPage, data.length - page * rowsPerPage);

	return (
		<Paper className={`${classes.paper} ${shadow.root}`}>
			<Toolbar title={title}>{ToolbarChildren && ToolbarChildren}</Toolbar>
			<TableContainer>
				<Table className={classes.table} aria-labelledby="tableTitle">
					<TableHead order={order} orderBy={orderBy} headCells={headCells} onRequestSort={handleRequestSort} />
					<TableBody>
						{loading && <Loading />}
						{!loading &&
							data &&
							data.length > 0 &&
							stableSort(data, getComparator(order, orderBy))
								.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
								.map((row, index) => {
									return (
										<TableRow hover tabIndex={-1} role="checkbox" key={index}>
											<TableCell component="th" scope="row">
												{row.country}
											</TableCell>
											<TableCell align="right">{moment(row.last_update).format('M/D/YYYY')}</TableCell>
											<TableCell align="right">{formatNumber(row.cases, 0)}</TableCell>
											<TableCell align="right">{formatNumber(row.deaths, 0)}</TableCell>
											<TableCell align="right">{formatNumber(row.recovered, 0)}</TableCell>
										</TableRow>
									);
								})}
						{!loading && emptyRows > 0 && (
							<TableRow style={{ height: 53 * emptyRows }}>
								<TableCell colSpan={5} />
							</TableRow>
						)}
					</TableBody>
				</Table>
			</TableContainer>
			<TablePagination
				page={page}
				component="div"
				count={data.length}
				rowsPerPage={rowsPerPage}
				onChangePage={handleChangePage}
				rowsPerPageOptions={[5, 10, 25]}
				onChangeRowsPerPage={handleChangeRowsPerPage}
			/>
		</Paper>
	);
});
