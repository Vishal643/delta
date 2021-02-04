import React from 'react';
import { Link } from 'react-router-dom';

const links = [
	{
		to: '/subreddits/leaderboard/',
		title: 'Top Communities',
	},
];
const Navbar = () => {
	return (
		<div>
			{links.map(({ to, title }) => (
				<Link key={to} to={to}>
					{title}
				</Link>
			))}
		</div>
	);
};

export default Navbar;
