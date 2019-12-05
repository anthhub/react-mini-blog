// import styled from 'styled-components';

// export const Wrapper = styled.div`

// `

import styled from 'styled-components';

export const Wrapper = styled.div`
	position: fixed;
	top: 60px;
	left:0;
	z-index: 1;
	width: 100%;
	height: 46px;
	background: #fff;
	border-top: 1px solid #f1f1f1;
	box-shadow: 0 1px 2px 0 rgba(0, 0, 0, .05);

	.nav-list {
		display: flex;
		align-items: center;
		max-width: 960px;
		height: 100%;
		margin: 0 auto;

		.nav-item {
			padding: 0 12px;
			font-size: 14px;
			color: #71777c;
			cursor: pointer;

			&.profile {
				padding-left: 0;
			}

			&.active,
			:hover {
				color: #007fff;
			}
		}
	}
`;
