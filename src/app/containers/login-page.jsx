import React from 'react';
import { Link } from 'react-router-dom';

import { LoginComponent } from '../components/login-component.jsx';

export class LoginPage extends React.Component {

	render() {
		return (
			<div className='login-container'>
				<LoginComponent />
			</div>
		);
	}
}
