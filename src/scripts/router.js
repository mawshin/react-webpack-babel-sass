import React from 'react';
import {NavLink, Router, Route, Switch, Link} from 'react-router-dom';

// import DemoComponent from './DemoComponent';
import HeaderBar from './Header';
import Home from './Home';
import Test from './Test';

import '../styles/styles.scss';
// import 'bootstrap-sass/assets/stylesheets/_bootstrap.scss';


const ReactRouter = () => (
	<main>
		<ul className="c-navbar">
	        <li>
	            <Link to="/">Home</Link>
	        </li>
	        <li>
	            <Link to="/test">Test</Link>
	        </li>
	        <li>
	            <Link to="/app">App</Link>
	        </li>
	    </ul>

		<Switch>
			<Route exact path="/" component={Home} />
			<Route path="/test" component={Test} />
			<Route path="/app" component={HeaderBar} />
		</Switch>
	</main>
);

// class ReactRouter extends React.Component {
// 	render() {
// 		return (
// 			<main>
// 				<Switch>
// 					<Route exact name="/" component={Home} />
// 					<Route name="/app" component={HeaderBar} />
// 				</Switch>
// 			</main>
// 		);
// 	}
// }

export default ReactRouter;
