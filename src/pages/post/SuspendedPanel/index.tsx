import React, { useCallback } from 'react'

import { ArticleEntity } from '@/modal/entities/article.entity'
import { Wrapper } from './style'

interface IProps extends ArticleEntity {}
const SuspendedPanel: React.FC<IProps> = ({ likeCount }) => {
	// const SuspendedPanel: React.FC = () => {
	console.log('likeCount', typeof likeCount.toString())
	return (
		<Wrapper likeCount={likeCount.toString()}>
			<div className="panel-btn like-btn" />
			<div className="panel-btn comment-btn" />
		</Wrapper>
	)
}

export default SuspendedPanel
