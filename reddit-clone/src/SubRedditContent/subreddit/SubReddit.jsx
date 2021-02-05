import React from 'react';
import styles from './SubReddit.module.css';

export const SubReddit = () => {
	return (
		<>
			<div className={styles.subreddit_page_banner_div}></div>
			<div className={styles.title_image_div}>
				<img
					className={styles.img_icon}
					src='https://b.thumbs.redditmedia.com/VXukRtebQAtdj6BUMLlOjCh3XnLH9_oScHxsDJ-vsio.png'
					alt='image_icon'
				/>
				<h1 className={styles.para}>Science For You</h1>
				<button className={styles.join_btn}>Join</button>
				<p className={styles.tag_name}>r/science</p>
			</div>
		</>
	);
};
export default SubReddit;
