import React, { Fragment, useState } from 'react';
import ScrollableAnchor from 'react-scrollable-anchor';
import emailjs from 'emailjs-com';
import './Contact.css';

const Contact = () => {
	// Form data state
	const [formData, setFormData] = useState({
		from_name: '',
		reply_to: '',
		message_html: ''
	});

	let showAlert;
	const { from_name, reply_to, message_html } = formData;

	const onChange = e => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	function sendEmail(e) {
		e.preventDefault();

		emailjs
			.sendForm(
				'gmail',
				'template_63lpoO3Q',
				e.target,
				'user_tfjUDKd5eH32J47GoHOU5'
			)
			.then(
				result => {
					alert("Thank you for the message! I'll reply as soon as I can.");
					setFormData({ from_name: '', reply_to: '', message_html: '' });
					console.log(result.text);
				},
				error => {
					console.log(error.text);
				}
			);
	}

	return (
		<ScrollableAnchor id={'contact'}>
			<section className='section section-c'>
				<div className='container'>
					{showAlert ? (
						<div
							className='alert alert-warning alert-dismissible fade show'
							role='alert'
						>
							<strong>Success!</strong> Your message was sent. I will reply as
							soon as I can.
							<button
								type='button'
								className='close'
								data-dismiss='alert'
								aria-label='Close'
							>
								<span aria-hidden='true'>&times;</span>
							</button>
						</div>
					) : (
						<Fragment></Fragment>
					)}
					<h3>Contact</h3>
					<h2>Drop a Line</h2>
					<div className='row'>
						<div className='col-md-1'></div>
						<div className='col-md-4 text-left'>
							<p>
								<i className='fa fa-map-marker fa-lg'></i>&nbsp;&nbsp;Richmond, VA
							</p>
							<p>
								<i className='fa fa-mobile fa-lg'></i>&nbsp;&nbsp;804.405.2789
							</p>
							<p>
								<i className='fa fa-envelope-o '></i>&nbsp;&nbsp;
								<a href='mailto:bishop.bader@gmail.com'>
									bishop.bader@gmail.com
								</a>
							</p>
						</div>
						<div className='col-md-7'>
							<form id='message' className='contact-form' onSubmit={sendEmail}>
								<div className='form-group row'>
									<label htmlFor='name' className='col-md-3 col-form-label text-right'>
										Name
									</label>
									<div className='col-md-9'>
										<input
											type='text'
											className='form-control'
											name='from_name'
											placeholder='John Smith'
											value={from_name}
											onChange={e => onChange(e)}
										/>
									</div>
								</div>
								<div className='form-group row'>
									<label htmlFor='email' className='col-md-3 col-form-label text-right'>
										Email
									</label>
									<div className='col-md-9'>
										<input
											type='text'
											className='form-control'
											name='reply_to'
											placeholder='email@example.com'
											value={reply_to}
											onChange={e => onChange(e)}
										/>
									</div>
								</div>
								<div className='form-group row'>
									<label
										htmlFor='message'
										className='col-md-3 col-form-label text-right'
									>
										Message
									</label>
									<div className='col-md-9'>
										<textarea
											className='form-control'
											name='message_html'
											rows='5'
											placeholder="Hello! I'd like to hire you!"
											value={message_html}
											onChange={e => onChange(e)}
										></textarea>
									</div>
								</div>
								<button type='submit' className='btn btn-secondary float-right'>
									Send Message
								</button>
							</form>
						</div>
					</div>
				</div>
			</section>
		</ScrollableAnchor>
	);
};

export default Contact;
