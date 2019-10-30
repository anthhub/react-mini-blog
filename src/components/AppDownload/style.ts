// import styled from 'styled-components';

// export const Wrapper = styled.div`

// `

import styled from 'styled-components';

export const Wrapper = styled.div`
	width: 240px;
	height: 80px;
	background: #fff;
	border-radius: 2px;
	box-shadow: 0 1px 2px 0 rgba(0, 0, 0, .05);

	.app-link {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 100%;

		.qr-img {
			width: 50px;
			height: 50px;
			margin-right: 6px;
		}

		.headline {
			color: #333;
			font-size: 14px;
			font-weight: 600;
		}

		.desc {
			color: #909090;
		}
	}
`;
