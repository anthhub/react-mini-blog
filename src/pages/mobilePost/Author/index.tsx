// 详情页 右侧 作者简介卡片

import React from 'react'
import { ArticleEntity } from '@/modal/entities/article.entity'

import { Wrapper } from './style'

interface IProps extends ArticleEntity {}

const Author: React.FC<IProps> = ({ update_at, author }) => {
	return (
		<Wrapper>
				<div className="author">
					<div className="author-avatar" />
					<div className="author-info">
						<div className="author-name">刘小夕</div>
						{/* <div className="author-name">{author}</div> */}
						<div className="other-info">
							<div className="author-desc">公众号「前端宇宙」</div>
							<span className="publish-time">9小时前</span>
							{/* <span className="publish-time">{update_at}</span> */}
						</div>
					</div>
				</div>
		</Wrapper>
	)
}

export default Author
