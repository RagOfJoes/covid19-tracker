import useAsync from './useAsync';
import fetch from 'isomorphic-unfetch';

export default (count, offset, setNews) => {
	return useAsync(async () => {
		setNews((prev) => ({ ...prev, loading: true }));
		const res = await fetch(`/api/news?count=${count}&offset=${offset}`);
		const json = await res.json();

		if (json.error) {
			setNews((prev) => ({ ...prev, loading: false, error: true }));
			return;
		}

		if (offset === 0) setNews({ loading: false, data: json.value || [] });
		else setNews((prev) => ({ loading: false, data: prev.data.concat(json.value) }));
	}, [offset]);
};
