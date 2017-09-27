import React from 'react';
import { BrowserRouter, hashHistory } from 'react-router-dom';
import { render } from 'react-dom';

import { AppRouter } from './router.jsx';

render((
	<BrowserRouter history={hashHistory}>
		<AppRouter />
	</BrowserRouter>
), document.getElementById('app'));
