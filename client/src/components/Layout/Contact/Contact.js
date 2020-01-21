import React from 'react';
import ScrollableAnchor from 'react-scrollable-anchor';
import './Contact.css'

const Contact = () => {
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
                        <div class="col-md-7">
                            <form>
                                <div class="form-group row">
                                    <label for="name" class="col-md-3 col-form-label text-right">Name</label>
                                    <div class="col-md-9">
                                    <input type="text" class="form-control" id="name" placeholder="John Smith" />
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <label for="email" class="col-md-3 col-form-label text-right">Email</label>
                                    <div class="col-md-9">
                                    <input type="text" class="form-control" id="email" placeholder="email@example.com" />
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <label for="message" class="col-md-3 col-form-label text-right">Message</label>
                                    <div class="col-md-9">
                                    <textarea class="form-control" id="message" rows="5" placeholder="Hello! I'd like to hire you!"></textarea>
                                    </div>
                                </div>
                                <button type="submit" class="btn btn-secondary float-right">Send Message</button>
                            </form>
                        </div>
					</div>
				</div>
			</section>
		</ScrollableAnchor>
	);
};

export default Contact;
