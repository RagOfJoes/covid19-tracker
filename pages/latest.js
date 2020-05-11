import fetch from 'isomorphic-unfetch';
import Latest from '../page-containers/Latest';
const Index = (props) => {
	return <Latest {...props} />;
};

// export const getServerSideProps = async ({ query }) => {
// 	const res = await fetch(`${process.env.API_ENDPOINT}/countries`);
// 	const json = await res.json();
// 	return { props: { ...query, countries: json } };
// };

export default Index;
