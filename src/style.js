// 全局样式
import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
	/* http://meyerweb.com/eric/tools/css/reset/ 
		v2.0 | 20110126
		License: none (public domain)
	*/

	html, body, div, span, applet, object, iframe,
	h1, h2, h3, h4, h5, h6, p, blockquote, pre,
	a, abbr, acronym, address, big, cite, code,
	del, dfn, em, img, ins, kbd, q, s, samp,
	small, strike, strong, sub, sup, tt, var,
	b, u, i, center,
	dl, dt, dd, ol, ul, li,
	fieldset, form, label, legend,
	table, caption, tbody, tfoot, thead, tr, th, td,
	article, aside, canvas, details, embed, 
	figure, figcaption, footer, header, hgroup, 
	menu, nav, output, ruby, section, summary,
	time, mark, audio, video {
		margin: 0;
		padding: 0;
		border: 0;
		font-size: 100%;
		font: inherit;
		vertical-align: baseline;
	}
	/* HTML5 display-role reset for older browsers */
	article, aside, details, figcaption, figure, 
	footer, header, hgroup, menu, nav, section {
		display: block;
	}
	body {
		font-size: 14px;
    font-family: -apple-system, SF UI Text, PingFang SC, Hiragino Sans GB, Microsoft YaHei, WenQuanYi Micro Hei, Helvetica Neue, Helvetica,Arial, sans-serif;
    color: #333;
		// 小红书的 body 背景色是灰色（上滑下滑到底都能看到）
		background-color: #fbfbfb;
	}
	ol, ul {
		list-style: none;
	}
	blockquote, q {
		quotes: none;
	}
	blockquote:before, blockquote:after,
	q:before, q:after {
		content: '';
		content: none;
	}
	table {
		border-collapse: collapse;
		border-spacing: 0;
	}
	
`;
