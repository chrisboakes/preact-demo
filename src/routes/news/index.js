import { h, Component } from 'preact';
import style from './style';

export default class Politics extends Component {
	async componentDidMount() {
		const res = await fetch('https://my-json-server.typicode.com/chrisboakes/preact-demo/news-articles');
		const data = await res.json();
		let content = [];

		if (res.status === 200) {
			data.forEach(result => {
				content.push(result);
			});
		} else {
			content = ['No results'];
		}

		this.setState({ content });
	};

	render({ }, { content = [{ title: 'Loading' }] }) {
		return (
			<div class={style.politics}>
				<h1>News</h1>
				<h2>This page is rendered client-side</h2>
				<ul>
					{
						content.map(item => (
							<li>
								{
									<a href={item.section + "/" + item.slug}>{item.title}</a>
								}
							</li>
						))
					}
				</ul>
			</div>
		);
	};
}
