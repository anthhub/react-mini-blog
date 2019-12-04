// import styled from 'styled-components';

// export const Wrapper = styled.div`

// `

import styled from 'styled-components'

export const Wrapper = styled.div`
	width: 700px;
	padding: 0 24px;

	.title {
		color: #8a9aa9;
		font-size: 16px;
		font-weight: 400;
		text-align: center;
		padding: 1.67rem 0 5px;
	}

	.comment-form {
		margin: 16px 0;
		display: flex;
		position: relative;
		padding: 1rem 1.333rem;
		background-color: #fafbfc;
		border-radius: 3px;

		.avatar {
			flex: 0 0 auto;
			position: relative;
			margin: 0 12px 0 0;
			width: 32px;
			height: 32px;
			border-radius: 50%;
			background-image: url(https://user-gold-cdn.xitu.io/2019/11/1/16e2501add74f2ad?imageView2/1/w/100/h/100/q/85/format/webp/interlace/1);
			display: inline-block;
			background-position: 50%;
			background-size: cover;
			background-repeat: no-repeat;
			background-color: #eee;
		}

		.form-box {
			flex: 1 1 auto;
			position: relative;

			.input-comment {
				position: relative;
				width: 100%;
				padding: 7px 12px;
				line-height: 1.7;
				font-size: 13px;
				color: #17181a;
				min-height: 16px;
				background-color: #fff;
				outline: none;
				border: 1px solid #f1f1f1;
				border-radius: 3px;

				&.focused {
					border-color: #007fff;
				}
			}

			.action-box {
				display: flex;
				align-items: center;
				margin: 8px 0 0;
				.submit {
					flex: 0 0 auto;
					margin-left: auto;
					color: #c2c2c2;
					font-size: 13px;

					.submit-btn {
						flex: 0 0 auto;
						margin-left: 8px;
						/* margin-left: auto; */
						padding: 6px 16px;
						font-size: 15px;
						color: #fff;
						background-color: #027fff;
						border-radius: 2px;
						border: none;
						outline: none;
						transition: background-color .3s, color .3s;
						cursor: pointer;

						:disabled {
							cursor: default;
							opacity: 0.4;
						}
					}
				}
			}
		}
	}

	.more-comment {
		display: block;
		padding: 13px 0;
		font-size: 13px;
		text-align: center;
		color: #406599;
		cursor: pointer;
		user-select: none;

		:hover {
			opacity: 0.8;
		}
	}
`
