import { h, Component } from 'preact';
import { Router } from 'preact-router';

import Header from './header';

// Code-splitting is automated for routes
import Home from '../routes/home';
import Politics from '../routes/politics';
import News from '../routes/news';
import Article from '../routes/article';

export default class App extends Component {
	/** Gets fired when the route changes.
	 *	@param {Object} event		"change" event from [preact-router](http://git.io/preact-router)
	 *	@param {string} event.url	The newly routed URL
	 */
	handleRoute = e => {
		this.currentUrl = e.url;
	};

	render(props) {
		return (
		<div id="app">
			<Header />
			<main>
			<Router url={props.url} onChange={this.handleRoute}>
				<Home path="/" />
				<Politics path="/politics/" content={props.content} />
				<News path="/news/" />
				<Article path="/politics/:article" section="politics" />
				<Article path="/news/:article" section="news" />
			</Router>
			</main>
		</div>
		);
	}
}
