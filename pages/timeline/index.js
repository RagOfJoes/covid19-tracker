import fetch from 'isomorphic-unfetch';
import Timeline from '../../page-containers/Timeline';
const Index = (props) => {
	return <Timeline {...props} />;
};

export const getServerSideProps = async ({ query }) => {
	const res = await fetch(`${process.env.API_ENDPOINT}/countries`);
	const json = await res.json();
	return { props: { ...query, countries: json } };
};

export default Index;
