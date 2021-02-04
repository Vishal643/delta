import React from 'react';

import './Content.css';
import TrendingToday from './trending/Trending';
import MainBar from './titlebar/Mainbar';
import SideBar from './side-bar/Sidebar';
import Navbar from '../Components/navbar/Navbar';

export default function Content() {
	return (
		<>
			<Navbar />
			<div className='content'>
				<TrendingToday />
				<div className='bars-wrapper'>
					<span className='popular-posts-title'>Popular posts</span>
					<div className='bars-wrapper-inside'>
						<MainBar />
						<SideBar />
					</div>
				</div>
			</div>
		</>
	);
}
