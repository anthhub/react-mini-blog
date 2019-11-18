import styled from 'styled-components'
// @import headPicIcon from '../../'

export const Wrapper = styled.div`
	.articleEdit {
		height: 100vh;
	}

	.topBar {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		z-index: 100;
		display: flex;
		align-items: center;
		height: 64px;
		padding: 0 17px;
		background-color: #fff;
		border-bottom: 1px solid #ddd;
	}

	.title {
		flex: 1 1 auto;
		margin: 0;
		padding: 0;
		color: #000 !important;
		font-weight: 700 !important;
		font-size: 24px !important;
		border: none !important;
		outline: none;
	}

	// 设置 placeholer 颜色
	.title::-webkit-input-placeholder {
		color: #7a7a7a;
	}
	.title:-moz-placeholder {
		color: #7a7a7a;
	}

	.title::-moz-placeholder {
		color: #7a7a7a;
	}

	.title:-ms-input-placeholder {
		color: #7a7a7a;
	}

	.title:focus {
		box-shadow: none !important;
	}

	.right-box {
		display: flex;
		justify-content: flex-end;
		align-items: center;

		.with-padding {
			padding: 0 14px;
			cursor: pointer;
		}

		.upload-img {
			position: relative;
		}

		.cover-img {
			display: block;
			width: 28px;
			height: 28px;
			cursor: pointer;
		}

		.img-selector {
			position: absolute;
			left: 0;
			top: 0;
			width: 56px;
			height: 28px;
			opacity: 0;
			cursor: pointer;
			font-size: 0;
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

			.arrow-down {
				flex: 0 0 auto;
				margin: 0 14px 0 6px;
				width: 16px;
				height: 16px;
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
				font-size: 18px;
				font-weight: 700;
				color: hsla(218, 9%, 51%, .8);
			}

			.tag-box {
				margin-bottom: 18px;
				.sub-title {
					margin-bottom: 12px;
					font-size: 16px;
					color: #909090;
				}

				.tag-list {
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

		.navigation {
			padding-right: 0;

			.avatar {
				width: 32px;
				height: 32px;
				border-radius: 50%;
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
	}

	.main {
		position: fixed;
		top: 64px;
		left: 0;
		right: 0;
		display: flex;
	}

	.editor {
		flex: 1 1 50%;
	}

	.markdown {
		height: calc(100vh - 106px);
		border-right: 1px solid #ddd;
		background: #f8f9fa;
	}

	.codeMirror {
		/* padding: 36px 30px 42px; */
		bottom: 42px;
		width: 100%;
		min-height: calc(100vh - 106px);
		box-shadow: none;
		background: #f8f9fa;
		.CodeMirror-sizer {
			padding: 30px !important;
		}
	}

	.preview {
		/* position: relative; */
		flex: 1 1 50%;
		background: #fff;
	}

	.content {
		/* min-height: 0; */
		/* height: calc(100vh - 106px); */
		padding: 30px;
		overflow-y: auto;
	}

	.footer {
		/* position: fixed;
		bottom: 0;
		left: 0;
		right: 50%; */
		position: relative;
		bottom: 0;
		z-index: 1;
		display: flex;
		justify-content: space-between;
		align-items: center;
		height: 42px;
		padding: 0 7px;
		border-top: 1px solid #ddd;
		border-right: 1px solid #ddd;
		background: #fff;

		.upload-img-btn {
			border: none;
			outline: none;
			background: #fff;
			cursor: pointer;
		}

		.img-selector {
			position: absolute;
			left: 0;
			width: 46px;
			height: 42px;
			// display: none;
			// visibility: hidden; 不可点击
			opacity: 0;
			cursor: pointer;
			font-size: 0;
		}

		.footer-title,
		.word-count {
			font-size: 14px;
			color: #ddd;
		}
	}

	.preview .footer {
		position: absolute;
		bottom: 0;
		width: 100%;
		border-right: none;
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
		overflow: auto;
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
