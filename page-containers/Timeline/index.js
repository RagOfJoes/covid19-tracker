import Provider from './Provider';
import Container from './Container';

export default (props) => {
	const { country } = props;
	return (
		<Provider country={country}>
			<Container {...props} />
		</Provider>
	);
};
