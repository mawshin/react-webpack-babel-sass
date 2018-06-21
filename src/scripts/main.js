import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter} from 'react-router-dom';

import ReactRouter from './router';
// import DemoComponent from './DemoComponent';
// import HeaderBar from './Header';

import '../styles/styles.scss';
// import 'bootstrap-sass/assets/stylesheets/_bootstrap.scss';

/*const Home = () => <h1>Home run</h1>;

const App = (
	<Router path="/">
		<div>
			<Route exact name="/" component={Home} />
			<Route name="app" component={HeaderBar} />
		</div>
	</Router>
);

Router.run(App, function (Handler) {
  React.render(<Handler />, document.getElementById('react-container'));
});*/

ReactDOM.render((
  <HashRouter >
    <ReactRouter />
  </HashRouter >
), document.getElementById('react-container'));

// ReactDOM.render(<ReactRouter/>, document.getElementById('react-container'));