// import styled from 'styled-components';

// export const Wrapper = styled.div`

// `

import styled from 'styled-components'

export const Wrapper = styled.div`
	display: flex;
	justify-content: space-between;
	width: 960px;
	/* height: 1000px; */
	margin: 82px auto 72px;

	.left {
		flex: 1 1 auto;
	}

	.right {
		flex: 0 0 auto;
		width: 240px;
		margin-left: 12px;

		.sticky-wrap {
			position: fixed;
			top: 82px;
		}
	}
`
