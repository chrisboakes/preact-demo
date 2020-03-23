import { h } from 'preact';
import { Link } from 'preact-router/match';
import style from './style.css';

const Header = () => (
	<header class={style.header}>
		<h1>The Telegraph</h1>
		<nav>
			<Link activeClassName={style.active} href="/">Home</Link>
			<Link activeClassName={style.active} href="/politics">Politics</Link>
			<Link activeClassName={style.active} href="/news">News</Link>
		</nav>
	</header>
);

export default Header;
