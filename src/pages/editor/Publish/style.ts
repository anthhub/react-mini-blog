import styled from 'styled-components'
// @import headPicIcon from '../../'

export const Wrapper = styled.div`
	.with-padding {
		padding: 0 14px;
		cursor: pointer;
	}

	.cover-img {
		display: block;
		width: 28px;
		height: 28px;
		cursor: pointer;
	}

	.publish {
		display: flex;
		align-items: center;
		flex: 0 0 auto;

		.publish-title {
			flex: 0 0 auto;
			font-size: 16px;
			color: #007fff;
		}

		.arrow-down,
		.arrow-up {
			flex: 0 0 auto;
			margin: 0 14px 0 6px;
			width: 16px;
			height: 16px;
		}

		.arrow-up {
			transform: rotate(180deg);
		}
	}

	.panel {
		// display: none;
		position: absolute;
		z-index: 100;
		top: 100%;
		right: 36px;
		width: 336px;
		padding: 24px;
		background: #fff;
		border: 1px solid #ddd;
		border-radius: 2px;
		box-shadow: 0 1px 2px #f1f1f1;

		.panel-title {
			margin-bottom: 18px;
			font-size: 19px;
			font-weight: 700;
			color: hsla(218, 9%, 51%, .8);
		}

		.type-box {
			margin-bottom: 18px;
			.sub-title {
				margin-bottom: 12px;
				font-size: 16px;
				color: #909090;
			}

			.type-list {
				display: flex;
				margin: 0;
				flex-wrap: wrap;
				list-style: none;

				.item {
					margin: 0 7px 10px 0;
					padding: 5px 8px;
					line-height: 1.2;
					font-size: 13px;
					color: #909090;
					border: 1px solid #f1f1f1;
					border-radius: 2px;
					cursor: pointer;
				}

				.item.active,
				.item:hover {
					color: #007fff;
					border-color: rgba(0, 127, 255, .15);
					background-color: rgba(0, 127, 255, .05);
				}
			}
		}

		.publish-btn {
			display: block;
			margin: 0 auto;
			padding: 7px 14px;
			color: #007fff;
			font-size: 14px;
			background: #fff;
			border: 1px solid currentColor;
			border-radius: 2px;
			outline: none;
			cursor: pointer;
		}

		.publish-btn:hover {
			background: rgba(3, 113, 223, 0.05);
		}
	}

	.panel::before {
		content: '';
		position: absolute;
		top: -6px;
		right: 21%;
		width: 12px;
		height: 12px;
		border-top: 1px solid #ddd;
		border-left: 1px solid #ddd;
		background: #fff;
		transform: rotate(45deg);
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
