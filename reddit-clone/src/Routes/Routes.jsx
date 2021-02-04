import React from 'react';

import { Route, Switch } from 'react-router-dom';
import SubRedditShow from '../content/SubRedditShow';
import Content from '../content/Content';
import { Sidebar } from '../Components/Sider';

const Routes = () => {
	return (
		<div>
			<Switch>
				<Route exact path='/'>
					<SubRedditShow />
				</Route>

				{/* <Route exact path='/Community'>
					<Sidebar />
				</Route> */}
				{/* <Route exact path='/r/askScience'>
					<SubRedditShow />
				</Route> */}
				<Route>
					<h1>Page Not Found</h1>
				</Route>
			</Switch>
		</div>
	);
};

export default Routes;
