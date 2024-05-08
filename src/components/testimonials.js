import "./style.scss";
import Emoji from './emoji';
import React, {useState, useEffect} from "react";
import {FaStar, FaStarHalf, FaAngleDoubleRight} from 'react-icons/fa';


const Testimonials = () => {
	const BUCKET_PATH = 'https://storage.googleapis.com/kubi-speech/imgs/people'
	// determined if page has scrolled and if the view is on mobile
	const [state,] = useState({
		instance: React.createRef(),
	});
	// let instance = React.createRef();
	// change state on scroll
	useEffect(() => {
		let ticking = false;
		const handleScroll = () => {
			let offsetTop = state.instance.current.getBoundingClientRect().top;
			if (!ticking && -1000 < offsetTop < 1000) {
				window.requestAnimationFrame(function () {
					ticking = false;
					document.querySelector('.special1').style.transform = 'translateX(' + (100 - (window.scrollY - 2500) / 10) + '%)';
					document.querySelector('.special2').style.transform = 'translateX(' + (-40 + (window.scrollY - 2500) / 20) + '%)';
					document.querySelector('.special3').style.transform = 'translateX(' + (40 - (window.scrollY - 2500) / 40) + '%)';
				});

				ticking = true;
			};
			// const isScrolled = window.scrollY > 500;
			// if (isScrolled !== state.scrolled) {
			// 	setState({
			// 		scrolled: !state.scrolled,
			// 	});
			// }
		}
		document.addEventListener("scroll", handleScroll, {passive: true});
		return () => {
			// clean up the event handler when the component unmounts
			document.removeEventListener("scroll", handleScroll);
		};
	}, [state.instance]);

	return (
		<div ref={state.instance} className="section has-background-white-bis is-hidden-mobile" id="testimonials" style={{position: 'relative'}}>
			<div className="tile is-ancestor" style={{position: 'relative'}}>
				<div className="tile is-vertical">
					<div className="tile special1">
						<div className="tile">
							<div className="tile is-parent">
								<div className="tile is-child">
									<article
										className="media box"
									>
										<div className="media-content">
											<div className="content">
												<p>
													<span className="tag is-large">5</span>
													<FaAngleDoubleRight className="mx-2 has-text-grey-lighter" />
													<span className="tag is-large is-success is-light has-text-weight-bold">
														7.5
													</span>
												</p>
												<p>
													I had been struggling with my IELTS band score for quite some time before I discovered Wuru Zeka. The AI + Human service provided by them has been a game-changer. The personalized study plan and regular feedback from the mentors helped me identify and correct my weak areas. Highly recommended!
												</p>
											</div>
											<nav className="level is-mobile">
												<div className="level-left">
													<figure className="image is-64x64">
														<img
															className="is-rounded"
															src={`${BUCKET_PATH}/jaspal.png`}
															alt="Student"
														/>
													</figure>
													<div className="pl-4">
														<p><strong>Jaspal from India <Emoji emoji='🇮🇳'/></strong></p>
														<p>
															<FaStar className="mr-2 has-text-warning" />
															<FaStar className="mr-2 has-text-warning" />
															<FaStar className="mr-2 has-text-warning" />
															<FaStar className="mr-2 has-text-warning" />
															<FaStar className="mr-2 has-text-warning" />
														</p>
													</div>
												</div>
											</nav>
										</div>
									</article>
								</div>
							</div>
						</div>
						<div className="tile">
							<div className="tile is-parent">
								<div className="tile is-child">
									<article
										className="media box"
									>
										<div className="media-content">
											<div className="content">
												<p>
													<span className="tag is-large">6.5</span>
													<FaAngleDoubleRight className="mx-2 has-text-grey-lighter" />
													<span className="tag is-large is-success has-text-weight-bold">
														8.5
													</span>
												</p>
												<p>
													Wuru Zeka has been a fantastic resource for me to improve my IELTS band score. The AI-driven study materials are tailored to my needs, and the human mentors provide valuable guidance and feedback. I've seen a great improvement in my speaking and writing skills. Thank you, Wuru Zeka!
												</p>
											</div>
											<nav className="level is-mobile">
												<div className="level-left">
													<figure className="image is-64x64">
														<img
															className="is-rounded"
															src={`${BUCKET_PATH}/mei.png`}
															alt="Student"
														/>
													</figure>
													<div className="pl-4">
														<p><strong>Mei from China <Emoji emoji='🇨🇳'/></strong></p>
														<p>
															<FaStar className="mr-2 has-text-warning" />
															<FaStar className="mr-2 has-text-warning" />
															<FaStar className="mr-2 has-text-warning" />
															<FaStar className="mr-2 has-text-warning" />
															<FaStar className="mr-2 has-text-warning" />
														</p>
													</div>
												</div>
											</nav>
										</div>
									</article>
								</div>
							</div>
						</div>
					</div>
					<div className="tile special2">
						<div className="tile">
							<div className="tile is-parent">
								<div className="tile is-child">
									<article
										className="media box"
									>
										<div className="media-content">
											<div className="content">
												<p>
													<span className="tag is-large">6</span>
													<FaAngleDoubleRight className="mx-2 has-text-grey-lighter" />
													<span className="tag is-large is-success is-light has-text-weight-bold">
														7.5
													</span>
												</p>
												<p>
													I cannot thank Wuru Zeka enough for helping me identify my weaknesses and work on them. I am now much more confident in my English skills and feel prepared for my future studies abroad.
												</p>
											</div>
											<nav className="level is-mobile">
												<div className="level-left">
													<figure className="image is-64x64">
														<img
															className="is-rounded"
															src={`${BUCKET_PATH}/dara.png`}
															alt="Student"
														/>
													</figure>
													<div className="pl-4">
														<p><strong>Dara from Cambodia <Emoji emoji='🇰🇭'/></strong></p>
														<p>
															<FaStar className="mr-2 has-text-warning" />
															<FaStar className="mr-2 has-text-warning" />
															<FaStar className="mr-2 has-text-warning" />
															<FaStar className="mr-2 has-text-warning" />
														</p>
													</div>
												</div>
											</nav>
										</div>
									</article>
								</div>
							</div>
						</div>
						<div className="tile">
							<div className="tile is-parent">
								<div className="tile is-child">
								<article
										className="media box"
									>
										<div className="media-content">
											<div className="content">
												<p>
													<span className="tag is-large">6</span>
													<FaAngleDoubleRight className="mx-2 has-text-grey-lighter" />
													<span className="tag is-large is-success has-text-weight-bold">
														8.5
													</span>
												</p>
												<p>
												Wuru Zeka is an amazing platform for improving one's IELTS performance. My score went from 6 to 8.5, would highly recommend it to anyone looking to achieve their target IELTS band score.
												</p>
											</div>
											<nav className="level is-mobile">
												<div className="level-left">
													<figure className="image is-64x64">
														<img
															className="is-rounded"
															src={`${BUCKET_PATH}/haruto.png`}
															alt="Student"
														/>
													</figure>
													<div className="pl-4">
														<p><strong>Haruto from Japan <Emoji emoji='🇯🇵'/></strong></p>
														<p>
															<FaStar className="mr-2 has-text-warning" />
															<FaStar className="mr-2 has-text-warning" />
															<FaStar className="mr-2 has-text-warning" />
															<FaStar className="mr-2 has-text-warning" />
															<FaStarHalf className="mr-2 has-text-warning" />
														</p>
													</div>
												</div>
											</nav>
										</div>
									</article>
								</div>
							</div>
						</div>
						<div className="tile">
							<div className="tile is-parent">
								<div className="tile is-child">
								<article
										className="media box"
									>
										<div className="media-content">
											<div className="content">
												<p>
													<span className="tag is-large">5</span>
													<FaAngleDoubleRight className="mx-2 has-text-grey-lighter" />
													<span className="tag is-large is-success is-light has-text-weight-bold">
														6.5
													</span>
												</p>
												<p>
												I am incredibly grateful for Wuru Zeka's assistance. The support from the human mentors have been invaluable in identifying my weak areas and providing targeted practice to overcome them. My score has improved tremendously.
												</p>
											</div>
											<nav className="level is-mobile">
												<div className="level-left">
													<figure className="image is-64x64">
														<img
															className="is-rounded"
															src={`${BUCKET_PATH}/nurul.png`}
															alt="Student"
														/>
													</figure>
													<div className="pl-4">
														<p><strong>Nurul from Malaysia <Emoji emoji='🇲🇾'/></strong></p>
														<p>
															<FaStar className="mr-2 has-text-warning" />
															<FaStar className="mr-2 has-text-warning" />
															<FaStar className="mr-2 has-text-warning" />
															<FaStarHalf className="mr-2 has-text-warning" />
														</p>
													</div>
												</div>
											</nav>
										</div>
									</article>
								</div>
							</div>
						</div>
					</div>
					<div className="tile special3">
						<div className="tile">
							<div className="tile is-parent">
								<div className="tile is-child">
								<article
										className="media box"
									>
										<div className="media-content">
											<div className="content">
												<p>
													<span className="tag is-large">5</span>
													<FaAngleDoubleRight className="mx-2 has-text-grey-lighter" />
													<span className="tag is-large is-success is-light has-text-weight-bold">
														6.5
													</span>
												</p>
												<p>
												Outstanding experience in improving my IELTS band score and would highly recommend Wuru Zeka to anyone looking to achieve their IELTS goals.
												</p>
											</div>
											<nav className="level is-mobile">
												<div className="level-left">
													<figure className="image is-64x64">
														<img
															className="is-rounded"
															src={`${BUCKET_PATH}/tae.png`}
															alt="Student"
														/>
													</figure>
													<div className="pl-4">
														<p><strong>Tae-hyun from South Korea <Emoji emoji='🇰🇷'/></strong></p>
														<p>
															<FaStar className="mr-2 has-text-warning" />
															<FaStar className="mr-2 has-text-warning" />
															<FaStar className="mr-2 has-text-warning" />
															<FaStar className="mr-2 has-text-warning" />
															<FaStarHalf className="mr-2 has-text-warning" />
														</p>
													</div>
												</div>
											</nav>
										</div>
									</article>
								</div>
							</div>
						</div>
						<div className="tile">
							<div className="tile is-parent">
								<div className="tile is-child">
								<article
										className="media box"
									>
										<div className="media-content">
											<div className="content">
												<p>
													<span className="tag is-large">7</span>
													<FaAngleDoubleRight className="mx-2 has-text-grey-lighter" />
													<span className="tag is-large is-success has-text-weight-bold">
														8
													</span>
												</p>
												<p>
												I am thrilled with my IELTS score improvement, thanks to Wuru Zeka!
													{/* The AI-generated study materials and the support of human mentors have been incredibly helpful in enhancing my skills. I would recommend Wuru Zeka to anyone looking to improve their IELTS band score. */}
												</p>
											</div>
											<nav className="level is-mobile">
												<div className="level-left">
													<figure className="image is-64x64">
														<img
															className="is-rounded"
															src={`${BUCKET_PATH}/sandeep.png`}
															alt="Student"
														/>
													</figure>
													<div className="pl-4">
														<p><strong>Sandeep from Nepal <Emoji emoji='🇳🇵'/></strong></p>
														<p>
															<FaStar className="mr-2 has-text-warning" />
															<FaStar className="mr-2 has-text-warning" />
															<FaStar className="mr-2 has-text-warning" />
															<FaStar className="mr-2 has-text-warning" />
															<FaStarHalf className="mr-2 has-text-warning" />
														</p>
													</div>
												</div>
											</nav>
										</div>
									</article>
								</div>
							</div>
						</div>
						<div className="tile">
							<div className="tile is-parent">
								<div className="tile is-child">

								<article
										className="media box"
									>
										<div className="media-content">
											<div className="content">
												<p>
													<span className="tag is-large">5.5</span>
													<FaAngleDoubleRight className="mx-2 has-text-grey-lighter" />
													<span className="tag is-large is-success is-light has-text-weight-bold">
														7
													</span>
												</p>
												<p>
													Saved me from giving IELTS the third time!
												</p>
											</div>
											<nav className="level is-mobile">
												<div className="level-left">
													<figure className="image is-64x64">
														<img
															className="is-rounded"
															src={`${BUCKET_PATH}/marlon.png`}
															alt="Student"
														/>
													</figure>
													<div className="pl-4">
														<p><strong>Marlon from Philippines <Emoji emoji='🇵🇭'/></strong></p>
														<p>
															<FaStar className="mr-2 has-text-warning" />
															<FaStar className="mr-2 has-text-warning" />
															<FaStar className="mr-2 has-text-warning" />
															<FaStarHalf className="mr-2 has-text-warning" />
														</p>
													</div>
												</div>
											</nav>
										</div>
									</article>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="show-more_wrapper-overlay has-text-centered is-flex is-justify-content-center is-align-items-flex-end">
				<p className="title is-2 pb-6">Thousands of happy students improved their band scores to 7+</p>
			</div>
		</div >
	);
};

export default Testimonials