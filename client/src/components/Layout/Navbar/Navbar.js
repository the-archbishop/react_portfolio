import React, { Fragment } from 'react';
import { useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
	let location = useLocation();

	console.log(location);

	return (
		<Fragment>
			{location.hash !== '#about' ? (
				<nav class='navbar navbar-expand-lg sticky-top navbar-dark'>
					<a class='navbar-brand' id='brand' href='/'></a>
					<button
						class='navbar-toggler'
						type='button'
						data-toggle='collapse'
						data-target='#navbarNavAltMarkup'
						aria-controls='navbarNavAltMarkup'
						aria-expanded='false'
						aria-label='Toggle navigation'
					>
						<span class='navbar-toggler-icon'></span>
					</button>
					<div
						class='collapse navbar-collapse justify-content-end'
						id='navbarNavAltMarkup'
					>
						<div class='navbar-nav'>
							<a class='nav-item nav-link' href='#home'>
								Home
							</a>
							<a class='nav-item nav-link' href='#about'>
								About
							</a>
							<a class='nav-item nav-link' href='#portfolio'>
								Portfolio
							</a>
							<a class='nav-item nav-link' href='#contact'>
								Contact
							</a>
						</div>
					</div>
				</nav>
			) : (
				<nav class='navbar navbar-expand-lg sticky-top navbar-light'>
					<a class='navbar-brand' id='brand' href='/'></a>
					<button
						class='navbar-toggler'
						type='button'
						data-toggle='collapse'
						data-target='#navbarNavAltMarkup'
						aria-controls='navbarNavAltMarkup'
						aria-expanded='false'
						aria-label='Toggle navigation'
					>
						<span class='navbar-toggler-icon'></span>
					</button>
					<div
						class='collapse navbar-collapse justify-content-end'
						id='navbarNavAltMarkup'
					>
						<div class='navbar-nav'>
							<a class='nav-item nav-link' href='#home'>
								Home
							</a>
							<a class='nav-item nav-link' href='#about'>
								About
							</a>
							<a class='nav-item nav-link' href='#portfolio'>
								Portfolio
							</a>
							<a class='nav-item nav-link' href='#contact'>
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
