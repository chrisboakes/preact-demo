import { h, Component } from 'preact';
import style from './style';

export default class Politics extends Component {
	async componentDidMount() {
		const res = await fetch('https://my-json-server.typicode.com/chrisboakes/preact-demo/politics-articles');
		const data = await res.json();
		let content = [];

		if (res.status === 200) {
			data.forEach( result => {
				result.link = `${ result.section }/${ result.slug }`;
				content.push(result);
			});
		} else {
			content = ['No results'];
		}

		this.setState({ content });
	};

	render({}, { content=[{title: 'Loading'}] }) {
		return (
			<div class={style.politics}>
				<h1>Politics</h1>
				<ul>
					{
						content.map( item => (
							<li>
								{ item.link ? (
									<a href={ item.link }>{item.title}</a>
								) : item.title  }
							</li>
						))
					}
				</ul>
			</div>
		);
	};
}
