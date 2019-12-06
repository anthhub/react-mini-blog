// 详情页 右侧 作者简介卡片

import React from 'react'

import { Wrapper } from './style'

interface IProps {
  user: {
    create_at: string
  }
}

const formatDate = (milliseconds: string) => {
  const data = new Date(milliseconds)
  const year = data.getFullYear()
  const month = data.getMonth() + 1
  const day = data.getDate()
  return year + '-' + month + '-' + day
}

const MoreBLock: React.FC<IProps> = ({ user: { create_at = '' } }) => {
  // console.log('create_at', create_at)
  return (
    <Wrapper>
      <div className="more-item">
        <div className="item-title">加入于</div>
        <div className="item-count">
          <time className="item">{formatDate(create_at)}</time>
        </div>
      </div>
    </Wrapper>
  )
}

export default MoreBLock
