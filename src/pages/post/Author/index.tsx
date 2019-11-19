// 详情页 右侧 作者简介卡片

import React from 'react'
import { Wrapper } from './style'
import { ArticleEntity } from '@/modal/entities/article.entity'

interface IProps extends ArticleEntity {}

const Author: React.FC<IProps> = ({ author }) => {
	return (
		<Wrapper>
			<header className="author-title">关于作者</header>
			<div className="author-info">
				<a className="author-desc">
					<div
						className="avatar"
						style={{
							background:
								"url('https://leancloud-gold-cdn.xitu.io/bdfecd06f90e24f88946.jpeg?imageView2/1/w/100/h/100/q/85/format/webp/interlace/1') no-repeat center/cover"
						}}
					/>
					<div className="info">
						<span className="author-name">{author}</span>
						<span className="author-intro">程序员 | 公众号: 山月行</span>
					</div>
				</a>
				{/* <div className="agree">
					<span>获得点赞</span>
					<span className='count'>7,113</span>
				</div>
				<div className="views">
					<span>文章被阅读</span>
					<span className='count'>179,331</span>
				</div> */}
			</div>
		</Wrapper>
	)
}

export default Author
