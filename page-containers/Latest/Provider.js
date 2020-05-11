import useLatestStatus from '../../lib/hooks/useLatestStatus';
import { createContext, useMemo, useState, useContext } from 'react';
import useBingNews from '../../lib/hooks/useBingNews';

const LatestContext = createContext({
	latestStatus: { loading: false, data: [] },
	setLatestStatus: () => {},

	count: 10,
	setCount: () => {},

	offset: 0,
	setOffset: () => {},

	setNews: () => {},
	news: { loading: false, error: false, data: [] },
});

const LatestProvider = ({ children }) => {
	const [count, setCount] = useState(6);
	const [offset, setOffset] = useState(0);

	const [latestStatus, setLatestStatus] = useState({
		loading: false,
		data: [],
	});

	const [news, setNews] = useState({
		loading: false,
		error: false,
		data: [],
	});

	useLatestStatus(setLatestStatus);
	useBingNews(count, offset > 0 ? offset * count : 0, setNews);

	const value = useMemo(
		() => ({
			news,
			setNews,

			offset,
			setOffset,

			latestStatus,
			setLatestStatus,
		}),
		[news, latestStatus]
	);

	return <LatestContext.Provider value={value}>{children}</LatestContext.Provider>;
};

export const useLatestContext = () => useContext(LatestContext);

export default LatestProvider;
