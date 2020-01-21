import React, { Fargment, Fragment } from 'react';
import './Portfolio.css';

const PortfolioItem = ({ projects }) => {
	return (
		<Fragment>
				{projects.map(project => (
					<div className='project' key={project.id}>
						<img class='img-thumbnail' src={project.image} />
						<p class='port-text'>{project.name}</p>
						<a
							href={project.link}
							class='btn btn-blue'
							role='button'
							target='_blank'
						>
							<i class='fas fa-link'></i>
						</a>
						&nbsp;
						<a
							href={project.readme}
							class='btn btn-dark'
							role='button'
							target='_blank'
						>
							<i class='fas fa-code'></i>
						</a>
					</div>
				))}
		</Fragment>
	);
};

export default PortfolioItem;
