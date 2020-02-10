import React, { Fragment } from 'react';
import ScrollableAnchor from 'react-scrollable-anchor';
import Particles from 'react-particles-js';
import me from '../../../images/me2.JPG';
import './Landing.css';
import Services from '../Services/Services';
import Portfolio from '../Portfolio/Portfolio';
import Contact from '../Contact/Contact';

const Landing = () => {
	return (
		<Fragment>
			<ScrollableAnchor id={'home'}>
				<header id='main' className='v-header container'>
					<Particles
						className='fullscreen-video-wrap'
						params={{
							particles: {
								number: {
									value: 355,
									density: {
										enable: true,
										value_area: 789.1476416322727
									}
								},
								color: {
									value: '#fff'
								},
								shape: {
									type: 'circle',
									stroke: {
										width: 0,
										color: '#000000'
									},
									polygon: {
										nb_sides: 5
									}
								},
								opacity: {
									value: 0.48927153781200905,
									random: true,
									anim: {
										enable: true,
										speed: 1,
										opacity_min: 0,
										sync: false
									}
								},
								size: {
									value: 2,
									random: true,
									anim: {
										enable: true,
										speed: 2,
										size_min: 0,
										sync: false
									}
								},
								line_linked: {
									enable: false
								},
								move: {
									enable: true,
									speed: 0.2,
									direction: 'none',
									random: true,
									straight: false,
									out_mode: 'out',
									bounce: false,
									attract: {
										enable: false,
										rotateX: 600,
										rotateY: 1200
									}
								}
							},
							interactivity: {
								detect_on: 'canvas',
								events: {
									onhover: {
										enable: true,
										mode: 'bubble'
									},
									onclick: {
										enable: true,
										mode: 'push'
									},
									resize: true
								},
								modes: {
									grab: {
										distance: 400,
										line_linked: {
											opacity: 1
										}
									},
									bubble: {
										distance: 83.91608391608392,
										size: 1,
										duration: 3,
										opacity: 1,
										speed: 3
									},
									repulse: {
										distance: 200,
										duration: 0.4
									},
									push: {
										particles_nb: 4
									},
									remove: {
										particles_nb: 2
									}
								}
							},
							retina_detect: true
						}}
					/>
					{/* <div className='header-overlay'></div> */}
					<div className='header-content'>
						<div className='row'>
							<div className='col-md-6'>
								<img
									className='rounded-circle img-fluid'
									src={me}
									alt='Bishop Bader'
								/>
								<span className='image-background'></span>
							</div>
							<div className='col-md-6 spacer'>
								<p id='greeting'>Hi, I'm</p>
								<p className='name'>
									Bishop <span className='yellow'>Bader</span>
								</p>
								<hr />
								<p className='lead'>Full-Stack Developer</p>
								<p>
									<a
										href='https://www.linkedin.com/in/bishop-bader'
										target='_blank'
										rel='noopener noreferrer'
									>
										<i className='fab fa-linkedin-in socialIcons'></i>
									</a>
									<a
										href='https://github.com/the-archbishop'
										target='_blank'
										rel='noopener noreferrer'
									>
										<i className='fab fa-github-alt socialIcons'></i>
									</a>
									<a
										href='files/BBaderResume.pdf'
										target='_blank'
										rel='noopener noreferrer'
									>
										<i className='fas fa-file-pdf socialIcons'></i>
									</a>
								</p>
								<br />
								<a href='#about'>
									<div className='arrow bounce' href></div>
								</a>
							</div>
						</div>
					</div>
				</header>
			</ScrollableAnchor>
			<Services />
			<Portfolio />
			<Contact />
		</Fragment>
	);
};

export default Landing;
