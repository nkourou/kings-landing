import React from "react";
import {graphql} from "gatsby";
import PageLayout from "../components/pagelayout";
import {Collapse} from "../components/faq";
import {FaTwitter, FaFacebook, FaLinkedin, FaStar, FaStarHalf} from "react-icons/fa";
import {documentToPlainTextString} from '@contentful/rich-text-plain-text-renderer'
import {renderRichText} from "gatsby-source-contentful/rich-text"
import * as PropTypes from "prop-types"
import {GatsbyImage} from "gatsby-plugin-image";

const propTypes = {
	data: PropTypes.object.isRequired,
}

export const pageQuery = graphql`
  query PostPageQuery($id: String) {
    contentfulPageBook(id: {eq: $id}) {
      id
      title
      subtitle
      slug
      publishedDate(formatString: "MMMM Do, YYYY")
      featuredImage {
        publicUrl
        gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED)
      }
      contentHead {
        raw
      }
      contentBody {
        raw
      }
			buyingStripeLink
			userThatRatedCount
			rating
    }
  }
	`;

// relatedBlogPosts {
// 	id
// 	title
// 	slug
// 	content {
// 		raw
// 	}
// 	featuredImage {
// 		publicUrl
// 		gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED)
// 	}
// }

class BookPage extends React.Component {
	render() {
		const BUCKET_PATH = 'https://storage.googleapis.com/kubi-speech/imgs/people/book_review_people'
		const post = this.props.data.contentfulPageBook;
		const plainTextBody = documentToPlainTextString(JSON.parse(post.contentBody.raw))
		const AVG_READING_SPEED = 150;
		let readTime = plainTextBody.split(" ").length / AVG_READING_SPEED;
		readTime =
			readTime < 1
				? `${ Math.floor(readTime * 60) } seconds`
				: `${ Math.floor(readTime) } min`;

		return (
			<PageLayout
				pageTitle={post.title}
				pageLink="book"
				excerpt={post.subtitle}
				image={post.featuredImage.publicUrl}
				slug={post.slug}
				date={post.date}
				authorName="Wuru Zeka Learning"
			>
				<section className="section">
					<div className="columns">
						<div className="column is-5">
							<div className="image">
								{/* <h1 className="title">{post.title}</h1>
								{post.subtitle && <h3 className="subtitle">{post.subtitle}</h3>} */}
								<GatsbyImage image={post.featuredImage.gatsbyImageData} alt={post.title} />
							</div>

						</div>
						<div className="column">
							<div className="price">
								<h2 className="title is-2 has-text-weight-bold">$14.99</h2>
								<h2 className="subtitle">
									<FaStar className="mr-2 has-text-warning" />
									<FaStar className="mr-2 has-text-warning" />
									<FaStar className="mr-2 has-text-warning" />
									<FaStar className="mr-2 has-text-warning" />
									<FaStar className="mr-2 has-text-warning" />
									{post.userThatRatedCount}+ five-star ratings
								</h2>
							</div>
							<div className="my-5 is-size-4 has-text-justified content has-text-grey-dark">
								{renderRichText(post.contentHead)}
							</div>
							<div className="block">
								<a href={post.buyingStripeLink} target="_blank" rel="noopener noreferrer"
									className="button is-large is-primary has-text-weight-semibold is-fullwidth">
									Buy now
								</a>
							</div>
						</div>
					</div>

					<div className="section">
						<div className="columns">
							<div className="column is-4">
								<div className="card" data-sal="slide-left">
									<h3 className="title is-spaced is-size-3 has-text-centered pt-4">
										70+ Questions
									</h3>
									<div className="card-content">
										<p className="subtitle is-size-4">
											Covers a diverse set of topics that recently appeared in real exam.
										</p>
									</div>
								</div>
							</div>
							<div className="column is-4">
								<div className="card" data-sal="slide-up">
									<h3 className="title is-spaced is-size-3 has-text-centered pt-4">
										7+ Band
									</h3>
									<div className="card-content">
										<p className="subtitle is-size-4">
											The average improvement that buyers have found in their IELTS band scores.
										</p>
									</div>
								</div>
							</div>
							<div className="column is-4">
								<div className="card" data-sal="slide-right">
									<h3 className="title is-spaced is-size-3 has-text-centered pt-4">
										<FaStar className="mr-2 has-text-warning" />
										<FaStar className="mr-2 has-text-warning" />
										<FaStar className="mr-2 has-text-warning" />
										<FaStar className="mr-2 has-text-warning" />
										<FaStar className="mr-2 has-text-warning" />
									</h3>
									<div className="card-content">
										<p className="subtitle is-size-4">
											Hundreds of students have already benefitted from sample expert answers.
										</p>
									</div>
								</div>
							</div>
						</div>

						<div className="section">
							<div className="my-5 is-size-4 has-text-justified content has-text-grey-dark">
								{renderRichText(post.contentBody)}
							</div>

							<article className="media mb-5">
								{/* <figure className="media-left">
									<div className="image is-64x64">
										<img
											src={post.author.avatar.publicUrl}
											alt={post.author.avatar.name}
											className="is-rounded"
										/>
									</div>
								</figure> */}
								<div className="media-content">
									{/* <span className="title is-size-4">{post.author.name}</span> */}
									{/* <br /> */}
									{readTime} read
								</div>
								<div className="media-right">
									<nav className="level">
										<div className="level-right">
											<a
												className="level-item"
												target="_blank"
												rel="noreferrer"
												aria-label={post.slug}
												href={
													"https://twitter.com/intent/tweet?hashtags=ielts%2Ctutor%2Cprep&amp;original_referer=https%3A%2F%2Fwuruzeka.com%2F&amp;ref_src=twsrc%5Etfw&amp;related=twitterapi%2Ctwitter&amp;text=Great%20tips%20to%20prepare%20for%20IELTS&amp;tw_p=WuruZeka&amp;via=WuruZeka&amp;url=https%3A%2F%2Fwuruzeka.com%2Fbook%2F" +
													post.slug
												}
											>
												<FaTwitter className="mr-2" size={25} />
											</a>
											<a
												className="level-item"
												target="_blank"
												rel="noreferrer"
												aria-label={post.slug}
												href={
													"https://www.facebook.com/share.php?title=Writing+IELTS+for+Success&u=https%3A%2F%2Fwuruzeka.com%2Fbook%2F" +
													post.slug
												}
											>
												<FaFacebook className="mr-2" size={25} />
											</a>
											<a
												className="level-item"
												target="_blank"
												rel="noreferrer"
												aria-label={post.slug}
												href={
													"https://www.linkedin.com/sharing/share-offsite/?url=https%3A%2F%2Fwuruzeka.com%2Fbook%2F" +
													post.slug
												}
											>
												<FaLinkedin className="mr-2" size={25} />
											</a>
										</div>
									</nav>
								</div>
							</article>
						</div>
					</div>

					<section className="section has-background-white-bis">
						<div className="has-text-centered">
							<h1 className="title is-2" style={{'line-height': 'normal'}}>
								I've tried several IELTS Speaking test preparation books, but this one stands out. The in-depth analysis of the test format and assessment criteria is invaluable. Example band 9 answers are perfect for both newcomers and strugglers.
							</h1>
							<div className="block is-flex is-flex-direction-column is-align-items-center">
								<figure className="image is-128x128">
									<img
										className="is-rounded"
										src={`${ BUCKET_PATH }/jaspal.jpg`}
										alt="Student"
									/>
								</figure>
							</div>
							<div className="block">
								<p className="title is-4"><strong>Jaspal from India</strong></p>
								<p className="subtitle">Improved speaking band score from 6 to 8</p>
								<p>
									<FaStar className="mr-2 has-text-warning" />
									<FaStar className="mr-2 has-text-warning" />
									<FaStar className="mr-2 has-text-warning" />
									<FaStar className="mr-2 has-text-warning" />
									<FaStar className="mr-2 has-text-warning" />
								</p>
							</div>
						</div>
					</section>

					<section className="section">
						<div className="columns">
							<div className="column is-6">
								<div className="block">
									<article className="media box">
										<div className="media-content">
											<div className="content">
												<p>
													Wuru Zeka's book is a treasure trove of practical strategies and techniques for acing the IELTS Speaking test. The real-life examples and success stories are truly motivating. A must-have for anyone looking to improve their performance.
												</p>
											</div>
											<nav className="level is-mobile">
												<div className="level-left">
													<figure className="image is-64x64">
														<img
															className="is-rounded"
															src={`${ BUCKET_PATH }/ji-hyun-park.jpg`}
															alt="Student"
														/>
													</figure>
													<div className="pl-4">
														<p><strong>Ji-hyun Park from South Korea</strong></p>
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
									<article className="media box">
										<div className="media-content">
											<div className="content">
												<p>
													I've been blown away by the quality of the sample band 9 answers in this book. They've provided me with invaluable insights and guidance on how to excel in the IELTS Speaking test. A fantastic resource for anyone looking to improve their performance!
												</p>
											</div>
											<nav className="level is-mobile">
												<div className="level-left">
													<figure className="image is-64x64">
														<img
															className="is-rounded"
															src={`${ BUCKET_PATH }/mei.jpg`}
															alt="Student"
														/>
													</figure>
													<div className="pl-4">
														<p><strong>Mei from China</strong></p>
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
									<article className="media box">
										<div className="media-content">
											<div className="content">
												<p>
													From band 9 sample answers to expert tips, this book has it all. My IELTS Speaking performance has never been better!
												</p>
											</div>
											<nav className="level is-mobile">
												<div className="level-left">
													<figure className="image is-64x64">
														<img
															className="is-rounded"
															src={`${ BUCKET_PATH }/laila.jpg`}
															alt="Student"
														/>
													</figure>
													<div className="pl-4">
														<p><strong>Laila from Lebanon</strong></p>
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
									<article className="media box">
										<div className="media-content">
											<div className="content">
												<p>
													I've found the sample band 9 answers in this book extremely beneficial. They've provided me with a blueprint for crafting my own high-quality responses and helped me boost my confidence. Highly recommended!
												</p>
											</div>
											<nav className="level is-mobile">
												<div className="level-left">
													<figure className="image is-64x64">
														<img
															className="is-rounded"
															src={`${ BUCKET_PATH }/fatima.jpg`}
															alt="Student"
														/>
													</figure>
													<div className="pl-4">
														<p><strong>Fatima from Nigeria</strong></p>
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
									<article className="media box">
										<div className="media-content">
											<div className="content">
												<p>
													The expert advice on overcoming test anxiety in this book has been a lifesaver. I now feel calm and confident when facing the IELTS Speaking test. An essential read for anyone feeling overwhelmed by the exam.
												</p>
											</div>
											<nav className="level is-mobile">
												<div className="level-left">
													<figure className="image is-64x64">
														<img
															className="is-rounded"
															src={`${ BUCKET_PATH }/ahmed.jpg`}
															alt="Student"
														/>
													</figure>
													<div className="pl-4">
														<p><strong>Ahmed from Egypt</strong></p>
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
							<div className="column">
								<article
									className="media box">
									<div className="media-content">
										<div className="content">
											<p>
												The sample band 9 answers in Ace the IELTS Speaking Test have been a godsend. They've allowed me to see what top-scoring responses look like and helped me refine my own answers. I can't thank the author enough for this amazing resource!
											</p>
										</div>
										<nav className="level is-mobile">
											<div className="level-left">
												<figure className="image is-64x64">
													<img
														className="is-rounded"
														src={`${ BUCKET_PATH }/priya.jpg`}
														alt="Student"
													/>
												</figure>
												<div className="pl-4">
													<p><strong>Priya from India</strong></p>
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
								<article
									className="media box">
									<div className="media-content">
										<div className="content">
											<p>
												Lucky me, I got the exact same question mentioned in the book.
											</p>
										</div>
										<nav className="level is-mobile">
											<div className="level-left">
												<figure className="image is-64x64">
													<img
														className="is-rounded"
														src={`${ BUCKET_PATH }/nguyen-thi-anh.jpg`}
														alt="Student"
													/>
												</figure>
												<div className="pl-4">
													<p><strong>Nguyen Thi Anh from Vietnam</strong></p>
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
								<article
									className="media box">
									<div className="media-content">
										<div className="content">
											<p>
												This book has transformed my IELTS Speaking test performance. The practical exercises and sample questions have helped me identify and improve my weaknesses. I can't thank the author enough for this amazing resource.
											</p>
										</div>
										<nav className="level is-mobile">
											<div className="level-left">
												<figure className="image is-64x64">
													<img
														className="is-rounded"
														src={`${ BUCKET_PATH }/ali.jpg`}
														alt="Student"
													/>
												</figure>
												<div className="pl-4">
													<p><strong>Ali from Pakistan</strong></p>
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
								<article
									className="media box">
									<div className="media-content">
										<div className="content">
											<p>
												I've always found the IELTS Speaking test intimidating, but this book has changed my perspective. The expert advice and proven techniques have made all the difference. I can now approach the test with confidence and ease.
											</p>
										</div>
										<nav className="level is-mobile">
											<div className="level-left">
												<figure className="image is-64x64">
													<img
														className="is-rounded"
														src={`${ BUCKET_PATH }/yusuf.jpg`}
														alt="Student"
													/>
												</figure>
												<div className="pl-4">
													<p><strong>Yusuf from Turkey</strong></p>
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
								<article
									className="media box">
									<div className="media-content">
										<div className="content">
											<p>
												The sample band 9 answers in this book are worth their weight in gold. They've given me a clear idea of what's expected in the IELTS Speaking test and helped me improve my own performance. An invaluable resource!
											</p>
										</div>
										<nav className="level is-mobile">
											<div className="level-left">
												<figure className="image is-64x64">
													<img
														className="is-rounded"
														src={`${ BUCKET_PATH }/chika.jpg`}
														alt="Student"
													/>
												</figure>
												<div className="pl-4">
													<p><strong>Chika from Japan</strong></p>
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

						{/* {post.tags.map((tag) => (
            <div className="pr-2">
              <span className="tag is-light is-rounded is-size-6">#{tag}</span>
            </div>
          ))} */}
						{/* <p className="my-4 is-size-6">
					</p> */}
						{/* {post.relatedBlogPosts && post.relatedBlogPosts.length > 0 && (
            <div>
              <div className="tabs is-large">
                <ul>
                  <li>Related books</li>
                </ul>
              </div>
              <div className="columns is-multiline">
                {post.relatedBlogPosts.map(({ title, featuredImage, content, slug }) => (
                  <div className="column is-4" key={title}>
                    <div className="card">
                      <div className="card-image">
                        <Link to={`/book/${slug}`}>
                          <figure className="image">
                            <GatsbyImage image={featuredImage.gatsbyImageData} alt={title}/>
                          </figure>
                        </Link>
                      </div>
                      <div className="card-content">
                        <Link to={`/book/${slug}`}>{title}</Link>
                        <p className="is-size-6">{documentToPlainTextString(JSON.parse(content.raw)).substring(0, 100)}..</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )} */}
					</section>

					<section id="faq" className="section">
						<div className="container">
							<p className="block has-text-centered">
								<h1 className="title">Frequently asked questions</h1>
								{/* <h3 className="subtitle">Need help with something? Here are our most frequently asked questions.</h3> */}
							</p>
							<div className="columns is-multiline is-centered">
								<Collapse title="Does the book apply to both IELTS general and academic?">
									<p>
										Great question, yes it does as speaking is same for both categories.
									</p>
								</Collapse>
								<Collapse title="Can I get 1:1 coaching if I need more help?">
									<p>
										Yes, please reach out to us via e-mail or chat to set-up a session with an IELTS teacher.
									</p>
								</Collapse>
								<Collapse title="Is there a mobile app available for on-the-go learning?">
									<p>
										We are working on it, sign-up to our app to get notified via e-mail as soon as it's available.
									</p>
								</Collapse>
								<Collapse title="Can I get a refund if I don't like the book?">
									<p>
										Absolutely, please reach out to support@wuruzeka.com with your feedback and we'll refund no questions asked.
									</p>
								</Collapse>
								<Collapse title="What kind of support and guidance can I expect from the human mentors at Wuru Zeka?">
									<p>
										While most of our students are able to improve their scores using the platform.
										However, for those that still are unable to improve, our teachers do offer 1:1 consultation. 
										At any time, do not hesitate to reach out to us at support@wuruzeka.com for help regarding this.
									</p>
								</Collapse>
							</div>
						</div>
					</section>
				</section>
			</PageLayout>
		);
	}
};

BookPage.propTypes = propTypes
export default BookPage;

// const Collapse = (props) => {
// 	const [state, setState] = useState({cardState: false});

// 	const toggleCardState = () => {
// 		setState({cardState: !state.cardState});
// 	};

// 	const {title, children} = props;
// 	const {cardState} = state;

// 	return (
// 		<div className="column is-8">
// 			<div className="card" aria-hidden={cardState ? "false" : "true"}
// 			// style={{background: cardState ? null : 'white',}}
// 			>
// 				<a type="button"
// 					className="card-header"
// 					style={{
// 						cursor: "pointer",
// 						'border-bottom-right-radius': cardState ? null : "2em",
// 						'border-bottom-left-radius': cardState ? null : "2em",
// 					}}
// 					onClick={toggleCardState}
// 				>
// 					<p className="card-header-title">{title}</p>
// 					<div className="card-header-icon">
// 						<span
// 							className="icon"
// 							style={{
// 								transform: cardState ? null : "rotate(180deg)",
// 								transition: "transform 250ms ease-out"
// 							}}
// 						>
// 							<FaAngleUp />
// 						</span>
// 					</div>
// 				</a>
// 				<div
// 					className="card-content"
// 					style={{
// 						maxHeight: cardState ? 1000 : 0,
// 						padding: cardState ? null : 0,
// 						overflow: "hidden",
// 						transition: "max-height 250ms, padding 250ms"
// 					}}
// 				>
// 					<div className="content">{children}</div>
// 				</div>
// 			</div>
// 		</div>
// 	);
// };