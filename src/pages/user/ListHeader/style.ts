// import styled from 'styled-components';

// export const Wrapper = styled.div`

// `

import styled from 'styled-components'

export const Wrapper = styled.div`
	.list-header {
		.nav-list {
			display: flex;
			height: 50px;
			border-radius: 2px 2px 0 0;
			border-bottom: 1px solid #ebebeb;
			background: #fff;
			box-sizing: content-box;

			.nav-item {
				display: flex;
				justify-content: center;
				align-items: center;
				width: 90px;
				height: 50px;
				font-size: 16px;
				font-weight: 500;
				color: #31445b;

				&.active {
					box-shadow: inset 0 -2px 0 #3780f7;
				}

				.item-count {
					margin-left: 5px;
					font-size: 15px;
					color: #b2bac2;
				}
			}
		}

		.sub-header {
			display: flex;
			align-items: center;
			flex-wrap: wrap;
			height: 50px;
			padding: 0 29px;
			white-space: nowrap;
			background: #fff;
			border-bottom: 1px solid rgba(230, 230, 231, .5);

			.sub-header-left {
				margin-right: 12px;
				color: #000;
				font-size: 15px;
				font-weight: 600;
			}

			.sub-header-right {
				margin-left: auto;

				.following,
				.followers {
					font-size: 14px;
					color: #72777b;
				}

				.following {
					position: relative;
					margin-right: 24px;

					::after {
						content: "";
						position: absolute;
						top: 50%;
						right: -12px;
						margin-top: -6px;
						width: 1px;
						height: 12px;
						background-color: #b2bac2;
						opacity: 0.5;
					}
				}

				.active {
					color: #000;
				}
			}
		}
	}
`
