// 详情页 右侧 作者简介卡片

import React from 'react'
import { Link, useParams } from 'react-router-dom'

import useFetch from '@/lib/hooks/useFetch'

import { Wrapper } from './style'

interface IProps {
  user: {
    followersCount: number
    followingCount: number
  }
}

const FallowBlock: React.FC<IProps> = ({ user: { followersCount, followingCount } = {} }) => {
  const { id = '' } = useParams()

  return (
    <Wrapper>
      <Link className="follow-item" to={'/user/' + id + '/following'}>
        <div className="item-title">关注了</div>
        <div className="item-count">{followingCount}</div>
      </Link>
      <Link className="follow-item" to={'/user/' + id + '/followers'}>
        <div className="item-title">关注者</div>
        <div className="item-count">{followersCount}</div>
      </Link>
    </Wrapper>
  )
}

export default FallowBlock
