import style from "./style.css";
import { Link } from 'preact-router/match';

export default () => (
	<nav class={style.nav}>
		<ul>
			<li><Link activeClassName={style.active} href="/">Home</Link></li>
			<li><Link activeClassName={style.active} href="/politics">Politics</Link></li>
			<li><Link activeClassName={style.active} href="/news">News</Link></li>
		</ul>
	</nav>
);
