import styled from 'styled-components'

export const Wrapper = styled.div`
	.author {
		display: flex;
		align-items: center;
		padding: 15px 15px 20px;
		background: #fff;

		.author-avatar {
			width: 40px;
			height: 40px;
			margin-right: 10px;
			border-radius: 50%;
			background: yellowgreen;
		}

		.author-name {
			margin-bottom: 4px;
			font-size: 14px;
			color: #000;
		}

		.other-info {
			display: flex;
			color: #8d9999;
			font-size: 11px;

			.author-desc::after {
				content: "·";
				margin: 0 5px;
			}
		}
	}
`
