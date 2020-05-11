import useAsync from './useAsync';
import fetch from 'isomorphic-unfetch';

export default (setCountries) => {
	return useAsync(async () => {
		const res = await fetch(`/api/countries`);
		const json = await res.json();
		setCountries(json);
	}, []);
};
