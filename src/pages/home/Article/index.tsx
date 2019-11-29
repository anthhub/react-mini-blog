import React, { memo, useState, useCallback, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'

import { ArticleEntity } from '@/modal/entities/article.entity'
import { translateMarkdown } from '@/lib/utils/markdown'
import { matchReg } from '@/pages/post/Catalog'

import { Wrapper } from './style'
import useQuery from '@/lib/hooks/useQuery'
import { deleteArticle } from '@/Api/article'
import { useDispatch } from '@/redux/context'

// 格式化时间
export const formatDate = (time: number) => {
	const dt = new Date()
	const ms = dt.getTime()
	// console.log(ms)
	const diff = ms - time
	// 1年的毫秒数：31536000000
	if (diff >= 31536000000) {
		return Math.floor(diff / 31536000000) + '年前'
	} else if (diff >= 2592000000 && diff < 31536000000) {
		return Math.floor(diff / 2592000000) + '月前'
	} else if (diff >= 86400000 && diff < 2592000000) {
		return Math.floor(diff / 86400000) + '天前'
	} else if (diff >= 3600000 && diff < 86400000) {
		return Math.floor(diff / 3600000) + '小时前'
	} else if (diff >= 60000 && diff < 3600000) {
		return Math.floor(diff / 60000) + '分钟前'
	} else {
		return '刚刚'
	}
}

interface IProps extends ArticleEntity {}

const Article: React.FC<IProps> = ({ title, update_at, author, type, content, html, screenshot = '', id }) => {
	const history = useHistory()

	// query.own 是 'mine' 才顯示文章預覽右下角的小圓點
	const { query } = useQuery()

	const { search = '' } = query

	// console.log({ search })
	// console.log(title.match('/' + search + '/gi'))

	const dispatch = useDispatch()

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

	console.log('%c%s', 'color: #20bd08;font-size:15px', '===TQY===: screenshot', screenshot)
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
		<Wrapper screenshot={screenshot}>
			<li>
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
								<li className="info-item">{formatDate(update_at)}</li>
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
										__html: title.replace(new RegExp(search, 'gi'), `<em>${search}</em>`)
									}}
								/>
							</div>

							{/* 摘抄 */}
							{/* 去掉 html 中的标签 */}
							<div className="abstract">
								<span
									dangerouslySetInnerHTML={{
										__html: matchReg(html || translateMarkdown(content || '')).replace(
											new RegExp(search, 'gi'),
											`<em>${search}</em>`
										)
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

						<div className="thumb" />
					</section>
				</Link>
			</li>
		</Wrapper>
	)
}

export default memo(Article)
