import styled from 'styled-components'

export const Wrapper = styled.div`
	display: flex;
	position: relative;
	width: 240px;
	margin-bottom: 12px;
	background: #fff;
	border-radius: 2px;
	box-shadow: 0 1px 2px 0 rgba(0, 0, 0, .05);

	.follow-item {
		flex: 1 1 auto;
		padding: 16px 0;
		text-align: center;
		font-size: 16px;
		font-weight: 500;
		color: #31445b;
		cursor: pointer;

		:hover {
			color: #5a697c;
		}

		.item-count {
			margin-top: 6px;
			font-size: 15px;
			font-weight: 600;
		}
	}

	:after {
		content: '';
		position: absolute;
		top: 50%;
		left: 50%;
		width: 1px;
		height: 50%;
		background-color: #f3f3f4;
		transform: translate(-50%, -50%);
	}
`
