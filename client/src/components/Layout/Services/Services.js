import React from 'react';
import './Services.css';

const Services = () => {
	return (
		<section class='section section-a'>
			<div className='container'>
				<h3>About</h3>
				<h2 className='dark-h2'>What I Do</h2>
				<div className='row'>
					<div className='col-md-3 do-div'>
						<span>
							<i class='fas fa-palette do-icons'></i>
						</span>
						<h4>Design</h4>
						<ul className='list-group'>
							<li className='list-group-item'>Photoshop</li>
							<li className='list-group-item'>Photography</li>
							<li className='list-group-item'>Illustrator</li>
						</ul>
					</div>
					<div className='col-md-3 do-div'>
						<span>
							<i class='fas fa-file-code do-icons'></i>
						</span>
						<h4>Front-End</h4>
						<ul className='list-group'>
							<li className='list-group-item'>HTML5</li>
							<li className='list-group-item'>JavaScript</li>
							<li className='list-group-item'>CSS3</li>
							<li className='list-group-item'>React | Redux</li>
						</ul>
					</div>
					<div className='col-md-3 do-div'>
						<span>
							<i class='fas fa-project-diagram do-icons'></i>
						</span>
						<h4>Server</h4>
						<ul className='list-group'>
							<li className='list-group-item'>NodeJS</li>
							<li className='list-group-item'>Express</li>
							<li className='list-group-item'>Python</li>
						</ul>
					</div>
					<div className='col-md-3 do-div'>
						<span>
							<i class='fas fa-database do-icons'></i>
						</span>
						<h4>Database</h4>
						<ul className='list-group'>
							<li className='list-group-item'>mySQL</li>
							<li className='list-group-item'>MongoDB</li>
						</ul>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Services;
