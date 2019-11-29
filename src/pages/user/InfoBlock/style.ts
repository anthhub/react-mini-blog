// import styled from 'styled-components';

// export const Wrapper = styled.div`

// `

import styled from 'styled-components'

export const Wrapper = styled.div`
	padding: 30px;
	background: #fff;
	border-radius: 2px;
	box-shadow: 0 1px 2px 0 rgba(0, 0, 0, .05);

	.user-info {
		display: flex;
		align-items: flex-start;

		.avatar {
			flex: 0 0 auto;
			margin-right: 29px;
			width: 90px;
			height: 90px;
			border-radius: 50%;
			/* background: #f9f9f9 no-repeat center/cover; */
			background: ${({ avatarLarge }: { avatarLarge: string }) =>
				`#f9f9f9 url(${avatarLarge}) no-repeat center/cover`};
		}

		.info-box {
			display: flex;
			flex-direction: column;
			flex: 1 1 auto;
			margin-right: 24px;

			.user-name {
				font-size: 26px;
				font-weight: 600;
				color: #000;
			}

			.user-position,
			.user-intro {
				margin-top: 5px;
				font-size: 15px;
				color: #4a68ad;
				cursor: pointer;
			}

			.user-position {
				margin-top: 12px;
			}
			
			.user-intro {
				margin-top: 5px;
			}
		}

		.setting-btn {
			flex: 0 0 auto;
			align-self: flex-end;
			width: 118px;
			height: 34px;
			font-size: 16px;
			font-weight: 500;
			color: #3780f7;
			background: #fff;
			border: 1px solid;
			border-radius: 4px;
			cursor: pointer;
		}
	}
`
