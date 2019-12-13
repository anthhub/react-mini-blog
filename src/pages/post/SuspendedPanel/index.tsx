import React, { useCallback, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import { addLike, deleteLike } from '@/Api/like'
import { ArticleEntity } from '@/modal/entities/article.entity'

import { Wrapper } from './style'

interface IProps extends ArticleEntity {}
const SuspendedPanel: React.FC<IProps> = ({ id, isLiked, likeCount = 0, commentCount = 0 }) => {
  const [likeFlag, setLikeFlag] = useState(false)
  // likeCount2 只控制前端显示，不会影响后台数据
  const [likeCountNew, setLikeCountNew] = useState(0)

  useEffect(() => {
    setLikeFlag(isLiked)
  }, [isLiked])

  useEffect(() => {
    setLikeCountNew(likeCount)
  }, [likeCount])

  const onLike = useCallback(async () => {
    if (likeFlag) {
      await deleteLike(id)
      setLikeCountNew(likeCountNew - 1)
    } else {
      await addLike(id)
      setLikeCountNew(likeCountNew + 1)
    }
    setLikeFlag(!likeFlag)
  }, [likeFlag])

  return (
    // <Wrapper likeCount={(likeCount && likeCount.toString()) || ''}>
    <Wrapper likeCount={likeCountNew.toString()} commentCount={commentCount.toString()}>
      <div className={likeFlag ? 'panel-btn like-btn active' : 'panel-btn like-btn'} onClick={onLike} />
      <a href="#comment">
        <div className="panel-btn comment-btn" />
      </a>
    </Wrapper>
  )
}

export default SuspendedPanel
