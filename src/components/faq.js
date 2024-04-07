import React, {useState} from "react";
import {FaAngleUp} from 'react-icons/fa';
import { Link } from 'gatsby';

export const Collapse = (props) => {
	const [state, setState] = useState({cardState: false});

	const toggleCardState = () => {
		setState({cardState: !state.cardState});
	};

	const {title, children} = props;
	const {cardState} = state;

	return (
		<div className="column is-8">
			<div className="card" aria-hidden={cardState ? "false" : "true"}
			// style={{background: cardState ? null : 'white',}}
			>
				<a type="button" 
					className="card-header"
					style={{
						cursor: "pointer",
						'border-bottom-right-radius': cardState ? null : "2em",
						'border-bottom-left-radius': cardState ? null : "2em",
					}}
					onClick={toggleCardState}
				>
					<p className="card-header-title">{title}</p>
					<div className="card-header-icon">
						<span
							className="icon"
							style={{
								transform: cardState ? null : "rotate(180deg)",
								transition: "transform 250ms ease-out"
							}}
						>
							<FaAngleUp />
						</span>
					</div>
				</a>
				<div
					className="card-content"
					style={{
						maxHeight: cardState ? 1000 : 0,
						padding: cardState ? null : 0,
						overflow: "hidden",
						transition: "max-height 250ms, padding 250ms"
					}}
				>
					<div className="content">{children} </div>
				</div>
			</div>
		</div>
	);
};

// What is Wuru Zeka and how does it help improve IELTS scores?
// How does the AI + Human service offered by Wuru Zeka work?
// What are the features and benefits of using Wuru Zeka for IELTS preparation?
// How do I sign up for Wuru Zeka and get started with my IELTS preparation?
// What is the pricing structure for Wuru Zeka's services, and are there any discounts or promotions available?
// How does Wuru Zeka customize the study plan and materials for each student?
// What kind of support and guidance can I expect from the human mentors at Wuru Zeka?
// How can I track my progress and improvement while using Wuru Zeka for my IELTS preparation?
// Can I use Wuru Zeka on multiple devices, and is there a mobile app available for on-the-go learning?
// What measures does Wuru Zeka take to ensure the privacy and security of my personal information?

function Faq() {
	return (
		<section id="faq" className="section">
			<div className="container">
				<p className="block has-text-centered">
					<h1 className="title">Frequently asked questions</h1>
					{/* <h3 className="subtitle">Need help with something? Here are our most frequently asked questions.</h3> */}
				</p>
				<div className="columns is-multiline is-centered">
					<Collapse title="How does WZ help improve IELTS scores?">
						<p>
							Great question, see the <Link
							to="/#how-it-works">how it works</Link> section to learn more.
						</p>
					</Collapse>
					<Collapse title="Would my tests be evaluated by Human or AI?">
						<p>
							Your tests are evaluated entirely by certified ex IELTS examiners.
						</p>
					</Collapse>
					<Collapse title="How does WZ customize the study plan and materials for each student?">
						<p>
							Once you give a mock test, our evaluators identify your weaknesses and lets the AI know about them. 
							The AI then creates a personalized study plan for you, which gets updated everytime you take another test.
						</p>
					</Collapse>
					<Collapse title="Is there a mobile app available for on-the-go learning?">
						<p>
							We are working on it, sign-up to our app to get notified via e-mail as soon as it's available.
						</p>
					</Collapse>
					<Collapse title="Can I get a refund if I don't like the platform">
						<p>
							Absolutely, please reach out to support@wuruzeka.com with your feedback and we'll refund no questions asked.
						</p>
					</Collapse>
					<Collapse title="What kind of support and guidance can I expect from the human mentors at Wuru Zeka?">
						<p>
							While most of our students are able to improve their scores using the platform. 
							However, for those that still are unable to improve, our teachers do offer 1:1 consultation. At any time, do not hesitate to reach out to us at support@wuruzeka.com for help regarding this.
						</p>
					</Collapse>
				</div>
			</div>
		</section>
	);
}

export default Faq;
