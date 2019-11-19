import styled from 'styled-components'

export const Wrapper = styled.div`
	.ant-anchor-wrapper {
		background: transparent;

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
