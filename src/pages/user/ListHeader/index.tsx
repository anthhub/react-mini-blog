import React from 'react'
import { Link, useParams } from 'react-router-dom'

import { getUserArticles, getUserLikes } from '@/Api/user'
import useFetch from '@/lib/hooks/useFetch'

import { useDispatch, useSelector } from '@/redux/context'

import { Wrapper } from './style'

const ListHeader: React.FC = () => {
  const { id = '', item = '' } = useParams() as any

  const dispatch = useDispatch()
  // 分页部分的数据统一在 header 中拿到（因爲 header 一定會渲染），再放入 store 中供分页组件使用
  // 根据 id 拿用户文章列表
  useFetch(async () => {
    const rs = await getUserArticles(id)
    const list = (rs && rs.edges) || []
    dispatch({
      type: 'CHANGE_ARTICLE_LIST',
      payload: { articleList: [...list] },
    })
    return list
  }, [id])

  // 根据 id 拿用户点赞的文章列表
  useFetch(async () => {
    const rs = await getUserLikes(id)
    const list = (rs && rs.edges) || []
    dispatch({
      type: 'CHANGE_LIKE_LIST',
      payload: { likeList: [...list] },
    })
    return list
  }, [id])

  const { likeList = [], articleList = [] } = useSelector()

  return (
    <Wrapper>
      <header className="list-header">
        {/* 标题栏 */}
        <nav className="nav">
          <ul className="nav-list">
            <Link to={'/user/' + id + '/posts'}>
              <li className={item === '' || item === 'posts' ? 'nav-item active' : 'nav-item'}>
                <span className="item-title">专栏</span>
                <span className="item-count">{articleList.length}</span>
              </li>
            </Link>
            <Link to={'/user/' + id + '/following'}>
              <li className={item === 'following' || item === 'followers' ? 'nav-item active' : 'nav-item'}>
                <span className="item-title">关注</span>
                {/* <span className="item-count">50</span> */}
              </li>
            </Link>
            <Link to={'/user/' + id + '/likes'}>
              <li className={item === 'likes' ? 'nav-item active' : 'nav-item'}>
                <span className="item-title">赞</span>
                <span className="item-count">{likeList.length}</span>
              </li>
            </Link>
          </ul>
        </nav>

        {/* 子标题栏 */}
        {item === 'posts' || item === '' ? (
          <div className="sub-header">
            <div className="sub-header-left">专栏</div>
          </div>
        ) : item === 'following' ? (
          <div className="sub-header">
            <div className="sub-header-left">关注</div>
            <div className="sub-header-right">
              <Link to={'/user/' + id + '/following'} className="following active">
                关注了
              </Link>
              <Link to={'/user/' + id + '/followers'} className="followers">
                关注者
              </Link>
            </div>
          </div>
        ) : item === 'followers' ? (
          <div className="sub-header">
            <div className="sub-header-left">关注</div>
            <div className="sub-header-right">
              <Link to={'/user/' + id + '/following'} className="following">
                关注了
              </Link>
              <Link to={'/user/' + id + '/followers'} className="followers active">
                关注者
              </Link>
            </div>
          </div>
        ) : item === 'likes' ? (
          <div className="sub-header">
            <div className="sub-header-left">赞过的</div>
          </div>
        ) : null}
      </header>
    </Wrapper>
  )
}

export default ListHeader
