import React, { useCallback } from 'react'

import { translateMarkdown } from '@/lib/utils/markdown'
import { ArticleEntity } from '@/modal/entities/article.entity'

import { Wrapper } from './style'
import { useIsLogin, useSelector } from '@/redux/context'
import { useHistory } from 'react-router'
import { Link } from 'react-router-dom'

const formatDate = (milliseconds: number) => {
	const data = new Date(milliseconds)
	const year = data.getFullYear()
	const month = data.getMonth() + 1
	const day = data.getDate()
	return year + '年' + month + '月' + day + '日'
}

interface IProps extends ArticleEntity {
	// user: { avatarLarge: string }
}

const Article: React.FC<IProps> = ({
	update_at,
	content,
	author,
	title,
	html,
	screenshot = '',
	id,
	user: { avatarLarge = '', id: userId }
}) => {
	// console.log(avatarLarge, '333')
	// console.log('/editor/' + id, { content }, '333')

	const isLogin = useIsLogin()
	const { user: { username } } = useSelector()
	const history = useHistory()
	const onReedit = useCallback(
		async () => {
			history.push('/editor/' + id)
		},
		[ id ]
	)

	return (
		<Wrapper screenshot={screenshot} avatarLarge={avatarLarge}>
			{/* 作者及文章简介 */}
			<div className="author">
				<div className="author-info">
					<Link to={'/user/' + userId}>
						<div className="avatar" />
					</Link>
					<div>
						<Link className="author-name" to={'/user/' + userId}>
							{author}
						</Link>
						<div className="article-info">
							<time>{formatDate(update_at)}</time>
							{/* <span className="views">阅读 1367</span> */}
							{isLogin &&
							author === username && (
								<div>
									<span className="dot">·</span>
									<span className="edit-btn" onClick={onReedit}>
										编辑
									</span>
								</div>
							)}
						</div>
					</div>
				</div>
				{/* <button className="follow">关注</button> */}
			</div>

			{/* 文章标题及内容 */}
			<div className="cover-img" />
			<h1 className="article-title">{title}</h1>
			<div className="article-content">
				<div
					className="article-detail"
					dangerouslySetInnerHTML={{ __html: html || translateMarkdown(content || '') }}
				/>
			</div>
		</Wrapper>
	)
}

export default Article
