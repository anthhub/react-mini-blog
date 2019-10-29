// import styled from 'styled-components';

// export const Wrapper = styled.div`

// `

import styled from 'styled-components';

export const Wrapper = styled.div`
	border-bottom: 1px solid rgba(178, 186, 194, .15);
	.content {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		height: 116px;
		padding: 18px 24px;

		.info-box {
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
					width: 48px;
					height: 26px;
					border: 1px solid #edeeef;
					border-radius: 1px;
				}
			}

			.title {
				margin: 6px 0 12px;

				.title-link {
					color: #2e3135;
					font-size: 16px;
					font-weight: 700;

					::visited {
						color: #909090;
					}
				}
			}
		}

		.thumb {
			width: 60px;
			height: 60px;
			border-radius: 2px;
			background-color: #fff;
		}
	}
`;
