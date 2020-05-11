import Latest from './Latest';
import LatestProvider from './Provider';

export default (props) => {
	return (
		<LatestProvider>
			<Latest {...props} />
		</LatestProvider>
	);
};
