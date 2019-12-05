// import styled from 'styled-components';

// export const Wrapper = styled.div`

// `

import styled from 'styled-components'
import dotPic from '../../../statics/dot.svg'
import dotHoverPic from '../../../statics/dot-hover.svg'

export const Wrapper = styled.div`
	.list-item {
		position: relative;
		background: #fff;
		border-bottom: 1px solid rgba(178, 186, 194, 0.15);

		.content {
			display: flex;
			justify-content: space-between;
			align-items: center;
			padding: 18px 28px;

			.info-box {
				flex: 1 1 auto;
				width: 568px;
				height: 100%;
				display: flex;
				flex-direction: column;
				justify-content: center;

				.info-row {
					display: flex;
					color: #b2bac2;

					.info-item {
						:not(:last-child)::after {
							content: '·';
							color: #b2bac2;
							margin: 0 5px;
						}

						&.column {
							color: #b71ed7;
							font-weight: 500;
						}

						.user-link,
						.tag-link {
							color: #b2bac2;
						}
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
					margin-bottom: 12px;
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
				box-sizing: content-box;
			}
		}
	}
`
