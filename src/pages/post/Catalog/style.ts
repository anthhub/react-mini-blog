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

		/* 位置刻度 */
		.ant-anchor-ink {
			display: none;
		}

		.catalog-title {
			font-size: 14px;
			color: #000;
		}

		.catalog-body {
			margin: 6px 0;

			.ant-anchor-link-active {
				color: #007fff;
				background-color: #ebedef;
			}
		}
	}
`
