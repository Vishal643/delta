import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, ListGroup } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { getProfileDetails } from '../Redux/ProfileData/action';
import { Link } from 'react-router-dom';
import { v4 as uuid } from 'uuid';

import styles from './RightCards.module.css';

const RightCards = () => {
	const dispatch = useDispatch();
	const data = useSelector((state) => state.data);
	const alphabets = [
		'A',
		'B',
		'C',
		'D',
		'E',
		'F',
		'G',
		'H',
		'I',
		'J',
		'K',
		'L',
		'M',
		'N',
		'O',
		'P',
		'Q',
		'R',
		'S',
		'T',
		'U',
		'V',
		'W',
		'X',
		'Y',
		'Z',
		'#',
	];
	useEffect(() => {
		dispatch(getProfileDetails());
	}, [dispatch]);

	return (
		<div className={styles.body_div} key={uuid()}>
			{data.map((i) =>
				i.map((item) => (
					<Card className={styles.card} key={item.id}>
						<ListGroup variant='flush' key={uuid()}>
							<ListGroup.Item
								className={styles.ListGroup_banner_img}
								style={{
									backgroundImage: `url(${item.backgroundImage})`,
								}}
							>
								<p className={styles.ListGroup_banner_img__para}>{item.p}</p>
							</ListGroup.Item>
							<ListGroup.Item className={styles.ListGroup_item} key={uuid()}>
								<span key={uuid()} className={styles.numbering}>
									<span
										style={{
											marginRight: 10,
											textAlign: 'left',
											alignContent: 'left',
										}}
									>
										1
									</span>
									<i
										className='fa fa-caret-up'
										style={{ color: 'green', marginLeft: '10px' }}
									></i>
								</span>
								<img
									src={`${item.image1}`}
									alt='image_icon'
									className={styles.img_icon}
								/>
								<span style={{ textAlign: 'right' }}>{item.name1}</span>
							</ListGroup.Item>
							<ListGroup.Item className={styles.ListGroup_item} key={uuid()}>
								<span className={styles.numbering}>
									<span
										key={uuid()}
										style={{
											marginRight: 10,
											textAlign: 'left',
											alignContent: 'left',
										}}
									>
										2
									</span>
									<i
										className='fa fa-caret-up'
										style={{ color: 'green', marginLeft: '10px' }}
									></i>
								</span>
								<img
									src={`${item.image2}`}
									className={styles.img_icon}
									alt='img_icon'
								/>
								<span style={{ textAlign: 'right' }}>{item.name2}</span>
							</ListGroup.Item>
							<ListGroup.Item className={styles.ListGroup_item} key={uuid()}>
								<span key={uuid()} className={styles.numbering}>
									<span
										key={uuid()}
										style={{
											marginRight: 10,
											textAlign: 'left',
											alignContent: 'left',
										}}
									>
										3
									</span>
									<i className='fa fa-caret-up' style={{ color: 'green' }}></i>
								</span>
								<img
									src={`${item.image3}`}
									alt='image_icon'
									className={styles.img_icon}
								/>
								<span style={{ textAlign: 'right' }}>{item.name3}</span>
							</ListGroup.Item>
							<ListGroup.Item className={styles.ListGroup_item} key={uuid()}>
								<span key={uuid()} className={styles.numbering}>
									<span
										key={uuid()}
										style={{
											marginRight: 10,
											textAlign: 'left',
											alignContent: 'left',
										}}
									>
										4
									</span>
									<i
										className='fa fa-caret-up'
										style={{ color: 'green', marginLeft: '10px' }}
									></i>
								</span>
								<img
									src={`${item.image4}`}
									alt='image_icon'
									className={styles.img_icon}
								/>
								<span style={{ textAlign: 'right' }}>{item.name4}</span>
							</ListGroup.Item>
							<ListGroup.Item
								className={styles.ListGroup_item_last}
								key={uuid()}
							>
								<span key={uuid()} className={styles.numbering}>
									<span
										key={uuid()}
										style={{
											marginRight: 10,
											textAlign: 'left',
											alignContent: 'left',
										}}
									>
										5
									</span>
									<i
										className='fa fa-caret-up'
										style={{ color: 'green', marginLeft: '10px' }}
									></i>
								</span>
								<img
									src={`${item.image5}`}
									alt='image_icon'
									className={styles.img_icon}
								/>
								<span key={uuid()} style={{ textAlign: 'right' }}>
									{item.name5}
								</span>

								<button className={styles.see_all_btn}>{item.btnName}</button>
							</ListGroup.Item>
						</ListGroup>
					</Card>
				))
			)}

			<div className={styles.alphabets_div}>
				<p>Browse Communities A-Z</p>
				{alphabets.map((item) => (
					<span>{item}</span>
				))}
			</div>
			<div className={styles.footer_div}>
				<div>
					<p>Help</p>
					<p>Reddit Apps</p>
					<p>Reddit Coins</p>
					<p>Reddit Premium</p>
					<p>Reddit Gifts</p>
				</div>
				<div>
					<p>About</p>
					<p>Career</p>
					<p>Press</p>
					<p>Advertise</p>
					<p>Blog</p>
					<p>Terms</p>
					<p>Content Policy</p>
					<p>Privacy Policy</p>
					<p>Mod Policy</p>
				</div>
				<div>
					<p>Reddit Inc © 2021. All rights reserved</p>

					<p className={styles.back_to_top_btn}>
						<a href='#'>Back To Top</a>
					</p>
				</div>
			</div>
		</div>
	);
};

export default RightCards;
