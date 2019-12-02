import React, { useState, useEffect, useCallback } from 'react'
import { Link, useHistory, useParams } from 'react-router-dom'

import { getArticles, deleteArticle } from '@/Api/article'
import useFetch from '@/lib/hooks/useFetch'
import useQuery from '@/lib/hooks/useQuery'
import { ArticleEntity } from '@/modal/entities/article.entity'
import { useIsLogin, useDispatch, useSelector } from '@/redux/context'

import { Wrapper } from './style'
import { getUserInfo, getUserArticles } from '@/Api/user'
import { formatDate } from '@/pages/home/Article'
import { title } from 'process'
import { translateMarkdown } from '@/lib/utils/markdown'
import { matchReg } from '@/pages/post/Catalog'

interface IProps extends ArticleEntity {}

const ListBodyLikes: React.FC = () => {
	const { id = '' } = useParams()
	// console.log(id, '=============id===========')

	const dispatch = useDispatch()
	const { data: list = [] } = useFetch(async () => {
		const rs = await getUserArticles(id)
		// console.log(rs, 'rs--------------------')
		const list = (rs && rs.edges) || []
		// console.log(list, 'list--------------------')
		dispatch({
			type: 'CHANGE_ARTICLE_LIST',
			payload: { articleList: [ ...list ] }
		})
		return list
	}, [])

	return (
		<Wrapper>
			{/* <ul>{articleList.map((item: ArticleEntity) => <Article {...item} key={item.id} />)}</ul> */}

			<ul className="list-group">
				{list.map((item: ArticleEntity) => (
					<li className="list-item" key={item.id}>
						<Link to={`/post/${id}`} target="_blank">
							<section className="content">
								<div className="info-box">
									<ul className="info-row">
										<li className="column info-item">专栏</li>
										<li className="info-item">
											去掉object
											{/* object 标签实现 a 标签的嵌套 */}
											{/* <object>
										<a className="user-link">{author}</a>
									</object> */}
										</li>
										<li className="info-item">{formatDate(item.update_at)}</li>
										<li className="info-item">
											去掉object
											{/* <object>
										<a className="tag-link">{type}</a>
									</object> */}
										</li>
									</ul>

									<div className="title">
										<span
											className="title-link"
											dangerouslySetInnerHTML={{
												__html: item.title
											}}
										/>
									</div>

									{/* 摘抄 */}
									{/* 去掉 html 中的标签 */}
									<div className="abstract">
										<span
											dangerouslySetInnerHTML={{
												__html: matchReg(item.html || translateMarkdown(item.content || ''))
											}}
										/>
									</div>

									<div className="action-row">
										<ul className="info-row">
											<li>
												<a className="little-box like">
													<img
														className="icon"
														src="https://b-gold-cdn.xitu.io/v3/static/img/zan.e9d7698.svg"
													/>
													<span className="count">27</span>
												</a>
											</li>
											<li>
												<a className="little-box comment">
													<img
														className="icon"
														src="https://b-gold-cdn.xitu.io/v3/static/img/comment.4d5744f.svg"
													/>
													<span className="count">7</span>
												</a>
											</li>
										</ul>
									</div>
								</div>

								<div
									className="thumb"
									style={{
										display: item.screenshot ? 'block' : 'none',
										background: `#fff url(${item.screenshot}) no-repeat center/cover`
									}}
								/>
							</section>
						</Link>
					</li>
				))}
			</ul>
		</Wrapper>
	)
}

export default ListBodyLikes
