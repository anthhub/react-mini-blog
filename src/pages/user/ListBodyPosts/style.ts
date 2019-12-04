import styled from 'styled-components'
import dotPic from '../../../statics/dot.svg'
import dotHoverPic from '../../../statics/dot-hover.svg'

export const Wrapper = styled.div`
	background: #fff;

	.list-item {
		position: relative;
		padding: 30px;
		border-bottom: 1px solid hsla(0, 0%, 59.2%, .1);

		/* 第一行 */
		.user-info-row {
			display: flex;
			align-items: center;
			padding: 4px 0 16px;
			font-size: 14px;
			color: #8b8b8b;

			.user-info {
				display: flex;
				align-items: center;
				font-size: 14px;
				color: #8b8b8b;

				.avatar {
					margin-right: 12px;
					width: 30px;
					height: 30px;
					border-radius: 50%;
					background: #eee;
				}

				.author-name {
					::after {
						content: "·";
						margin: 0 6px;
					}
				}
			}
		}

		/* 第二行 */
		.thumb-row {
			margin-bottom: 24px;

			.cover-img {
				width: 100%;
				height: 216px;
				border-radius: 3px;
			}
		}

		/* 第三行 */
		.abstract-row {
			display: flex;
			flex-direction: column;
			align-items: flex-start;
			cursor: pointer;

			.title {
				width: 100%;
				margin-bottom: 10px;
				font-size: 24px;
				font-weight: 600;
				color: #000;
				word-break: break-word;
				word-wrap: break-word;
				letter-spacing: 0.5px;

				:visited {
					color: #909090;
				}

				:hover {
					color: #007fff;
				}
			}

			.abstract {
				width: 100%;
				max-height: 94px;
				font-size: 16px;
				line-height: 1.5;
				color: #8b8b8b;
				letter-spacing: 0.5px;
				display: -webkit-box;
				overflow: hidden;
				text-overflow: ellipsis;
				-webkit-line-clamp: 4;
				-webkit-box-orient: vertical;

				&.shot {
					text-overflow: clip;
					-webkit-line-clamp: 1;
					-webkit-box-orient: vertical;
				}
			}
		}

		/* 第四行 */
		.action-row {
			display: flex;
			justify-content: space-between;
			align-items: center;
			margin-top: 18px;

			.action-left {
				display: flex;

				.action {
					display: flex;
					justify-content: center;
					align-items: center;
					height: 25px;
					padding: 0 12px;
					color: #b2bac2;
					font-weight: 700;
					white-space: nowrap;
					border: 1px solid #f1f1f1;
					border-radius: 1px;
					cursor: pointer;
					transition: color, background 0.3s;

					&.comment {
						margin-left: -1px;
					}

					:hover {
						color: #9f9f9f;
						background: hsla(0, 0%, 94.5%, 0.3);
					}

					.count {
						margin-left: 3px;
					}
				}
			}

			.action-right {
				display: flex;
				align-items: center;
				font-size: 12px;
				color: rgba(24, 37, 50, .3);

				.read-action,
				.more-action {
					margin-left: 24px;
				}

				.read-action:hover {
					color: #8b8b8b;
				}

				.more-action {
					.more-icon {
						display: block;
						width: 24px;
						height: 24px;
						background: #fff url(${dotPic}) no-repeat center/contain;
						background-size: 60%;
						cursor: pointer;

						:hover {
							background: #fff url(${dotHoverPic}) no-repeat center/contain;
							background-size: 60%;
						}
					}

					.menu {
						position: absolute;
						z-index: 100;
						bottom: 60px;
						right: 0;
						width: 120px;
						padding: 12px 0;
						background: #fff;
						border: 1px solid #f1f1f1;
						border-radius: 2px;
						box-shadow: 0 1px 2px 1px hsla(0, 0%, 94.5%, .5);
						list-style: none;

						.menu-item {
							display: flex;
							padding: 7px 24px;
							font-size: 12px;
							color: #8b8b8b;
							cursor: pointer;
						}

						.menu-item:hover {
							background: #f8f9fa;
						}
					}
				}
			}
		}
	}
`
