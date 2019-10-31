// import styled from 'styled-components';

// export const Wrapper = styled.div`

// `

import styled from 'styled-components';
import avatarPic from '../../../statics/avatar.png';

export const Wrapper = styled.div`
	width: 696px;
	padding: 32px 48px 84px;
	margin: 128px 0 24px;
	background: #fff;
	border-radius: 2px;
	box-shadow: 0 1px 2px 0 rgba(0, 0, 0, .05);

	.title {
		margin: 16px 0;
		font-size: 24px;
		font-weight: 700;
		color: #333;
	}

	.item {
		display: flex;
		align-items: center;
		padding: 24px 0;
		border-top: 1px solid #f1f1f1;

		:first-child {
			padding: 12px 0;
		}

		:last-child {
			border-bottom: 1px solid #f1f1f1;
		}

		.item-title {
			/* display:block; */
			width: 120px;
		}

		.avatar-uploader {
			display: flex;
			.avatar {
				width: 72px;
				height: 72px;
				margin-right: 12px;
				background: #eee url(${avatarPic}) no-repeat center/cover;
			}
		}
	}
`;
