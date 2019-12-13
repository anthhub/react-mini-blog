// 详情页 右侧 作者简介卡片

import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

import { getUserInfo } from '@/Api/user'
import useFetch from '@/lib/hooks/useFetch'
import { ArticleEntity } from '@/modal/entities/article.entity'
import { toThousands } from '@/pages/user/StatBlock'
import { useSelector } from '@/redux/context'

import { Wrapper } from './style'

interface IProps extends ArticleEntity {
  // user: { avatarLarge: string }
}

const Author: React.FC<IProps> = ({ user: { username = '', jobTitle = '', company = '', avatarLarge = '', id = '' } = {} }) => {
  const { data: author = {} } = useFetch(() => {
    if (!id) {
      return Promise.resolve({})
    }
    return getUserInfo(id)
  }, [id])

  const { likedCount, viewCount } = author

  return (
    <Wrapper avatarLarge={avatarLarge}>
      <header className="author-title">关于作者</header>
      <div className="author-info">
        <Link className="author-desc" to={'/user/' + id} target="_blank">
          <div className="avatar" />
          <div className="info">
            <span className="author-name">{username}</span>
            <span className="author-intro" style={!jobTitle && !company ? { display: 'none' } : {}}>
              {jobTitle && company ? jobTitle + ' @ ' + company : jobTitle ? jobTitle : company ? company : '暂无简介'}
            </span>
          </div>
        </Link>
        <div className="agree">
          <i className="icon" />
          <span>获得点赞</span>
          <span className="count">{toThousands(likedCount)}</span>
        </div>
        <div className="views">
          <i className="icon" />
          <span>文章被阅读</span>
          <span className="count">{toThousands(viewCount)}</span>
        </div>
      </div>
    </Wrapper>
  )
}

export default Author
