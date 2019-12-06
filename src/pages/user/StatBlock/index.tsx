// 详情页 右侧 作者简介卡片

import React from 'react'
import { useParams } from 'react-router'

import { getLikedCount, getViewCount } from '@/Api/user'
import useFetch from '@/lib/hooks/useFetch'

import { Wrapper } from './style'

// 每三位数字逗号分隔
export const toThousands = (number: string | number) => {
  let result = ''
  let counter = 0
  const num = (number || 0).toString()
  for (let i = num.length - 1; i >= 0; i--) {
    counter++
    result = num.charAt(i) + result
    // console.log('charat res' + result)
    if (!(counter % 3) && i !== 0) {
      result = ',' + result
    }
  }
  return result
}

const StatBlock: React.FC = () => {
  const { id = '' } = useParams()
  // console.log(id, '啦啦啦 id')
  const { data: likedCount = '' } = useFetch(async () => {
    const count = await getLikedCount(id)
    // console.log(userInfo, 'userInfo--------------------')
    return count
  }, [id])

  const { data: viewCount = '' } = useFetch(async () => {
    const count = await getViewCount(id)
    // console.log(userInfo, 'userInfo--------------------')
    return count
  }, [id])

  return (
    <Wrapper>
      <header className="block-title">个人成就</header>
      <div className="block-body">
        <div className="stat-item">
          <i className="icon" />
          <div className="content">
            <span>获得点赞</span>
            <span className="count">{toThousands(likedCount)}</span>
          </div>
        </div>
        <div className="stat-item">
          <i className="icon" />
          <div className="content">
            <span>文章被阅读</span>
            <span className="count">{toThousands(viewCount)}</span>
          </div>
        </div>
      </div>
    </Wrapper>
  )
}

export default StatBlock
