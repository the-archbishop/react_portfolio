import React from 'react';
import ScrollableAnchor from 'react-scrollable-anchor';
import PortfolioItem from './PortfolioItem';
const projects = require('../../../files/projects.json');

const Portfolio = () => {
	return (
		<ScrollableAnchor id={'portfolio'}>
			<section class='section section-b'>
				<div className='container'>
					<h3>Portfolio</h3>
					<h2>Recent Work</h2>
					<div className='row'>
						<PortfolioItem projects={projects} />
					</div>
				</div>
			</section>
		</ScrollableAnchor>
	);
};

export default Portfolio;
