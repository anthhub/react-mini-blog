import React, { useState, useEffect, useCallback } from 'react'
import { Link, useHistory, useParams } from 'react-router-dom'

import { getArticles, deleteArticle } from '@/Api/article'
import useFetch from '@/lib/hooks/useFetch'
import useQuery from '@/lib/hooks/useQuery'
import { ArticleEntity } from '@/modal/entities/article.entity'
import { useIsLogin, useDispatch, useSelector } from '@/redux/context'

import { Wrapper } from './style'
import { async } from 'q'
import { getUserInfo, getUserArticles } from '@/Api/user'
import { formatDate } from '@/pages/home/Article'
import { title } from 'process'

interface IProps extends ArticleEntity {}

const ListBody: React.FC = () => {
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
	// const { user: { id } } = useSelector()
	const { id = '' } = useParams()
	console.log('abc', id)

	const { data } = useFetch(
		async () => {
			const rs = await getUserArticles(id)
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

	// ---------------------------------------------------------------------------------------------------------------------------

	// const history = useHistory()

	// query.own 是 'mine' 才顯示文章預覽右下角的小圓點
	// const { query } = useQuery()

	const { search = '' } = query

	// console.log({ search })
	// console.log(title.match('/' + search + '/gi'))

	// const dispatch = useDispatch()

	// 點擊小圓點顯示更多显隐
	const [ showMore, setMore ] = useState(false)

	const hideMore = useCallback((e: any) => {
		if (e.target.className !== 'more-icon') {
			setMore(false)
		}
	}, [])

	useEffect(() => {
		document.addEventListener('click', hideMore)
		return () => {
			document.removeEventListener('click', hideMore)
		}
	}, [])

	// 拿到文章 id
	// const { id = '' } = useParams()
	// const { data } = useFetch(() => getArticle(id))
	// 直接传入文章 id
	// console.log('id=============', id)

	// console.log('%c%s', 'color: #20bd08;font-size:15px', '===TQY===: screenshot', screenshot)
	// console.log({ update_at }, typeof update_at)

	const onDelete = useCallback(async () => {
		if (window.confirm('删除专栏文章会扣除相应的掘力值，且文章不可恢复。')) {
			await deleteArticle(id)
			// 删掉 store 中的數據
			dispatch({ type: 'DELETE_ARTICLE', payload: { id } })
		}
	}, [])

	const onReedit = useCallback(
		async () => {
			history.push('/editor/' + id)
		},
		[ id ]
	)

	return (
		<Wrapper>
			<ul className="list-group">
				{articleList.map((item: ArticleEntity) => (
					<li className="list-item" key={item.id}>
						<div className="user-info-row">
							<Link to={'/user/' + id}>
								<div className="avatar" />
								<span>{item.author}
								{/* :after */}
								</span>
							</Link>
							<time>{formatDate(item.update_at)}</time>
						</div>
						<div className="abstract-row" >
							<Link to='' className='title'></Link>
							<Link to='' className='abstract'></Link>
						</div>
						<div className="action-row" />
					</li>
				))}
			</ul>

			{/* <ul>{articleList.map((item: ArticleEntity) => <Article {...item} key={item.id} />)}</ul> */}
		</Wrapper>
	)
}

export default ListBody
