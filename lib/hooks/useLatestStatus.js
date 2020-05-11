import useAsync from './useAsync';
import fetch from 'isomorphic-unfetch';

export default (setLatestStatus) => {
	return useAsync(async () => {
		setLatestStatus((prev) => ({ ...prev, loading: true }));
		const res = await fetch(`/api/status`);
		const json = await res.json();
		setLatestStatus({ data: json, loading: false });
	}, []);
};
