import React from 'react';

import './Searchbar.css';

import SearchIcon from '@material-ui/icons/Search';

// import { getSubReddit } from '../../../Redux/ProfileData/action';
// import { useDispatch, useSelector } from 'react-redux';
// import { Route } from 'react-router-dom';

export default function Searchbar() {
	// const dispatch = useDispatch();
	// const title = useSelector((state) => state.subRedditTitle);

	// const handleSearch = (name) => {
	// 	dispatch(getSubReddit(name));
	// 	if (title !== null) {
	// 		let nameToBeCompared = title.map((item, i) => item[i]);
	// 		console.log(nameToBeCompared);
	// 		nameToBeCompared === name ? console.log(true) : console.log(false);

	// 		// <Route path={`/${name}`}>ABC</Route>;
	// 	}
	// };

	return (
		<div className='searchbar'>
			<label htmlFor='searchbar'>
				<SearchIcon />
			</label>
			<input
				id='searchbar'
				// onChange={(e) => handleSearch(e.target.value)}
				placeholder='Search'
			/>
		</div>
	);
}
