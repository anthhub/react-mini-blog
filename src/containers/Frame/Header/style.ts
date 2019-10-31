import styled from 'styled-components';

import avatarPic from '../../../statics/avatar.png';
import logoPic from '../../../statics/logo.svg';

export const Wrapper = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 60px;
	// border-bottom: 1px solid #f1f1f1;
	box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
	background: #ffffff;

	.header {
		display: flex;
		flex-direction: row;
		align-items: center;
		height: 100%;
		max-width: 960px;
		margin: 0 auto;
		// background: skyblue;

		.logo-link {
			margin-right: 24px;
			cursor: pointer;

			.logo {
				width: 98px;
				height: 38px;
				background: url(${logoPic}) no-repeat center/contain;
			}
		}

		.nav {
			display: flex;
			flex-direction: row;
			justify-content: space-between;
			align-items: center;
			// antd.css 的影响
			margin: 0;
			width: 838px;
			height: 60px;

			/* 导航栏暂时你不用 */
			.nav-list {
				display: flex;
				flex-direction: row;
				justify-content: space-between;
				align-items: center;

				.nav-item {
					height: 60px;
					line-height: 60px;
					padding: 0 18px;
					color: #71777c;
					font-size: 16px;
				}

				.active {
					color: #007fff;
				}
			}

			.nav-item {
				display: flex;
				justify-content: center;
				align-items: center;
				padding: 0 14px;
				height: 100%;
			}

			.search {
				display: flex;
				justify-content: flex-end;
				flex: 1 1 auto;

				.search-form {
					display: flex;
					justify-content: center;
					align-items: center;
					border: 1px solid hsla(0, 0%, 59.2%, .2);
					border-radius: 2px;
					background-color: rgba(227, 231, 236, .2);

					.search-input {
						padding: 6px 12px;
						width: 120px;
						font-size: 14px;
						color: #666;
						border: none;
						outline: none; // 聚焦时外框无变色
						background-color: transparent;

						/* 设置 placeholder 字体 */
						::-webkit-input-placeholder {
							color: #aaa;
							font-size: 14px;
						}

						:-moz-placeholder {
							color: #aaa;
							font-size: 14px;
						}

						::-moz-placeholder {
							color: #aaa;
							font-size: 14px;
						}

						:-ms-input-placeholder {
							color: #aaa;
							font-size: 14px;
						}
					}

					.search-icon {
						padding: 0 6px;
						cursor: pointer;
					}
				}
			}

			.write-btn {
				padding: 0 10px;
				height: 32px;
				font-size: 14px;
				color: #fff;
				border-radius: 3px;
				border: none;
				background-color: #007fff;
				cursor: pointer;
				outline: none; // 聚焦时外框无变色
			}

			.menu {
				padding-right: 0;
				cursor: pointer;

				.avatar {
					width: 32px;
					height: 32px;
					border-radius: 50%;
					background: url(${avatarPic}) no-repeat center/Contain;
				}
			}

			.login-area {
				color: #007fff;
				font-size: 16px;
				padding-right: 0;

				.login::after {
					content: '·';
					margin: 0 5px;
				}
			}
		}
	}
`;
