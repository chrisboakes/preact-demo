import { h, render, Component } from 'preact';

export default class Article extends Component {
	constructor(props) {
		super(props);
	}

	async fetchContent() {
		const res = await fetch(`https://my-json-server.typicode.com/chrisboakes/preact-demo/${this.props.article}`);
		const data = await res.json();
		let post = {};

		if (res.status === 200) {
			post = data;
		} else {
			post.title = 'No results';
		}

		this.setState({ post });
	}

	componentDidMount() {
		if (window.__content__) {
			this.setState({ post: window.__content__ });
		} else {
			this.fetchContent();
		}
	}

	getPost({ post }) {
		return (
		<div>
			<h1>{ post.title }</h1>
			<h2>This page is { this.props.rendered } side rendered</h2>
			<p>{ post.standfirst }</p>
			<div class="content" dangerouslySetInnerHTML={{ __html: post.content }} />
		</div>
		);
	}

	render({}, { post = null }) {
		return (
			<div>
				{ post ?  this.getPost({ post }) : '' }
			</div>
		);
	}
}
