import { createContext, useMemo, useState, useContext } from 'react';
import useTimelineByCountry from '../../lib/hooks/useTimelineByCountry';

const TimelineContext = createContext({
	countries: [],
	setCountries: () => {},

	timelineCountry: '',
	setTimlineCountry: () => {},

	timeline: { loading: false, data: [] },
	setTimeline: () => {},
});

const TimelineProvider = ({ country, children }) => {
	const [countries, setCountries] = useState([]);
	const [timelineCountry, setTimlineCountry] = useState({ alpha2: country || 'US', name: '' });

	const [timeline, setTimeline] = useState({
		loading: false,
		data: [{ cases: 0, deaths: 0, recovered: 0, last_update: new Date() }],
	});

	useTimelineByCountry(timelineCountry.alpha2, setTimeline);

	const value = useMemo(
		() => ({
			countries,
			setCountries,

			timeline,
			setTimeline,

			timelineCountry,
			setTimlineCountry,
		}),
		[countries, timeline]
	);

	return <TimelineContext.Provider value={value}>{children}</TimelineContext.Provider>;
};

export const useTimelineContext = () => useContext(TimelineContext);

export default TimelineProvider;
