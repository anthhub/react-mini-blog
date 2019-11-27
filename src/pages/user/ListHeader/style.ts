// import styled from 'styled-components';

// export const Wrapper = styled.div`

// `

import styled from 'styled-components'

export const Wrapper = styled.div`

	.list-header {
		height: 50px;
		border-radius: 2px 2px 0 0;
		border-bottom: 1px solid #ebebeb;
		background: #fff;
		box-sizing: content-box;
		.nav-list {
			display: flex;

			.nav-item {
				display: flex;
				justify-content: center;
				align-items: center;
				width: 90px;
				height: 50px;
				font-size: 16px;
				font-weight: 500;
				color: #31445b;

				&.active {
					box-shadow: inset 0 -2px 0 #3780f7;
				}

				.item-count {
					margin-left: 5px;
					font-size: 15px;
					color: #b2bac2;
				}
			}
		}
	}
`
