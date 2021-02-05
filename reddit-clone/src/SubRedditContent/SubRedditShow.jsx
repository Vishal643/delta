import React from 'react';

import styles from './SubRedditShow.module.css';
import SubReddit from './subreddit/SubReddit';
import MainBar from './titlebar/Mainbar';
import Cards from './AboutSubRedditCard/AboutSubRedditCards';

const SubRedditShow = () => {
	return (
		<>
			<SubReddit />
			<div className={styles.content}>
				<div className={styles.bars_wrapper}>
					<span className={styles.popular_posts_title}>Popular posts</span>
					<div className={styles.bars_wrapper_inside}>
						<MainBar />
						<Cards />
					</div>
				</div>
			</div>
		</>
	);
};

export default SubRedditShow;
