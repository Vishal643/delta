import React from 'react';

import styles from './Cards.module.css';

import AboutCommunity from '../community/AboutCommunity';

const Cards = () => {
	return (
		<div className={styles.side_bar}>
			<AboutCommunity />
		</div>
	);
};

export default Cards;
