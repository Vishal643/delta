import React from 'react';
import styles from './AboutCommunity.module.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, ListGroup } from 'react-bootstrap';

import { v4 as uuid } from 'uuid';

const AboutCommunity = () => {
	return (
		<Card className={styles.card} key={uuid()}>
			<ListGroup variant='flush' key={uuid()}>
				<div className={styles.about_communit_list}>
					<p>About Community</p>
				</div>
				<div className={styles.ListGroup_item_last} key={uuid()}>
					<p>
						Welcome to r/askScience, the community for Eiichiro Oda's manga and
						anime series One Piece. From the East Blue to the New World,
						anything related to the world of One Piece belongs here! If you've
						just set sail with the Straw Hat Pirates, be wary of spoilers on
						this subreddit! If you want discussion, please sort the subreddit by
						New.
					</p>
				</div>
				<div className={styles.ListGroup_item_create_post}>
					<p>Created 8 Jan 2011</p>
					<button className={styles.create_post_btn}>Create Post</button>
				</div>
			</ListGroup>
		</Card>
	);
};

export default AboutCommunity;
