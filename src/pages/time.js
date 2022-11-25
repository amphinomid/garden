import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';

const TimePage = () => {
	return (
		<Layout>
			<SEO title="time" />
            <div style={{ height: '200px' }} />
			<h1 style={{ textAlign: 'center' }}>the year is {new Date().getFullYear()}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h1>
		</Layout>
	);
};

export default TimePage;
