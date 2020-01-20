import React, { Fragment } from 'react';
import video from '../../../videos/background.mp4';
import me from '../../../images/meAndWinnie2.jpg';
import './Landing.css';
import Services from '../Services/Services';
import Portfolio from '../Portfolio/Portfolio';

const Landing = () => {
	return (
		<Fragment>
			<header class='v-header container'>
				<div className='fullscreen-video-wrap'>
					<video src={video} autoplay='true' loop='true'></video>
				</div>
				<div className='header-overlay'></div>
				<div className='header-content'>
					<div class="row">
						<div class="col-md-6">
							<img class="rounded-circle img-fluid" src={me} />
						</div>
						<div class="col-md-6 spacer">
							<p id="greeting">Hi, I'm</p>
							<p className='name'>Bishop Bader</p>
							<hr />
							<p class="lead">Full-Stack Developer</p>
							<p>
								<a href="https://www.linkedin.com/in/bishop-bader" target="_blank"><i class="fab fa-linkedin-in socialIcons"></i></a>
								<a href="https://github.com/bflatbader" target="_blank"><i class="fab fa-github-alt socialIcons"></i></a>
								<a href="assets/files/BBaderResume.pdf" target="_blank"><i class="fas fa-file-pdf socialIcons"></i></a>
							</p>
							<br/>
							<a class="button blue" href="#">Learn More</a>
						</div>
					</div>
				</div>
			</header>
			<Services />
			<Portfolio />
		</Fragment>
	);
};

export default Landing;
