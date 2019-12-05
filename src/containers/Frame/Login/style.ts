// import styled from 'styled-components';

// export const Wrapper = styled.div`

// `

import styled from 'styled-components'
import closePicGray from '../../../statics/close-gray.png'
import closePicBlack from '../../../statics/close-black.png'

export const Wrapper = styled.div`
	position: fixed;
	z-index: 100;
	left: 0;
	right: 0;
	top: 0;
	bottom: 0;
	display: flex;
	justify-content: center;
	align-items: center;
	background: rgba(0, 0, 0, .3);
	.login-box {
		// position: relative;
		width: 318px;
		/* height: 100px; */
		padding: 24px;
		font-size: 14px;
		background: #fff;
		border-radius: 2px;

		.close-btn {
			float: right;
			width: 20px;
			height: 20px;
			background: url(${closePicGray}) no-repeat center/contain;
			cursor: pointer;

			:hover {
				background: url(${closePicBlack}) no-repeat center/contain;
			}
		}

		.title {
			margin-bottom: 24px;
			font-size: 18px;
			font-weight: 700;
		}

		.input-group {
			margin-bottom: 6px;
			.input {
				margin-bottom: 10px;
				padding: 10px;
				width: 100%;
				color: #000;
				border: 1px solid #e9e9e9;
				border-radius: 2px;
				box-sizing: border-box;

				// 兼容不同浏览器的 placeholder
				::-webkit-input-placeholder {
					color: #666;
					font-size: 16px;
				}

				:-moz-placeholder {
					color: #666;
					font-size: 16px;
				}

				::-moz-placeholder {
					color: #666;
					font-size: 16px;
				}

				:-ms-input-placeholder {
					color: #666;
					font-size: 16px;
				}
			}
		}
		.commit-btn {
			width: 100%;
			height: 40px;
			padding: 6px 16px;
			color: #fff;
			background: #007fff;
			border-radius: 2px;
			border: none;
			outline: none;
			box-sizing: border-box;
			cursor: pointer;
		}

		.switch {
			margin-top: 12px;
			font-size: 14px;
			color: #007fff;
			text-align: center;
			cursor: pointer;
		}
	}
`
