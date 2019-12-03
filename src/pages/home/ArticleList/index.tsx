import React, { useState, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'

import { getArticles } from '@/Api/article'
import useFetch from '@/lib/hooks/useFetch'
import useQuery from '@/lib/hooks/useQuery'
import { ArticleEntity } from '@/modal/entities/article.entity'
import { useIsLogin, useDispatch, useSelector } from '@/redux/context'

import Article from '../Article'
import { Wrapper } from './style'
import { async } from 'q'
import { getUserInfo, getUserArticles } from '@/Api/user'

const ArticleList: React.FC = () => {
	// search 是地址栏 ? 开始的内容
	// query 是 ? 之后内容拆成的对象
	// const { query }: any = useQuery()
	// console.log(query)
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
	const { user: { id } } = useSelector()
	// console.log('abc', id)

	const { data = [] } = useFetch(
		async () => {
			const rs = query.own === 'mine' ? await getUserArticles(id) : await getArticles(query)
			const list = (rs && rs.edges) || []
			// console.log('mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm',rs)
			dispatch({
				type: 'CHANGE_ARTICLE_LIST',
				payload: { articleList: [ ...list ] }
			})
			return list
		},
		[ query ]
	)

	// 用 store 的数据渲染页面
	const { articleList } = useSelector()

	return (
		<Wrapper>
			<header className="header">
				<nav className="nav">
					<ul className="nav-list">
						<li
							className={query.own === 'all' || !query.own ? 'nav-item active' : 'nav-item'}
							onClick={() => setQuery({ own: 'all' })}
						>
							全部
						</li>

						<li
							className={query.own === 'following' ? 'nav-item  following active' : 'nav-item following'}
							onClick={() => setQuery({ own: 'following' })}
						>
							关注
						</li>

						{isLogin && (
							<li
								className={query.own === 'mine' ? 'nav-item mine active' : 'nav-item mine'}
								onClick={() => setQuery({ own: 'mine' })}
							>
								我的
							</li>
						)}
					</ul>
				</nav>
			</header>

			<ul>{articleList.map((item: ArticleEntity) => <Article {...item} key={item.id} />)}</ul>
		</Wrapper>
	)
}

export default ArticleList
