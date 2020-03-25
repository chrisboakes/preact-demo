import { h } from 'preact';
import Logo from '../logo';
import Nav from '../nav';
import style from './style.css';

const Header = () => (
	<header class={style.header}>
		<Logo />
		<Nav />
	</header>
);

export default Header;
