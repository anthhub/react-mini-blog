import React from 'react'

import { translateMarkdown } from '@/lib/utils/markdown'
import { ArticleEntity } from '@/modal/entities/article.entity'

import { Wrapper } from './style'

interface IProps extends ArticleEntity {}

const Article: React.FC<IProps> = ({ content, html }) => {
	return (
		<Wrapper>
			<h1 className="article-title">9个项目助你在2020年成为前端大神！</h1>
			{/* <h1 className="article-title">{title}</h1> */}
			<div
				className="cover-img"
				style={{
					background:
						'url("https://user-gold-cdn.xitu.io/2019/11/5/16e390af169d6b49?imageView2/1/w/1304/h/734/q/85/format/webp/interlace/1") no-repeat center/cover'
				}}
			/>
			<div
				className="article-content"
				dangerouslySetInnerHTML={{ __html: html || translateMarkdown(content || '') }}
			/>
		</Wrapper>
	)
}

export default Article
