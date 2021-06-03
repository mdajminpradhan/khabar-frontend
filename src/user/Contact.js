import React from 'react';
import '../assets/sass/user/contact.scss';
import Base from '../core/user/Base';
import Breadcum from '../core/user/Breadcum';
import { BsPhone } from 'react-icons/bs';
import { FiMail, FiMapPin } from 'react-icons/fi';

const Contact = () => {
	return (
		<Base>
			<Breadcum title="Contact Us" description="Contact us" />
			<div className="contact">
				<div className="container">
					<h1>Call us or visit place</h1>
					<small>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</small>

					<div className="contact__header">
						<div className="contact-box">
							<div>
								<BsPhone />
								<span>Phone: </span>
                                <br />
                                <br />
								<pre>+ 44 123 456 78 90 </pre>
								<pre> + 844 123 444 77 88 </pre>
							</div>
						</div>
						<div className="contact-box">
							<div>
								<FiMapPin />
								<span>Address: </span>
                                <br />
                                <br />
								<p>Box 565, Pinney's Beach, Charlestown,</p>
								<p>Nevis, West Indies, Caribbean</p>
							</div>
						</div>
						<div className="contact-box">
							<div>
								<FiMail />
								<span>Email: </span>
                                <br />
                                <br />
								<p>contact@example.com</p>
								<p> info@example.com</p>
							</div>
						</div>
					</div>
					<div className="contact__body">
						<div className="contact__bodyLeft">
							<iframe
								src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3194.355137281425!2d117.99757731504646!3d36.81000897994643!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x35ea8b6bf2586883%3A0x6c039a0107b3f179!2sShandong%20University%20of%20Technology!5e0!3m2!1sen!2sbd!4v1622655401731!5m2!1sen!2sbd"
								width="100%"
								height="100%"
								style={{ border: 0 }}
								allowfullscreen=""
								loading="lazy"
							/>
						</div>
						<div className="contact__bodyRight">
							<h1>Send us a message</h1>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
							<form action="">
								<div className="input">
									<input type="text" placeholder="Your name" required />
									<input type="email" placeholder="Email address" required />
								</div>
								<input type="text" placeholder="Subject" required />
								<textarea name="" id="" cols="30" rows="7" />
								<button>Submit</button>
							</form>
						</div>
					</div>
				</div>
			</div>
		</Base>
	);
};

export default Contact;
