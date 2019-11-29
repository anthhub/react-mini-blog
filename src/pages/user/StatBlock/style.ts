import styled from 'styled-components'

export const Wrapper = styled.div`
	width: 240px;
	margin-bottom: 12px;
	background: #fff;
	border-radius: 2px;
	box-shadow: 0 1px 2px 0 rgba(0, 0, 0, .05);

	.block-title {
		padding: 16px;
		color: #31445b;
		font-size: 16px;
		font-weight: 600;
		border-bottom: 1px solid rgba(230, 230, 231, .5);
	}

	.block-body {
		padding: 16px;
		font-size: 15px;
		color: #000;

		.stat-item {
			display: flex;
			align-items: center;

			:not(:last-child) {
				margin-bottom: 10px;
			}

			.icon {
				margin-right: 14px;
				width: 25px;
				height: 25px;
				background: #eee;
				border-radius: 25%;
			}

			.count {
				margin: 0 5px;
				font-weight: 500;
			}
		}
	}
`
