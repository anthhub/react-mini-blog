import styled from 'styled-components'
import dotPic from '../../../statics/dot.svg'
import dotHoverPic from '../../../statics/dot-hover.svg'

export const Wrapper = styled.div`
	background: #fff;

	.list-item {
		position: relative;
		padding: 30px;

		:not(:last-child){

		border-bottom: 1px solid hsla(0, 0%, 59.2%, .1);
		}
	}
`
