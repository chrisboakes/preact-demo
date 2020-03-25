import style from "./style.css";
import { Link } from 'preact-router/match';

export default () => (
	<nav class={style.header}>
		<Link activeClassName={style.active} href="/">Home</Link>
		<Link activeClassName={style.active} href="/politics">Politics</Link>
		<Link activeClassName={style.active} href="/news">News</Link>
	</nav>
);
