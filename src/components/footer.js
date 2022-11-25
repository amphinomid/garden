import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

const Footer = ({ siteTitle }) => (
	<footer
		style={{
			marginTop: `2rem`,
			marginLeft: `10rem`,
		}}
	>
        <b>Last cultivated on 221125.</b>{` `}
		Built with
		{` `}
		<a href="https://www.gatsbyjs.com" target="_blank" rel="noreferrer">
			Gatsby
		</a>. Illustrations made with
		{` `}
		<a href="https://www.sketch.com" target="_blank" rel="noreferrer">
			Sketch
		</a>.
	</footer>
);

export default Footer;
