import React from 'react';
import '../../assets/sass/admin/components/form.scss';
import Image from '../../assets/images/blog/recentpost/1.jpg';
import { IoIosClose } from 'react-icons/io';

function Form() {
	return (
		<div className="form">
			<form action="">
				<div className="form__left">
					<label htmlFor="title">Post title</label>
					<input type="text" id="title" required />
					<label htmlFor="description">Post description</label>
					<textarea name="" id="description" cols="30" rows="10" required />
				</div>
				<div className="form__right">
					<div className="publish">
						<div>
							<span className="publishContext">Publish your post right away</span>
						</div>
						<div className="devider" />

						<div className="publishh">
							<span className="primary">Publish</span>
						</div>
					</div>
					<div className="categories">
						<h5>Categories</h5>
						<div className="category">
							<input type="checkbox" name="" id="catone" />
							<label htmlFor="catone">Technology</label>
						</div>
						<div className="category">
							<input type="checkbox" name="" id="cattwo" />
							<label htmlFor="cattwo">Travel</label>
						</div>
						<div className="category">
							<input type="checkbox" name="" id="catthree" />
							<label htmlFor="catthree">Food</label>
						</div>
						<div className="category">
							<input type="checkbox" name="" id="catfour" />
							<label htmlFor="catfour">Burger</label>
						</div>
						<div className="category">
							<input type="checkbox" name="" id="catfive" />
							<label htmlFor="catfive">Pizza</label>
						</div>
						<div className="category">
							<input type="checkbox" name="" id="catsix" />
							<label htmlFor="catsix">Cheez</label>
						</div>
					</div>
					<div className="tagss">
						<h5>Tags</h5>

						<ul>
							<li>
								<div>
									<span>tag</span>
									<IoIosClose />
								</div>
							</li>
							<li>
								<div>
									<span>tag</span>
									<IoIosClose />
								</div>
							</li>
							<li>
								<div>
									<span>tag</span>
									<IoIosClose />
								</div>
							</li>
							<li>
								<div>
									<span>tag</span>
									<IoIosClose />
								</div>
							</li>
							<li>
								<div>
									<span>tag</span>
									<IoIosClose />
								</div>
							</li>
						</ul>
						<div className="taginput">
							<input type="text" placeholder="Enter your tags" />
						</div>
					</div>
					<div className="thumbnail">
						<h5>Thumbnail</h5>

						<input type="file" name="" id="" />
						<img src={Image} alt="" />
					</div>
				</div>
			</form>
		</div>
	);
}

export default Form;
