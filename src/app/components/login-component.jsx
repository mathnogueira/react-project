import React from 'react';

export class LoginComponent extends React.Component {

	render() {
		return (
			<div className="login-box">
				<div className="input-group">
					<label htmlFor="login-field" className="label label--required">Login</label>
					<input name="login" id="login-field" type="text" className="input" />
				</div>
				<div className="input-group">
					<label htmlFor="password-field" className="label label--required">Password</label>
					<input name="password" id="password-field" type="password" className="input" />
				</div>
				<div className="button-group">
					<button className="button button--secondary">Clear</button>
					<button className="button button--primary">Register</button>
				</div>
			</div>
		);
	}	

}
