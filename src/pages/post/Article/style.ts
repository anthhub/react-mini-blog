// import styled from 'styled-components';

// export const Wrapper = styled.div`

// `

import styled from 'styled-components';

export const Wrapper = styled.div`
	width: 700px;
	margin-bottom: 18px;
	padding: 24px 24px 36px;
	background: #fff;
	border-radius: 2px;
	box-shadow: 0 1px 2px 0 rgba(0, 0, 0, .05);

	.author {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 24px;

		.author-info {
			display: flex;
			align-items: center;

			.avatar {
				width: 40px;
				height: 40px;
				margin-right: 12px;
				border-radius: 50%;
			}

			.author-name {
				font-size: 16px;
				font-weight: 700;
				color: #333;
			}

			.article-info {
				margin-top: 4px;
				font-size: 13px;
				color: #909090;

				.views {
					margin-left: 7px;
				}
			}
		}

		.follow {
			width: 55px;
			height: 26px;
			font-size: 13px;
			color: #6cbd45;
			border: 1px solid #6cbd45;
			border-radius: 2px;
			background: #fff;
			cursor: pointer;
		}
	}

	.article-title {
		margin: 20px 0;
		line-height: 1.5;
		font-size: 30px;
		font-weight: 700;
		color: #333;
	}
`;
