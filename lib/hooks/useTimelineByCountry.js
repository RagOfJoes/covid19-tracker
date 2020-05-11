import useAsync from './useAsync';
import fetch from 'isomorphic-unfetch';

export default (country, setTimeline) => {
	return useAsync(async () => {
		setTimeline((prev) => ({ ...prev, loading: true }));
		const res = await fetch(`/api/timeline/${country}`);
		const json = await res.json();
		setTimeline({ loading: false, data: json });
	}, [country]);
};
