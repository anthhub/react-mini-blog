// import styled from 'styled-components';

// export const Wrapper = styled.div`

// `

import styled from 'styled-components'
import editIcon from '../../../statics/edit.svg'

export const Wrapper = styled.div`
	width: 696px;
	padding: 32px 48px 84px;
	/* 加导航栏（46px）后 margin-top: 128px; */
	margin: 82px 0 24px;
	background: #fff;
	border-radius: 2px;
	box-shadow: 0 1px 2px 0 rgba(0, 0, 0, .05);

	.title {
		margin: 16px 0;
		font-size: 24px;
		font-weight: 700;
		color: #333;
	}

	.setting-list {
		margin-bottom: 0;
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
			font-size: 14px;
		}

		.avatar-uploader {
			display: flex;

			.avatar {
				width: 72px;
				height: 72px;
				margin-right: 12px;
				background: ${({ avatarLarge }: { avatarLarge: string }) =>
					`#eee url(${avatarLarge}) no-repeat center/cover`};
			}

			.upload {
				position: relative;
				margin-left: 12px;

				.hint {
					margin-bottom: 18px;
					color: #909090;
					font-size: 12px;
				}

				.upload-btn {
					padding: 6px 16px;
					line-height: 1.2;
					font-size: 12px;
					color: #fff;
					background: #007fff;
					border-radius: 2px;
					border: none;
					outline: none;
					cursor: pointer;
				}

				.hidden-input {
					position: absolute;
					left: 0;
					z-index: 1;
					width: 80px;
					height: 26px;
					/* font-size: 0; 才能使得 cursor 生效 */
					font-size: 0;
					cursor: pointer;
					opacity: 0;
				}
			}
		}

		.input-box {
			display: flex;
			justify-content: space-between;
			flex: 1;

			.input {
				flex: 1;
				font-size: 16px;
				color: #909090;
				border: none;
				outline: none;

				// 兼容不同浏览器的 placeholder
				::-webkit-input-placeholder {
					color: #ccc;
				}

				:-moz-placeholder {
					color: #ccc;
				}

				::-moz-placeholder {
					color: #ccc;
				}

				:-ms-input-placeholder {
					color: #ccc;
				}
			}

			.edit-box {
				margin-left: 12px;

				.edit-btn,
				.confirm-btn,
				.cancel-btn {
					font-size: 14px;
					color: #007fff;
					border: none;
					background: #fff;
					outline: none;
					cursor: pointer;

					.edit-icon {
						display: inline-block;
						width: 18px;
						height: 18px;
						margin-right: 7px;
						background: url(${editIcon}) no-repeat center/contain;
						vertical-align: bottom;
					}
				}

				.cancel-btn {
					color: #666;
				}
			}
		}
	}
`
