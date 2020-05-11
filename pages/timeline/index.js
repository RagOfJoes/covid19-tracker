import redirect from '../../lib/redirect';

const Index = (props) => {
	return <h1>Redirecting...</h1>;
};

export const getServerSideProps = async ({ query, ...ctx }) => {
	redirect(ctx, '/timeline/US');
	return { props: {} };
};

export default Index;
