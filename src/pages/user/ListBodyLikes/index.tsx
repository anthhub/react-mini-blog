import React from 'react'
import { useParams } from 'react-router-dom'

import { getUserLikes } from '@/Api/user'
import useFetch from '@/lib/hooks/useFetch'

import { ArticleEntity } from '@/modal/entities/article.entity'

import { useDispatch, useSelector } from '@/redux/context'

import { Wrapper } from './style'
import ListBodyLike from '../ListBodyLike'

interface IProps extends ArticleEntity {}

const ListBodyLikes: React.FC = () => {
  const { id = '' } = useParams() as any

  const dispatch = useDispatch()
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

  const { likeList = [] } = useSelector()

  // const toPost = () => {
  //   window.open(`/post/${id}`, '_blank')
  // }

  return (
    <Wrapper>
      {/* <ul>{articleList.map((item: ArticleEntity) => <Article {...item} key={item.id} />)}</ul> */}

      <ul className="list-group">
        {likeList.map((item: ArticleEntity) => (
          <ListBodyLike item={item} key={item.id} />
          // <li className="list-item" key={item.id}>
          //   <div onClick={toPost}>
          //     <section className="content">
          //       <div className="info-box">
          //         <ul className="info-row">
          //           <li className="column info-item">专栏</li>
          //           <li className="info-item">
          //             <a className="user-link">{item.user.username}</a>
          //           </li>
          //           <li className="info-item">{formatDate(item.create_at)}</li>
          //           <li className="info-item">
          //             <a className="tag-link">{item.type}</a>
          //           </li>
          //         </ul>

          //         <div className="title">
          //           <span
          //             className="title-link"
          //             dangerouslySetInnerHTML={{
          //               __html: item.title,
          //             }}
          //           />
          //         </div>

          //         {/* 摘抄 */}
          //         {/* 去掉 html 中的标签 */}
          //         <div className="abstract">
          //           <span
          //             dangerouslySetInnerHTML={{
          //               __html: matchReg(item.html || translateMarkdown(item.content || '')),
          //             }}
          //           />
          //         </div>

          //         <div className="action-row">
          //           <ul className="info-row">
          //             <li>
          //               <a className="little-box like">
          //                 <img alt="" className="icon" src="https://b-gold-cdn.xitu.io/v3/static/img/zan.e9d7698.svg" />
          //                 <span className="count">27</span>
          //               </a>
          //             </li>
          //             <li>
          //               <a className="little-box comment">
          //                 <img alt="" className="icon" src="https://b-gold-cdn.xitu.io/v3/static/img/comment.4d5744f.svg" />
          //                 <span className="count">7</span>
          //               </a>
          //             </li>
          //           </ul>
          //         </div>
          //       </div>

          //       <div
          //         className="thumb"
          //         style={{
          //           display: item.screenshot ? 'block' : 'none',
          //           background: `#fff url(${item.screenshot}) no-repeat center/cover`,
          //         }}
          //       />
          //     </section>
          //   </div>
          // </li>
        ))}
      </ul>
    </Wrapper>
  )
}

export default ListBodyLikes
