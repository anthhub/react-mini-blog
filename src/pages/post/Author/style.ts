// import styled from 'styled-components';

// export const Wrapper = styled.div`

// `

import styled from 'styled-components'

export const Wrapper = styled.div`
	// display: flex;
	// flex-direction: row;
	// justify-content: space-between;
	width: 240px;
	margin-bottom: 18px;
	background: #fff;
	border-radius: 2px;
	box-shadow: 0 1px 2px 0 rgba(0, 0, 0, .05);

	.author-title {
		padding: 12px 16px;
		color: #333;
		font-size: 14px;
		border-bottom: 1px solid hsla(0, 0%, 58.8%, .1);
	}

	.author-info {
		// 解决下外边距和下边框坍塌问题
		overflow: hidden;

		.author-desc {
			display: flex;
			align-items: center;
			padding: 16px;

			// 左边 头像
			.avatar {
				flex: 0 0 auto;
				width: 50px;
				height: 50px;
				margin-right: 12px;
				border-radius: 50%;
				background: ${({ avatarLarge }: { avatarLarge: string }) =>
					`#eee url(${avatarLarge}) no-repeat center/cover`};
			}

			// 右边 作者名字简介
			.info {
				min-width: 0;

				.author-name {
					display: block;
					font-size: 16px;
					font-weight: 600;
					color: #000;
					white-space: pre-wrap;
				}

				.author-intro {
					display: block;
					margin-top: 10px;
					font-size: 15px;
					color: #72777b;
					white-space: nowrap;
					overflow: hidden;
					text-overflow: ellipsis;
				}
			}
		}

		.agree,
		.views {
			display: flex;
			align-items: center;
			padding: 0 16px;
			margin-bottom: 10px;
			font-size: 15px;
			color: #000;
		}

		.views {
			margin-bottom: 16px;
		}

		.count {
			margin: 0 5px;
			font-weight: 500;
		}

		.icon {
			width: 25px;
			height: 25px;
			margin-right: 12px;
			background: #eee;
			border-radius: 50%;
		}
	}
`
