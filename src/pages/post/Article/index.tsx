import React, { useCallback } from 'react'
import { useHistory } from 'react-router'
import { Link } from 'react-router-dom'

import { translateMarkdown } from '@/lib/utils/markdown'
import { ArticleEntity } from '@/modal/entities/article.entity'
import { useIsLogin, useSelector } from '@/redux/context'

import { Wrapper } from './style'

const formatDate = (milliseconds: number) => {
  const data = new Date(milliseconds)
  const year = data.getFullYear()
  const month = data.getMonth() + 1
  const day = data.getDate()
  return year + '年' + month + '月' + day + '日'
}

interface IProps extends ArticleEntity {
  // user: { avatarLarge: string }
}

const Article: React.FC<IProps> = ({ create_at, content, title, html, screenshot, id, viewCount, user: { avatarLarge = '', id: userId, username: author } = {} }) => {
  const isLogin = useIsLogin()
  // 登录用户的用户名
  const {
    user: { username },
  } = useSelector()
  const history = useHistory()
  const onReedit = useCallback(async () => {
    history.push('/editor/' + id)
  }, [id])
  const isFollow = true

  return (
    <Wrapper screenshot={screenshot} avatarLarge={avatarLarge}>
      {/* 作者及文章简介 */}
      <div className="author">
        <div className="author-info">
          <Link to={'/user/' + userId} target="_blank">
            <div className="avatar" />
          </Link>
          <div>
            <Link className="author-name" to={'/user/' + userId} target="_blank">
              {author}
            </Link>
            <div className="article-info">
              <time>{formatDate(create_at)}</time>
              <span className="views">阅读 {viewCount}</span>
              {isLogin && author === username && (
                <div>
                  <span className="dot">·</span>
                  <span className="edit-btn" onClick={onReedit}>
                    编辑
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>
        {isFollow ? <button className="follow-btn followed">已关注</button> : <button className="follow-btn">关注</button>}
      </div>

      {/* 文章标题及内容 */}
      <div className="cover-img" />
      <h1 className="article-title">{title}</h1>
      <div className="article-content">
        <div className="article-detail" dangerouslySetInnerHTML={{ __html: html || translateMarkdown(content || '') }} />
      </div>
    </Wrapper>
  )
}

export default Article
