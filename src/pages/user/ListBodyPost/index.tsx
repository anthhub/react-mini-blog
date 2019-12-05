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
	user: { avatarLarge, username } = {}
}) => {
	// 拿用户 id
	const { id = '' } = useParams()
	// console.log(id, '=============id===========')
	const { user: { id: loginId } } = useSelector()

	const dispatch = useDispatch()

	// 是否显示 more-action 的 menu
	const [ showMenu, setShowMenu ] = useState(false)

	const hideMenu = useCallback(() => {
		setShowMenu(false)
	}, [])

	useEffect(() => {
		document.addEventListener('click', hideMenu)
		return () => document.removeEventListener('click', hideMenu)
	}, [])

	// 编辑
	const history = useHistory()

	const onReedit = useCallback(
		async () => {
			history.push('/editor/' + articleId)
		},
		[ articleId ]
	)

	// 删除

	const onDelete = useCallback(
		async () => {
			if (window.confirm('删除专栏文章会扣除相应的掘力值，且文章不可恢复。')) {
				await deleteArticle(articleId)
				// 删掉 store 中的數據
				dispatch({ type: 'DELETE_ARTICLE', payload: { articleId } })
			}
		},
		[ articleId ]
	)

	return (
		<Wrapper>
			<li className="list-item">
				{/* 第一行 */}
				<div className="user-info-row">
					<Link to={'/user/' + id} className="user-info" target="_blank">
						<div
							className="avatar"
							style={{
								background: `#eee url(${avatarLarge}) no-repeat center/cover`
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
							<div
								className="cover-img"
								style={{ background: `#f8f9fa url(${screenshot}) no-repeat center/cover` }}
							/>
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
							__html: matchReg(html || translateMarkdown(content || ''))
						}}
					/>
				</div>

				{/* 第四行 */}
				<div className="action-row">
					<ul className="action-left">
						<li className="action like">
							<img className="icon" src="https://b-gold-cdn.xitu.io/v3/static/img/zan.e9d7698.svg" />
						</li>
						<Link to="">
							<li className="action comment">
								<img
									className="icon"
									src="https://b-gold-cdn.xitu.io/v3/static/img/comment.4d5744f.svg"
								/>
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
									onClick={(e) => {
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
