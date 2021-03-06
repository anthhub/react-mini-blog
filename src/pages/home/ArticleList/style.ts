// import styled from 'styled-components';

// export const Wrapper = styled.div`

// `

import styled from 'styled-components'

export const Wrapper = styled.div`
	width: 700px;
	background: #fff;

	.header {
		padding: 16px 12px;
		border-bottom: 1px solid hsla(0, 0%, 59.2%, .1);

		.nav-list {
			display: flex;
			flex-direction: row;
			align-items: center;
			margin-bottom: 0;

			.nav-item {
				padding: 0 14px;
				line-height: 14px;
				font-size: 14px;
				color: #909090;
				cursor: pointer;

				&.active,
				:hover {
					color: #007fff;
				}

				:not(:first-child) {
					border-left: 1px solid hsla(0, 0%, 59.2%, .2);
				}
			}
		}
	}

	.item {
		border-bottom: 1px solid rgba(178, 186, 194, .15);
		.thumb {
			width: 60px;
			height: 60px;
			border-radius: 2px;
			background-color: #fff;
		}
	}
`
