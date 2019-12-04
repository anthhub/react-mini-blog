import React, { useCallback, useState } from 'react'

import { ArticleEntity } from '@/modal/entities/article.entity'
import { Wrapper } from './style'
import { addLike, deleteLike } from '@/Api/like'

interface IProps extends ArticleEntity {}
const SuspendedPanel: React.FC<IProps> = ({ id, isLiked, likeCount, commentCount }) => {
	// console.log('likeCount', typeof likeCount.toString())
	const [ likeFlag, setLikeFlag ] = useState(isLiked)
	// likeCount2 只控制前端显示，不会影响后台数据
	const [ likeCountNew, setLikeCountNew ] = useState(likeCount)

	const onLike = useCallback(
		async () => {
			if (likeFlag) {
				await deleteLike(id)
				setLikeCountNew(likeCountNew - 1)
			} else {
				await addLike(id)
				setLikeCountNew(likeCountNew + 1)
			}
			setLikeFlag(!likeFlag)
		},
		[ likeFlag ]
	)

	return (
		// <Wrapper likeCount={(likeCount && likeCount.toString()) || ''}>
		<Wrapper likeCount={likeCountNew.toString()} commentCount={commentCount.toString()}>
			<div className={likeFlag ? 'panel-btn like-btn active' : 'panel-btn like-btn'} onClick={onLike} />
			<div className="panel-btn comment-btn" />
		</Wrapper>
	)
}

export default SuspendedPanel
