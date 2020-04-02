import { h, Component } from 'preact';

export default class Politics extends Component {
	async fetchContent() {
		const res = await fetch(`https://my-json-server.typicode.com/chrisboakes/preact-demo/politics-articles`);
		const data = await res.json();
		let clientData = {};

		if (res.status === 200) {
			clientData = data;
		}

		this.setState({ clientData });
	}

	componentDidMount() {
		if (window.__content__ && window.__content__.length > 0) {
			this.setState({ clientData: window.__content__ });
		} else {
			this.fetchContent();
		}
	}

	render({ content }, { clientData }) {
		if (clientData) {
			content = clientData
		}

		return (
			<div>
				<h1>Politics</h1>
				<h2>This page is server side rendered</h2>

				<ul>
					{
						content && content.length > 0 ? content.map(item => (
							<li>
								{
									<a href={item.section + "/" + item.slug}>{item.title}</a>
								}
							</li>
						)) : ''
					}
				</ul>
			</div>
		);
	};
}
