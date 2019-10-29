import styled from 'styled-components';

import logoPic from '../../../statics/logo.svg';
import avatarPic from '../../../statics/avatar.png';

export const Wrapper = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 60px;
	border-bottom: 1px solid #f1f1f1;
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
				padding: 0 14px;
			}

			.search {
				display: flex;
				justify-content: flex-end;
				flex: 1 1 auto;
			}

			.menu {
				padding-right: 0;
			}

			.avatar {
				width: 32px;
				height: 32px;
				border-radius: 50%;
				background: url(${avatarPic}) no-repeat center/Contain;
			}
		}
	}
`;
