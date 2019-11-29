import React, { useState, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'

import { getArticles } from '@/Api/article'
import useFetch from '@/lib/hooks/useFetch'
import useQuery from '@/lib/hooks/useQuery'
import { ArticleEntity } from '@/modal/entities/article.entity'
import { useIsLogin, useDispatch, useSelector } from '@/redux/context'

import { Wrapper } from './style'
import { async } from 'q'
import { getUserInfo, getUserArticles } from '@/Api/user'
import ListBody from '../ListBody'

const ListHeader: React.FC = () => {
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

	const { data } = useFetch(
		async () => {
			const rs = query.own === 'mine' ? await getUserArticles(id) : await getArticles(query)
			const list = (rs && rs.edges) || []
			dispatch({
				type: 'CHANGE_ARTICLE_LIST',
				payload: { articleList: [ ...list ] }
			})
			return rs
		},
		[ query ]
	)

	// 文章列表
	// const list = (data && data.edges) || []

	// 用 store 的数据渲染页面
	const { articleList } = useSelector()

	// 所有 or 我的
	// const [ active, setActive ] = useState(0)

	return (
		<Wrapper>
			<header className="list-header">
				<nav className="nav">
					<ul className="nav-list">
						<Link to={'/user/' + id + '/posts'}>
							<li className={query.own === 'all' || !query.own ? 'nav-item active' : 'nav-item'}>
								<span className="item-title">专栏</span>
								<span className="item-count">2</span>
							</li>
						</Link>
						<Link to={'/user/' + id + '/following'}>
							<li className={query.own === 'mine' ? 'nav-item mine active' : 'nav-item mine'}>
								<span className="item-title">关注</span>
								<span className="item-count">50</span>
							</li>
						</Link>
						<Link to={'/user/' + id + '/likes'}>
							<li className={query.own === 'mine' ? 'nav-item mine active' : 'nav-item mine'}>
								<span className="item-title">赞</span>
								<span className="item-count">17</span>
							</li>
						</Link>
					</ul>
				</nav>
			</header>
		</Wrapper>
	)
}

export default ListHeader
