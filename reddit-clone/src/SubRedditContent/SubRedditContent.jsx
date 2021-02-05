import React from 'react';

import './SubRedditContent.css';
import TrendingToday from './trending/Trending';
import MainBar from './titlebar/Mainbar';
import AboutSubRedditCard from './AboutSubRedditCard/AboutSubRedditCards';

export default function SubRedditContent() {
	return (
		<>
			<div className='content'>
				<TrendingToday />
				<div className='bars-wrapper'>
					<span className='popular-posts-title'>Popular posts</span>
					<div className='bars-wrapper-inside'>
						<MainBar />
						<AboutSubRedditCard />
					</div>
				</div>
			</div>
		</>
	);
}
