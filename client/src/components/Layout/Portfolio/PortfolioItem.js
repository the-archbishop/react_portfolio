import React, { Fragment } from 'react';
import './Portfolio.css';

const PortfolioItem = ({ projects }) => {
	return (
		<Fragment>
				{projects.map(project => (
					<div className='project' key={project.id}>
						<img className='img-thumbnail' src={project.image} alt={project.name} />
						<p className='port-text'>{project.name}</p>
						<a
							href={project.link}
							className='btn btn-blue'
							role='button'
							target='_blank'
							rel="noopener noreferrer"
						>
							<i className='fas fa-link'></i>
						</a>
						&nbsp;
						<a
							href={project.readme}
							className='btn btn-grn'
							role='button'
							target='_blank'
							rel="noopener noreferrer"
						>
							<i className='fas fa-code'></i>
						</a>
					</div>
				))}
		</Fragment>
	);
};

export default PortfolioItem;
