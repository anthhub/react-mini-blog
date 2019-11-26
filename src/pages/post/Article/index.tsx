import React, { useCallback } from 'react'

import { translateMarkdown } from '@/lib/utils/markdown'
import { ArticleEntity } from '@/modal/entities/article.entity'
import { formatDate } from '@/pages/home/Article'

import { Wrapper } from './style'
import { useIsLogin, useSelector } from '@/redux/context'
import { useHistory } from 'react-router'

interface IProps extends ArticleEntity {}

const Article: React.FC<IProps> = ({ update_at, content, author, title, html, screenshot = '', id }) => {
	// console.log(content, '333')
	console.log('/editor/' + id, { content }, '333')

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
		<Wrapper screenshot={screenshot}>
			{/* 作者及文章简介 */}
			<div className="author">
				<div className="author-info">
					<a>
						<div
							className="avatar"
							style={{
								background:
									"url('https://leancloud-gold-cdn.xitu.io/bdfecd06f90e24f88946.jpeg?imageView2/1/w/100/h/100/q/85/format/webp/interlace/1') no-repeat center/cover"
							}}
						/>
					</a>
					<div>
						<a className="author-name">{author}</a>
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
