import { h } from 'preact';
import { Link } from 'preact-router/match';
import Logo from './logo';
import style from './style.css';

const Header = () => (
	<header class={style.header}>
		<Logo />
		<nav>
			<Link activeClassName={style.active} href="/">Home</Link>
			<Link activeClassName={style.active} href="/politics">Politics</Link>
			<Link activeClassName={style.active} href="/news">News</Link>
		</nav>
	</header>
);

export default Header;
