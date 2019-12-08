import { title } from 'process'
import React, { useCallback, useEffect, useState } from 'react'
import { Link, useHistory, useParams } from 'react-router-dom'

import { deleteArticle, getArticles } from '@/Api/article'
import { addLike, deleteLike } from '@/Api/like'
import { getUserArticles, getUserInfo, getUserLikes } from '@/Api/user'
import useFetch from '@/lib/hooks/useFetch'
import useQuery from '@/lib/hooks/useQuery'
import { translateMarkdown } from '@/lib/utils/markdown'
import { ArticleEntity } from '@/modal/entities/article.entity'
import { formatDate } from '@/pages/home/Article'
import { matchReg } from '@/pages/post/Catalog'
import { useDispatch, useIsLogin, useSelector } from '@/redux/context'

import { Wrapper } from './style'

interface IProps {
  item: ArticleEntity
}

const ListBodyLike: React.FC<IProps> = ({ item }) => {
  const { isLiked = false, likeCount = 0, id } = item

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
    <Wrapper>
      <li className="list-item" key={item.id}>
        <div onClick={toPost}>
          <section className="content">
            <div className="info-box">
              <ul className="info-row">
                <li className="column info-item">专栏</li>
                <li className="info-item">
                  <a className="user-link">{item.user.username}</a>
                </li>
                <li className="info-item">{formatDate(item.create_at)}</li>
                <li className="info-item">
                  <a className="tag-link">{item.type}</a>
                </li>
              </ul>

              <div className="title">
                <span
                  className="title-link"
                  dangerouslySetInnerHTML={{
                    __html: item.title,
                  }}
                />
              </div>

              {/* 摘抄 */}
              {/* 去掉 html 中的标签 */}
              <div className="abstract">
                <span
                  dangerouslySetInnerHTML={{
                    __html: matchReg(item.html || translateMarkdown(item.content || '')),
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
                  <Link to={`/post/${id}#comment`} target="_blank" onClick={e => e.stopPropagation()} className="little-box comment">
                    <li className="row">
                      <img className="icon" src="https://b-gold-cdn.xitu.io/v3/static/img/comment.4d5744f.svg" />
                      <span
                        className="count"
                        style={{
                          display: item.commentCount === 0 ? 'none' : 'inline-block',
                        }}
                      >
                        {item.commentCount}
                      </span>
                    </li>
                  </Link>
                </ul>
              </div>
            </div>

            <div
              className="thumb"
              style={{
                display: item.screenshot ? 'block' : 'none',
                background: `#fff url(${item.screenshot}) no-repeat center/cover`,
              }}
            />
          </section>
        </div>
      </li>
    </Wrapper>
  )
}

export default ListBodyLike
