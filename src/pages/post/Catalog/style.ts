import styled from 'styled-components'

export const Wrapper = styled.div`
	.ant-anchor-wrapper {
		/* 去掉 antd 目录背景颜色 */
		background: transparent;

		/* 隐藏滚动条 */
		/* IE 10+ */
		-ms-overflow-style: none;
		/* Firefox */
		scrollbar-width: none;
		/* Safari and Chrome */
		::-webkit-scrollbar {
			/* display: none; */
			width: 0;
			height: 0;
		}

		/* 左侧刻度轴隐藏 */
		.ant-anchor-ink {
			display: none;
		}

		.catalog-title {
			font-size: 14px;
			color: #000;
		}

		.catalog-body {
			margin: 6px 0;

			.ant-anchor-link {
				padding: 0;

				/* 所有链接 */
				.ant-anchor-link-title {
					margin: 6px 0;
					padding: 4px 0 4px 21px;
					color: #000;
					::before {
						content: '';
						position: absolute;
						top: 50%;
						transform: translateY(-50%);
						z-index: 1000;
						width: 4px;
						height: 4px;
						border-radius: 50%;
						background: currentColor;
					}
				}
			}

			/* 二級目錄中的鏈接 */
			.ant-anchor-link > .ant-anchor-link > .ant-anchor-link-title {
				margin: 0;
				padding: 4px 0 4px 36px;
				color: #333;

				::before {
					left: 24px;
				}
			}

			/* 三级目录链接小圆点 */
			.ant-anchor-link > .ant-anchor-link > .ant-anchor-link > .ant-anchor-link-title {
				padding: 4px 0 4px 51px;

				::before {
					left: 39px;
				}
			}

			/* 被選中的一級目錄 */
			.ant-anchor-link-active {
				background-color: #ebedef;

				.ant-anchor-link-title-active {
					color: #007fff;
				}
			}

			/* 被選中的二級目錄（考慮優先級） */
			.ant-anchor-link > .ant-anchor-link-active > .ant-anchor-link-title-active {
				color: #007fff;
			}

			/* 鼠標懸停時 */
			.ant-anchor-link:hover {
				background: #ebedef;

				.ant-anchor-link-title {
					/* 如何移除 a:hover 的效果？——把里面的代码全部去掉即可 */
					/* color: inherit; */
				}
			}
		}

		/* 一级目录中的链接 */
		.catalog-body > .ant-anchor-link > .ant-anchor-link-title {
			font-weight: 600;

			::before {
				left: 5px;
				width: 6px;
				height: 6px;
			}
		}
	}
`
