import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { LoginPage } from './containers/login-page.jsx';
import { RegisterPage } from './containers/register-page.jsx';

export class AppRouter extends React.Component {

	render() {
		return (
			<Switch>
				<Route path='/register' component={ RegisterPage } />
				<Route path='/' component={ LoginPage } />
			</Switch>
		);
	}
}

