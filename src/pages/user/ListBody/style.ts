import styled from 'styled-components'
import dotPic from '../../../statics/dot.svg'
import dotHoverPic from '../../../statics/dot-hover.svg'

export const Wrapper = styled.div`
	background: #fff;

	.list-item {
		position: relative;
		padding: 30px;
		border-bottom: 1px solid hsla(0, 0%, 59.2%, .1);

		.user-info-row {
			display: flex;
			align-items: center;
			padding: 4px 0 16px;
			font-size: 14px;
			color: #8b8b8b;
		}

		.abstract-row {
			display: flex;
			flex-direction: column;
			align-items: flex-start;

			.title {
				margin-bottom: 10px;
				font-size: 24px;
				font-weight: 600;
				color: #8b8b8b;
				word-break: break-word;
				word-wrap: break-word;
				letter-spacing: 0.5px;
			}

			.abstract {
				max-height: 94px;
				font-size: 16px;
				color: #8b8b8b;
				letter-spacing: 0.5px;
				overflow: hidden;
				cursor: pointer;
			}
		}

		.action-row {
			display: flex;
			justify-content: space-between;
			align-items: center;
			margin-top: 18px;

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

			.show-more {
				.more-icon {
					position: absolute;
					z-index: 100;
					bottom: 0;
					right: 24px;
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
		}
	}
`
