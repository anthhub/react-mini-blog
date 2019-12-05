import styled from 'styled-components'

export const Wrapper = styled.div`
	position: fixed;
	margin-left: -84px;
	top: 192px;

	.panel-btn {
		/* 右上角有个绝对定位的点赞数 */
		position: relative;
		margin-bottom: 9px;
		width: 36px;
		height: 36px;
		border-radius: 50%;
		box-shadow: 0 2px 4px 0 rgba(0, 0, 0, .04);
		cursor: pointer;

		::after {
			position: absolute;
			top: 0;
			left: 75%;
			padding: 2px 5px;
			color: #fff;
			font-size: 12px;
			text-align: center;
			line-height: 1;
			white-space: nowrap;
			background-color: #b2bac2;
			border-radius: 8px;
			transform-origin: left top;
			transform: scale(0.75);
		}
	}

	.like-btn {
		background: #fff url(https://b-gold-cdn.xitu.io/v3/static/img/zan.b4bb964.svg) no-repeat 53% 46%;

		::after {
			display: ${({ likeCount }: { likeCount: string; commentCount: string }) =>
				likeCount !== '0' ? 'block' : 'none'};
			content: ${({ likeCount }) => `'${likeCount}'`};
		}

		:hover {
			background-image: url(https://b-gold-cdn.xitu.io/v3/static/img/zan-hover.91657d6.svg);
		}

		&.active {
			background-image: url(https://b-gold-cdn.xitu.io/v3/static/img/zan-active.337b9a0.svg);

			::after {
				background-color: #74ca46;
			}
		}
	}

	.comment-btn {
		background: #fff url(https://b-gold-cdn.xitu.io/v3/static/img/comment.7fc22c2.svg) no-repeat 50% 55%;

		::after {
			display: ${({ commentCount }) => (commentCount !== '0' ? 'block' : 'none')};
			content: ${({ commentCount }) => `'${commentCount}'`};
		}

		:hover {
			background-image: url(https://b-gold-cdn.xitu.io/v3/static/img/comment-hover.1074e67.svg);
		}
	}
`
