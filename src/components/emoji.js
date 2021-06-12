import React from 'react';

const Emoji = (props) => {
	const styles = {
		fontSize: props.size + 'rem'
	};

	return (
		<span style={styles} role="img" aria-label="emoji">
			{props.emoji}
		</span>
	);
};

export default Emoji