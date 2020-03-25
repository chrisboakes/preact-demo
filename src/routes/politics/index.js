import { h, Component } from 'preact';
import style from './style';

export default class Politics extends Component {
	async componentDidMount() {
		const res = await fetch('https://my-json-server.typicode.com/chrisboakes/preact-demo/politics-articles');
		const data = await res.json();
		let content = '';

		if (data.status === 200) {
			data.forEach( result => {
				content += result.title;
			});
		} else {
			content = 'No results';
		}

		this.setState({ content });
	}

	render({}, { content='Loading' }) {
		return (
			<div class={style.politics}>
				<h1>Politics</h1>
				<ul>
					{content}
				</ul>
			</div>
		);
	}
}
