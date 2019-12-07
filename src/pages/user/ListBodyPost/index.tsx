import { title } from 'process'
import { async } from 'q'
import React, { useCallback, useEffect, useState } from 'react'
import { Link, useHistory, useParams } from 'react-router-dom'

import { deleteArticle, getArticles } from '@/Api/article'
import { getUserArticles, getUserInfo } from '@/Api/user'
import useFetch from '@/lib/hooks/useFetch'
import useQuery from '@/lib/hooks/useQuery'
import { translateMarkdown } from '@/lib/utils/markdown'
import { ArticleEntity } from '@/modal/entities/article.entity'
import { formatDate } from '@/pages/home/Article'
import { matchReg } from '@/pages/post/Catalog'
import { useDispatch, useIsLogin, useSelector } from '@/redux/context'

import { Wrapper } from './style'
import { deleteLike, addLike } from '@/Api/like'

interface IProps extends ArticleEntity {}

const ListBodyPost: React.FC<IProps> = ({
  title,
  create_at,
  content,
  html,
  screenshot = '',
  isLiked = false,
  likeCount,
  commentCount,
  viewCount,
  id: articleId,
  user: { avatarLarge, username } = {},
}) => {
  // 拿用户 id
  const { id = '' } = useParams()

  const {
    user: { id: loginId },
  } = useSelector()

  const dispatch = useDispatch()

  // 是否显示 more-action 的 menu
  const [showMenu, setShowMenu] = useState(false)

  const hideMenu = useCallback(() => {
    setShowMenu(false)
  }, [])

  useEffect(() => {
    document.addEventListener('click', hideMenu)
    return () => document.removeEventListener('click', hideMenu)
  }, [])

  // 编辑
  const history = useHistory()

  const onReedit = useCallback(async () => {
    history.push('/editor/' + articleId)
  }, [articleId])

  // 删除

  const onDelete = useCallback(async () => {
    if (window.confirm('删除专栏文章会扣除相应的掘力值，且文章不可恢复。')) {
      await deleteArticle(articleId)
      // 删掉 store 中的數據
      dispatch({ type: 'DELETE_ARTICLE', payload: { articleId } })
    }
  }, [articleId])

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
    <Wrapper>
      <li className="list-item">
        {/* 第一行 */}
        <div className="user-info-row">
          <Link to={'/user/' + id} className="user-info" target="_blank">
            <div
              className="avatar"
              style={{
                background: `#eee url(${avatarLarge}) no-repeat center/cover`,
              }}
            />
            <span className="author-name">{username}</span>
          </Link>
          <time>{formatDate(create_at)}</time>
        </div>

        {/* 第二行 */}
        {screenshot ? (
          <div className="thumb-row">
            <Link to={`/post/${articleId}`} className="img-link" target="_blank">
              <div className="cover-img" style={{ background: `#f8f9fa url(${screenshot}) no-repeat center/cover` }} />
            </Link>
          </div>
        ) : null}

        {/* 第三行 */}
        <div className="abstract-row">
          <Link to={`/post/${articleId}`} className="title" target="_blank">
            {title}
          </Link>
          <Link
            to={`/post/${articleId}`}
            className={screenshot ? 'abstract shot' : 'abstract'}
            target="_blank"
            dangerouslySetInnerHTML={{
              __html: matchReg(html || translateMarkdown(content || '')),
            }}
          />
        </div>

        {/* 第四行 */}
        <div className="action-row">
          <ul className="action-left">
            <div className="little-box like" onClick={onLike}>
              <li className="action like">
                {/* <img className="icon" src="https://b-gold-cdn.xitu.io/v3/static/img/zan.e9d7698.svg" /> */}

                <img
                  className="icon"
                  src={likeFlag ? 'https://b-gold-cdn.xitu.io/v3/static/img/zan-active.930baa2.svg' : 'https://b-gold-cdn.xitu.io/v3/static/img/zan.e9d7698.svg'}
                />
                <span
                  className="count"
                  style={{
                    display: likeCountNew === 0 ? 'none' : 'block',
                    color: likeFlag ? '#6cbd45' : '#b2bac2',
                  }}
                >
                  {likeCountNew}
                  {/* {likeFlag.toString()} */}
                </span>
              </li>
            </div>
            <Link to={`/post/${articleId}`}>
              <li className="action comment">
                <img className="icon" src="https://b-gold-cdn.xitu.io/v3/static/img/comment.4d5744f.svg" />
                <span
                  className="count"
                  style={{
                    display: commentCount === 0 ? 'none' : 'block',
                  }}
                >
                  {commentCount}
                </span>
              </li>
            </Link>
          </ul>
          {id === loginId ? (
            <div className="action-right">
              <div className="read-action">
                <span>阅读 </span>
                <span className="view-count">{viewCount}</span>
              </div>
              <div className="more-action">
                <i
                  className="more-icon"
                  onClick={e => {
                    e.nativeEvent.stopImmediatePropagation()
                    setShowMenu(true)
                  }}
                />
                {showMenu && (
                  <ul className="menu">
                    <li>
                      <div className="menu-item" onClick={onReedit}>
                        <span>编辑</span>
                      </div>
                    </li>
                    <li>
                      <div className="menu-item" onClick={onDelete}>
                        <span>删除</span>
                      </div>
                    </li>
                  </ul>
                )}
              </div>
            </div>
          ) : (
            <div className="action-right">
              <span className="read-action">阅读全文</span>
            </div>
          )}
        </div>
      </li>
    </Wrapper>
  )
}

export default ListBodyPost
