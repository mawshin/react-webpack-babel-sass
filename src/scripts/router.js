import React from 'react';
import {Router, Route, Switch} from 'react-router-dom';

// import DemoComponent from './DemoComponent';
import HeaderBar from './Header';
import Home from './Home';
import Test from './Test';

import '../styles/styles.scss';
// import 'bootstrap-sass/assets/stylesheets/_bootstrap.scss';


const ReactRouter = () => (
	<main>
		<Switch>
			<Route exact path="/" component={Test} />
			<Route path="/test" component={HeaderBar} />
			<Route path="/app" component={Home} />
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
