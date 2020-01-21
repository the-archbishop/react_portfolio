import React, { Fragment } from 'react';
import video from '../../../videos/background3.mp4';
import me from '../../../images/me.jpg';
import './Landing.css';
import Services from '../Services/Services';
import Portfolio from '../Portfolio/Portfolio';
import Contact from '../Contact/Contact';

const Landing = () => {
	return (
		<Fragment>
			<header id='main' class='v-header container'>
				<div className='fullscreen-video-wrap'>
					<video src={video} autoplay='true' loop='true'></video>
				</div>
				<div className='header-overlay'></div>
				<div className='header-content'>
					<div class='row'>
						<div class='col-md-6'>
							<img class='rounded-circle img-fluid' src={me} />
							<span class='image-background'></span>
						</div>
						<div class='col-md-6 spacer'>
							<p id='greeting'>Hi, I'm</p>
							<p className='name'>
								Bishop <span className='yellow'>Bader</span>
							</p>
							<hr />
							<p class='lead'>Full-Stack Developer</p>
							<p>
								<a
									href='https://www.linkedin.com/in/bishop-bader'
									target='_blank'
								>
									<i class='fab fa-linkedin-in socialIcons'></i>
								</a>
								<a href='https://github.com/bflatbader' target='_blank'>
									<i class='fab fa-github-alt socialIcons'></i>
								</a>
								<a href='files/BBaderResume.pdf' target='_blank'>
									<i class='fas fa-file-pdf socialIcons'></i>
								</a>
							</p>
							<br />
							<a href='#about'>
								<div class='arrow bounce' href></div>
							</a>
						</div>
					</div>
				</div>
			</header>
			<Services />
			<Portfolio />
			<Contact />
		</Fragment>
	);
};

export default Landing;
