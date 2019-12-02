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
import { matchReg } from '@/pages/post/Catalog'
import { translateMarkdown } from '@/lib/utils/markdown'

interface IProps extends ArticleEntity {}

const ListBodyFollow: React.FC = () => {
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

	// 编辑
	const history = useHistory()

	const onReedit = useCallback(
		async () => {
			history.push('/editor/' + id)
		},
		[ id ]
	)

	// 删除

	const onDelete = useCallback(async () => {
		if (window.confirm('删除专栏文章会扣除相应的掘力值，且文章不可恢复。')) {
			await deleteArticle(id)
			// 删掉 store 中的數據
			dispatch({ type: 'DELETE_ARTICLE', payload: { id } })
		}
	}, [])

	// 是否显示 more-action 的 menu
	const [ showMenu, setShowMenu ] = useState(false)

	const hideMenu = useCallback(() => {
		setShowMenu(false)
	}, [])

	useEffect(() => {
		document.addEventListener('click', hideMenu)
		return () => document.removeEventListener('click', hideMenu)
	}, [])

	return (
		<Wrapper>
			{/* <ul>{articleList.map((item: ArticleEntity) => <Article {...item} key={item.id} />)}</ul> */}

			<ul className="list-group">
				{list.map((item: ArticleEntity) => (
					<li className="list-item" key={item.id}>
						<Link to="" target="_blank" className="user-link">
							<div className="avatar" />
							<div className="info-box">
								<div className="username">小黄</div>
								<div className="detail">服务端研发 | 微信公众号 @ 编程拯救世界</div>
							</div>
							<button type="button" className="follow-btn">
								已关注
							</button>
						</Link>
					</li>
				))}
			</ul>
		</Wrapper>
	)
}

export default ListBodyFollow
