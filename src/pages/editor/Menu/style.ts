import styled from 'styled-components'
// @import headPicIcon from '../../'

export const Wrapper = styled.div`
	.with-padding {
		padding: 0 14px;
		cursor: pointer;
	}

	.navigation {
		padding-right: 0;

		.avatar {
			width: 32px;
			height: 32px;
			border-radius: 50%;
			background: ${({ avatarLarge }: { avatarLarge: string }) =>
				`#eee url(${avatarLarge}) no-repeat center/cover`};
		}

		.dropdown-list {
			position: absolute;
			top: 100%;
			right: 0;
			width: 158px;
			padding: 10px 0;
			background: #fff;
			border: 1px solid rgba(177, 180, 185, 0.45);
			border-radius: 4px;
			box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.1);
			list-style: none;

			.menu-item {
				display: flex;
				padding: 10px 14px;
				font-size: 15px;
				color: #909090;
			}

			.menu-item:hover {
				color: #333;
				background: rgba(242, 242, 242, 0.5);
			}
		}
	}

	article {
		height: 100%;
		padding: 20px;
		overflow-y: auto;
		line-height: 1.7;
	}

	h1 {
		font-weight: bolder;
		font-size: 32px;
	}

	h2 {
		font-weight: bold;
		font-size: 24px;
	}

	h3 {
		font-weight: bold;
		font-size: 20px;
	}

	h4 {
		font-weight: bold;
		font-size: 16px;
	}

	h5 {
		font-weight: bold;
		font-size: 14px;
	}

	h6 {
		font-weight: bold;
		font-size: 12px;
	}

	ul {
		list-style: inherit;
	}

	ol {
		list-style: decimal;
	}

	pre {
		overflow-x: auto;
		color: #333;
		font-family: Monaco, Consolas, Courier New, monospace;
		background: #f8f8f8;
	}

	img {
		max-width: 100%;
		margin: 10px 0;
	}

	table {
		max-width: 100%;
		/* overflow: auto; */
		font-size: 14px;
		border: 1px solid #f6f6f6;
		border-collapse: collapse;
		border-spacing: 0;

		thead {
			color: #000;
			text-align: left;
			background: #f6f6f6;
		}
	}

	td,
	th {
		min-width: 80px;
		padding: 10px;
	}

	tbody tr:nth-of-type(odd) {
		background: #fcfcfc;
	}

	tbody tr:nth-of-type(even) {
		background: #f6f6f6;
	}
`
