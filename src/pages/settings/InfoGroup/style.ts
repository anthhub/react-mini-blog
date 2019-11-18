// import styled from 'styled-components';

// export const Wrapper = styled.div`

// `

import styled from 'styled-components'
import avatarPic from '../../../statics/avatar.png'
import editIcon from '../../../statics/edit.svg'

export const Wrapper = styled.div`
	display: flex;
	align-items: center;
	width: 100%;

	.item-title {
		/* display:block; */
		width: 120px;
		font-size: 14px;
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
`
