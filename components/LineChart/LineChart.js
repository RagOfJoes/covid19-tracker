import moment from 'moment';
import { colors, useTheme } from '@material-ui/core';
import { XAxis, Area, AreaChart, CartesianGrid, ResponsiveContainer, YAxis, Legend, Tooltip } from 'recharts';

export default ({ data, height, tooltipProps }) => {
	const theme = useTheme();
	return (
		<ResponsiveContainer debounce={0} width="99%" height={height}>
			<AreaChart data={data} margin={0}>
				<XAxis
					reversed
					dataKey="last_update"
					interval="preserveStartEnd"
					tickFormatter={(v) => moment(v).format('M/D/YYYY')}
				/>
				<YAxis />
				<CartesianGrid stroke={theme.palette.background.paper} strokeDasharray="0 0" c />
				<Tooltip
					{...tooltipProps}
					contentStyle={{
						color: theme.palette.text.primary,
						backgroundColor: theme.palette.background.paper,
					}}
				/>
				<Legend formatter={(v) => v.charAt(0).toUpperCase() + v.slice(1)} />
				<Area type="monotone" dataKey="cases" fill={colors.orange[200]} stroke={colors.orange[300]} />
				<Area type="monotone" dataKey="recovered" fill={colors.green[400]} stroke={colors.green[500]} />
				<Area type="monotone" dataKey="deaths" fill={colors.red[600]} stroke={colors.red[700]} />
			</AreaChart>
		</ResponsiveContainer>
	);
};
