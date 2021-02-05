import React from 'react';

import { Route, Switch } from 'react-router-dom';
import SubRedditShow from '../SubRedditContent/SubRedditShow';
import SubRedditContent from '../SubRedditContent/SubRedditContent';
import { Sidebar } from '../Components/Community/Sider';
import Navbar from '../Components/navbar/Navbar';
const Routes = () => {
	return (
		<div>
			<Navbar />
			<Switch>
				<Route exact path='/'>
					<SubRedditContent />
				</Route>
				<Route exact path='/Community'>
					<Sidebar />
				</Route>
				<Route exact path='/askScience'>
					<SubRedditShow />
				</Route>
				<Route>
					<h1>Page Not Found</h1>
				</Route>
			</Switch>
		</div>
	);
};

export default Routes;
