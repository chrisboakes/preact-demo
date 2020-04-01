import { h, Component } from 'preact';

export default class Politics extends Component {
	componentDidMount() {
		if (window.__content__) {
			this.setState({ newData: window.__content__ });
		} else {
			this.setState({ newData: ["Loading"] });
		}
	}

	render({content}, {newData}) {
		return (
			<div>
				<h1>Politics</h1>

				<ul>
					{
						content && newData ? content.map(item => (
							<li>
								{item.link ? (
									<a href={item.link}>{item.title}</a>
								) : item.title}
							</li>
						)) : ''
					}
					{
						newData ? newData.map(item => (
							<li>
								{item.link ? (
									<a href={item.link}>{item.title}</a>
								) : item.title}
							</li>
						)) : ''
					}
				</ul>
			</div>
		);
	};
}
