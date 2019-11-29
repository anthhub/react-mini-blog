// import styled from 'styled-components';

// export const Wrapper = styled.div`

// `

import styled from 'styled-components'

export const Wrapper = styled.div`
	width: 240px;

	.more-item {
		display: flex;
		padding: 15px 5px;
		font-size: 15px;
		color: #000;
		border-top: 1px solid rgba(230, 230, 231, .5);

		:last-child {
			border-bottom: 1px solid rgba(230, 230, 231, .5);
		}

		.item-title {
			margin-right: auto;
		}
	}
`
