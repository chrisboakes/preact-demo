import { h, Component } from 'preact';
import style from './style';

export default class Home extends Component {
	render() {
		return (
			<div class={style.home}>
				<h1>Home</h1>
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam mollis mattis nulla quis pulvinar. Fusce consectetur consectetur quam eget consequat. Praesent ut purus orci. Etiam pharetra ligula ac ipsum tempor, a commodo risus tincidunt. Curabitur a ante quam. Quisque tempus posuere porttitor. Integer ac velit sit amet nibh interdum consectetur in sit amet sapien. Sed porttitor mauris diam, in sollicitudin massa elementum et. Vestibulum est neque, luctus a magna id, volutpat ornare elit. In in neque vel magna pharetra hendrerit a nec ante. Praesent viverra libero ante, eget vehicula felis auctor ac. Donec a ante a nunc suscipit condimentum vel eu ligula. Nam lobortis rutrum purus quis scelerisque. Pellentesque interdum sed turpis a eleifend.</p>
				<p>Pellentesque dolor lacus, aliquam auctor laoreet eu, ullamcorper at quam. Sed condimentum auctor neque quis bibendum. Mauris condimentum lectus sit amet risus vulputate hendrerit. Pellentesque sit amet purus quis erat bibendum pellentesque. Pellentesque sed risus feugiat turpis hendrerit elementum eu at ex. Donec nec est volutpat, commodo libero at, sollicitudin mi. In nec commodo erat, posuere consectetur orci. Ut mattis malesuada porttitor.</p>
				<p>Morbi ac dictum elit. Praesent suscipit a odio at feugiat. Nullam ut nibh lacus. Cras lacus eros, hendrerit nec felis non, pellentesque cursus erat. Fusce consequat tristique diam, egestas blandit libero viverra et. Curabitur vitae diam id diam tincidunt vestibulum. Morbi lacinia pharetra metus ut maximus. Quisque sodales nisi a purus tincidunt varius. Vivamus dolor justo, dictum id rhoncus ut, pellentesque eu justo. Sed sagittis viverra felis sed scelerisque. Praesent tincidunt elementum hendrerit. Vestibulum est dui, tempus facilisis nunc sit amet, volutpat auctor magna. Donec vitae elementum lectus. Quisque accumsan ex sapien, ac dapibus purus blandit ac.</p>
			</div>
		);
	}
}
