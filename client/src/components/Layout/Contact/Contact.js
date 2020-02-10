import React, { useState } from 'react';
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
					console.log(result.text);
				},
				error => {
					console.log(error.text);
				}
			);
	}

	return (
		<ScrollableAnchor id={'contact'}>
			<section class='section section-c'>
				<div className='container'>
					<h3>Contact</h3>
					<h2>Drop a Line</h2>
					<div class='row'>
						<div class='col-md-1'></div>
						<div class='col-md-4 text-left'>
							<p>
								<i class='fa fa-map-marker fa-lg'></i>&nbsp;&nbsp;Richmond, VA
							</p>
							<p>
								<i class='fa fa-mobile fa-lg'></i>&nbsp;&nbsp;804.405.2789
							</p>
							<p>
								<i class='fa fa-envelope-o '></i>&nbsp;&nbsp;
								<a href='mailto:bishop.bader@gmail.com'>
									bishop.bader@gmail.com
								</a>
							</p>
						</div>
						<div class='col-md-7'>
							<form id='message' className='contact-form' onSubmit={sendEmail}>
								<div class='form-group row'>
									<label for='name' class='col-md-3 col-form-label text-right'>
										Name
									</label>
									<div class='col-md-9'>
										<input
											type='text'
											class='form-control'
											name='from_name'
											placeholder='John Smith'
											value={from_name}
											onChange={e => onChange(e)}
										/>
									</div>
								</div>
								<div class='form-group row'>
									<label for='email' class='col-md-3 col-form-label text-right'>
										Email
									</label>
									<div class='col-md-9'>
										<input
											type='text'
											class='form-control'
											name='reply_to'
											placeholder='email@example.com'
											value={reply_to}
											onChange={e => onChange(e)}
										/>
									</div>
								</div>
								<div class='form-group row'>
									<label
										for='message'
										class='col-md-3 col-form-label text-right'
									>
										Message
									</label>
									<div class='col-md-9'>
										<textarea
											class='form-control'
											name='message_html'
											rows='5'
											placeholder="Hello! I'd like to hire you!"
											value={message_html}
											onChange={e => onChange(e)}
										></textarea>
									</div>
								</div>
								<button type='submit' class='btn btn-secondary float-right'>
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
