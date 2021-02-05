import React from 'react';

import styles from './AboutSubRedditCards.module.css';

import AboutCommunity from '../AboutCommunity/AboutCommunity';

const Cards = () => {
	return (
		<div className={styles.side_bar}>
			<AboutCommunity />
		</div>
	);
};

export default Cards;
