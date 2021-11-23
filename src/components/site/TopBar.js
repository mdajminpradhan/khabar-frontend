import React from 'react';
import 'assets/sass/core/topbar.scss';
import { BsPhone } from 'react-icons/bs';
import { IoLocationOutline } from 'react-icons/io5';
import { FaFacebook, FaTwitter, FaYoutube, FaWordpress } from 'react-icons/fa';

const TopBar = () => {
	return (
		<div className="topbar">
			<div className="container">
				<div className="topbar__left">
					<div>
						<BsPhone />
						<pre>CALL US: +381 65 666 6666</pre>
					</div>
					<div>
						<IoLocationOutline />
						<pre> 71 Madison Ave</pre>
					</div>
				</div>
				<div className="topbar__right">
					<a href="https://google.com">
						<FaFacebook />
					</a>
					<a href="https://google.com">
						<FaTwitter />
					</a>
					<a href="https://google.com">
						<FaYoutube />
					</a>
					<a href="https://google.com">
						<FaWordpress />
					</a>
				</div>
			</div>
		</div>
	);
};

export default TopBar;
