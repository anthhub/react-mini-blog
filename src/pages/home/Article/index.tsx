import React, { memo } from 'react'
import { Link } from 'react-router-dom'

import { ArticleEntity } from '@/modal/entities/article.entity'
import { translateMarkdown } from '@/lib/utils/markdown'
import { matchReg } from '@/pages/post/Catalog'

import { Wrapper } from './style'

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

const Article: React.FC<IProps> = ({ title, update_at, author, type, content, html, screenshot, id }) => {
	console.log('%c%s', 'color: #20bd08;font-size:15px', '===TQY===: screenshot', screenshot)
	// console.log({ update_at }, typeof update_at)
	return (
		<Wrapper screenshot={screenshot}>
			<li>
				<Link to={`/post/${id}`}>
					<section className="content">
						<div className="info-box">
							<div>
								<ul className="info-row">
									<li className="column info-item">专栏</li>
									<li className="info-item">
										{/* object 标签实现 a 标签的嵌套 */}
										<object>
											<a className="user-link">{author}</a>
										</object>
									</li>
									<li className="info-item">{formatDate(update_at)}</li>
									<li className="">
										<object>
											<a className="tag-link">{type}</a>
										</object>
									</li>
								</ul>
							</div>

							<div className="title">
								<span className="title-link">{title}</span>
							</div>

							<div className="abstract">
								{/* 摘抄 */}
								{/* 去掉 html 中的标签 */}
								<span>{matchReg(html || translateMarkdown(content || ''))}</span>
							</div>

							{/* 暂时不需要点赞等互动功能 */}
							{/* <div>
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
							</div> */}
						</div>

						<div className="thumb" />
					</section>
				</Link>
			</li>
		</Wrapper>
	)
}

export default memo(Article)
