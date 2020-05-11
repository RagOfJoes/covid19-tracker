import useAsync from './useAsync';
import fetch from 'isomorphic-unfetch';

export default (country, setTimeline) => {
	return useAsync(async () => {
		setTimeline((prev) => ({ ...prev, loading: true }));
		const res = await fetch(`/api/timeline/${country}`);
		const json = await res.json();
		if (Array.isArray(json) && json.length > 0) setTimeline({ loading: false, data: json });
		else setTimeline((prev) => ({ ...prev, loading: false }));
	}, [country]);
};
