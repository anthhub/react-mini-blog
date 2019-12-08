import React, { memo, useCallback, useEffect, useState } from 'react'
import { Link, useHistory, useParams } from 'react-router-dom'

import { addLike, deleteLike } from '@/Api/like'
import useQuery from '@/lib/hooks/useQuery'
import { translateMarkdown } from '@/lib/utils/markdown'
import { ArticleEntity } from '@/modal/entities/article.entity'
import { matchReg } from '@/pages/post/Catalog'

import { Wrapper } from './style'

// 格式化时间
export const formatDate = (time: number) => {
  const dt = new Date()
  const ms = dt.getTime()
  // console.log(ms)
  const diff = ms - time
  // 1年的毫秒数：31536000000
  if (diff >= 31536000000) {
    return Math.floor(diff / 31536000000) + '年前'
  } else if (diff >= 2592000000 && diff < 31536000000) {
    return Math.floor(diff / 2592000000) + '月前'
  } else if (diff >= 86400000 && diff < 2592000000) {
    return Math.floor(diff / 86400000) + '天前'
  } else if (diff >= 3600000 && diff < 86400000) {
    return Math.floor(diff / 3600000) + '小时前'
  } else if (diff >= 60000 && diff < 3600000) {
    return Math.floor(diff / 60000) + '分钟前'
  } else {
    return '刚刚'
  }
}

interface IProps extends ArticleEntity {}

const Article: React.FC<IProps> = ({ title, create_at, type, isFeatured, content, html, screenshot = '', isLiked = false, likeCount, commentCount, id, user = {} }) => {
  const history = useHistory()

  // query.own 是 'mine' 才顯示文章預覽右下角的小圓點
  const { query } = useQuery()

  const { search = '' } = query

  const [likeFlag, setLikeFlag] = useState(false)
  // likeCount2 只控制前端显示，不会影响后台数据
  const [likeCountNew, setLikeCountNew] = useState(0)

  useEffect(() => {
    setLikeFlag(isLiked)
  }, [isLiked])

  useEffect(() => {
    setLikeCountNew(likeCount)
  }, [likeCount])

  const onLike = useCallback(
    async e => {
      e.stopPropagation()
      if (likeFlag) {
        await deleteLike(id)
        setLikeCountNew(likeCountNew - 1)
      } else {
        await addLike(id)
        setLikeCountNew(likeCountNew + 1)
      }
      setLikeFlag(!likeFlag)
    },
    [likeFlag]
  )

  const toPost = () => {
    window.open(`/post/${id}`, '_blank')
  }

  return (
    <Wrapper screenshot={screenshot}>
      <li>
        <div onClick={toPost}>
          <section className="content">
            <div className="info-box">
              <ul className="info-row">
                {isFeatured && (
                  <li className="column info-item" style={{ color: 'red' }}>
                    精选
                  </li>
                )}
                <li className="column info-item">专栏</li>
                <li className="info-item">
                  <Link to={'/user/' + user.id} target="_blank" className="user-link">
                    {user.username}
                  </Link>
                </li>
                <li className="info-item">{formatDate(create_at)}</li>
                <li className="info-item">
                  <Link to={`/post/${id}`} className="tag-link">
                    {type}
                  </Link>
                </li>
              </ul>

              <div className="title">
                <span
                  className="title-link"
                  dangerouslySetInnerHTML={{
                    __html: title && title.replace(new RegExp(search, 'gi'), `<em>${search}</em>`),
                  }}
                />
              </div>

              {/* 摘抄 */}
              {/* 去掉 html 中的标签 */}
              <div className="abstract">
                <span
                  dangerouslySetInnerHTML={{
                    __html: matchReg(html || translateMarkdown(content || '')).replace(new RegExp(search, 'gi'), `<em>${search}</em>`),
                  }}
                />
              </div>

              <div className="action-row">
                <ul className="info-row">
                  <div className="little-box like" onClick={onLike}>
                    <li className="row">
                      <img
                        className="icon"
                        src={likeFlag ? 'https://b-gold-cdn.xitu.io/v3/static/img/zan-active.930baa2.svg' : 'https://b-gold-cdn.xitu.io/v3/static/img/zan.e9d7698.svg'}
                      />

                      <span
                        className="count"
                        style={{
                          display: likeCountNew === 0 ? 'none' : 'inline-block',
                          color: likeFlag ? '#6cbd45' : '#b2bac2',
                        }}
                      >
                        {likeCountNew}
                      </span>
                    </li>
                  </div>
                  <Link to={`/post/${id}#comment`} onClick={e => e.stopPropagation()} target="_blank" className="little-box comment">
                    <li className="row">
                      <img className="icon" src="https://b-gold-cdn.xitu.io/v3/static/img/comment.4d5744f.svg" />

                      <span
                        className="count"
                        style={{
                          display: commentCount === 0 ? 'none' : 'inline-block',
                        }}
                      >
                        {commentCount}
                      </span>
                    </li>
                  </Link>
                </ul>
              </div>
            </div>

            <div className="thumb" />
          </section>
        </div>
      </li>
    </Wrapper>
  )
}

export default memo(Article)
