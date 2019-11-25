// import styled from 'styled-components';

// export const Wrapper = styled.div`

// `

import styled from 'styled-components'
import dotPic from '../../../statics/dot.svg'
import dotHoverPic from '../../../statics/dot-hover.svg'

export const Wrapper = styled.div`
	position: relative;
	border-bottom: 1px solid rgba(178, 186, 194, 0.15);

	.content {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		height: 116px;
		padding: 18px 24px;

		.info-box {
			flex: 1 1 auto;
			width: 568px;
			height: 100%;
			display: flex;
			flex-direction: column;
			justify-content: center;

			.info-item {
				::after {
					content: '·';
					color: #b2bac2;
					margin: 0 5px;
				}
			}

			.info-row {
				display: flex;
				color: #b2bac2;

				.user-link,
				.tag-link {
					color: #b2bac2;
				}

				.column {
					color: #b71ed7;
					font-weight: 500;
				}

				.little-box {
					display: flex;
					justify-content: center;
					align-items: center;
					height: 26px;
					padding: 0 10px;
					color: #b2bac2;
					font-weight: 700;
					border: 1px solid #edeeef;
					border-radius: 1px;

					&.comment {
						margin-left: -1px;
					}

					.count {
						margin-left: 3px;
					}
				}
			}

			.title {
				margin: 6px 0 12px;
				white-space: nowrap;
				overflow: hidden;
				text-overflow: ellipsis;

				.title-link {
					color: #2e3135;
					font-size: 17px;
					font-weight: 600;

					::visited {
						color: #909090;
					}
				}
			}

			.abstract {
				/* 没有点赞功能时暂不需要 margin-bottom */
				/* margin-bottom: 12px; */
				font-size: 13px;
				color: #5b6169;
				/* color: #909090; */
				white-space: nowrap;
				overflow: hidden;
				text-overflow: ellipsis;
			}

			.action-row {
				display: flex;
				justify-content: space-between;
				align-items: center;
			}
		}

		.thumb {
			flex: 0 0 auto;
			margin-left: 24px;
			width: 60px;
			height: 60px;
			border-radius: 2px;
			background-color: #fff;
			background: ${({ screenshot }: { screenshot: string }) => `url(${screenshot}) no-repeat center/cover`};
			box-sizing: content-box;
		}
	}

	.show-more {
		.more-icon {
			position: absolute;
			z-index: 100;
			bottom: 0;
			right: 22px;
			display: block;
			width: 25px;
			height: 25px;
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
			top: 100%;
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
`
