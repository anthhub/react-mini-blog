import { async } from 'q'
import React, { useEffect, useState, useCallback } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'
import { Link, useHistory } from 'react-router-dom'

import { getArticles } from '@/Api/article'
import { getUserArticles, getUserInfo } from '@/Api/user'
import useFetch from '@/lib/hooks/useFetch'
import useQuery from '@/lib/hooks/useQuery'
import { ArticleEntity } from '@/modal/entities/article.entity'
import { useDispatch, useIsLogin, useSelector } from '@/redux/context'

import Article from '../Article'
import { Wrapper } from './style'

const ArticleList: React.FC = () => {
  // search 是地址栏 ? 开始的内容
  // query 是 ? 之后内容拆成的对象
  // const { query }: any = useQuery()
  // console.log(query)

  const [pageInfo, setPageInfo] = useState({ hasNextPage: true, endCursor: 0 })

  const { setQuery, query } = useQuery()

  const isLogin = useIsLogin()

  const history = useHistory()

  // 未登录状态 手动输入 http://localhost:3000/?own=mine 无效
  useEffect(() => {
    const { own } = query
    if (!isLogin && own === 'mine') {
      history.replace('/')
    }
  }, [])

  // console.log(query.own, '========Query========')
  const dispatch = useDispatch()
  const {
    user: { id },
  } = useSelector()
  // console.log('abc', id)

  const refresh = useCallback(async () => {
    const rs = query.own === 'mine' ? await getUserArticles({ id, endCursor: 0 }) : await getArticles({ ...query, endCursor: 0 })
    const list = (rs && rs.edges) || []

    dispatch({
      type: 'CHANGE_ARTICLE_LIST',
      payload: { articleList: [...list] },
    })
    if (rs && rs.pageInfo) {
      setPageInfo(rs.pageInfo)
    }

    return list
  }, [query.own])

  const { data = [] } = useFetch(async () => {
    return refresh()
  }, [query.own])

  const nextPage = useCallback(async () => {
    const rs = query.own === 'mine' ? await getUserArticles({ id, endCursor: pageInfo.endCursor }) : await getArticles({ ...query, endCursor: pageInfo.endCursor })
    const list = (rs && rs.edges) || []

    dispatch({
      type: 'APPEND_ARTICLE_LIST',
      payload: { articleList: [...list] },
    })

    if (rs && rs.pageInfo) {
      setPageInfo(rs.pageInfo)
    }

    return list
  }, [pageInfo.endCursor, pageInfo.hasNextPage, query])

  // 用 store 的数据渲染页面
  const { articleList } = useSelector()
  console.log('articleList', articleList)

  return (
    <Wrapper>
      <header className="header">
        <nav className="nav">
          <ul className="nav-list">
            <li className={query.own === 'all' || !query.own ? 'nav-item active' : 'nav-item'} onClick={() => setQuery({ own: 'all' })}>
              全部
            </li>

            {/* <li
							className={query.own === 'following' ? 'nav-item  following active' : 'nav-item following'}
							onClick={() => setQuery({ own: 'following' })}
						>
							关注
						</li> */}

            {isLogin && (
              <li className={query.own === 'mine' ? 'nav-item mine active' : 'nav-item mine'} onClick={() => setQuery({ own: 'mine' })}>
                我的
              </li>
            )}
          </ul>
        </nav>
      </header>

      <ul>
        <InfiniteScroll
          dataLength={articleList.length} // This is important field to render the next data
          next={nextPage}
          hasMore={true}
          loader={pageInfo.hasNextPage ? <h3 style={{ textAlign: 'center' }}>加载中...</h3> : <h3 style={{ textAlign: 'center' }}>没有更多数据了...</h3>}
          //   scrollThreshold={300}
          //   endMessage={
          //     <p style={{ textAlign: 'center' }}>
          //       <b>Yay! You have seen it all</b>
          //     </p>
          //   }
          // below props only if you need pull down functionality
          //   pullDownToRefreshThreshold={100}
          //   refreshFunction={refresh}
          //   pullDownToRefresh
          //   pullDownToRefreshContent={<h3 style={{ textAlign: 'center' }}>下拉刷新...</h3>}
          //   releaseToRefreshContent={<h3 style={{ textAlign: 'center' }}>下拉刷新..</h3>}
        >
          {articleList.map((item: ArticleEntity) => (
            <Article {...item} key={item.id} />
          ))}
        </InfiniteScroll>
      </ul>
    </Wrapper>
  )
}

export default ArticleList
