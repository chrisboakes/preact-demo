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
				<h2>This page is server side rendered</h2>

				<ul>
					{
						content && newData ? content.map(item => (
							<li>
								{
									<a href={item.section + "/" + item.slug}>{item.title}</a>
								}
							</li>
						)) : ''
					}
					{
						newData ? newData.map(item => (
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
