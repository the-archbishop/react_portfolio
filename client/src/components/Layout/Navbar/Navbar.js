import React, { Fragment } from 'react';
import { useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
	let location = useLocation();

	return (
		<Fragment>
			{location.hash !== '#about' ? (
				<nav className='navbar navbar-expand-lg sticky-top navbar-dark'>
					<a className='navbar-brand' id='brand' href='/'></a>
					<button
						className='navbar-toggler'
						type='button'
						data-toggle='collapse'
						data-target='#navbarNavAltMarkup'
						aria-controls='navbarNavAltMarkup'
						aria-expanded='false'
						aria-label='Toggle navigation'
					>
						<span className='navbar-toggler-icon'></span>
					</button>
					<div
						className='collapse navbar-collapse justify-content-end'
						id='navbarNavAltMarkup'
					>
						<div className='navbar-nav'>
							<a className='nav-item nav-link' href='#home'>
								Home
							</a>
							<a className='nav-item nav-link' href='#about'>
								About
							</a>
							<a className='nav-item nav-link' href='#portfolio'>
								Portfolio
							</a>
							<a className='nav-item nav-link' href='#contact'>
								Contact
							</a>
						</div>
					</div>
				</nav>
			) : (
				<nav className='navbar navbar-expand-lg sticky-top navbar-light'>
					<a className='navbar-brand' id='brand' href='/'></a>
					<button
						className='navbar-toggler'
						type='button'
						data-toggle='collapse'
						data-target='#navbarNavAltMarkup'
						aria-controls='navbarNavAltMarkup'
						aria-expanded='false'
						aria-label='Toggle navigation'
					>
						<span className='navbar-toggler-icon'></span>
					</button>
					<div
						className='collapse navbar-collapse justify-content-end'
						id='navbarNavAltMarkup'
					>
						<div className='navbar-nav'>
							<a className='nav-item nav-link' href='#home'>
								Home
							</a>
							<a className='nav-item nav-link' href='#about'>
								About
							</a>
							<a className='nav-item nav-link' href='#portfolio'>
								Portfolio
							</a>
							<a className='nav-item nav-link' href='#contact'>
								Contact
							</a>
						</div>
					</div>
				</nav>
			)}
		</Fragment>
	);
};

export default Navbar;
