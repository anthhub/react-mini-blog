import React from 'react'

import { translateMarkdown } from '@/lib/utils/markdown'
import { ArticleEntity } from '@/modal/entities/article.entity'

import { Wrapper } from './style'

interface IProps extends ArticleEntity {}

const Article: React.FC<IProps> = ({ update_at, content, author, title, html }) => {
  return (
    <Wrapper>
      <div className="author">
        <div className="author-info">
          <a>
            <div
              className="avatar"
              style={{
                background: 'url(\'https://leancloud-gold-cdn.xitu.io/bdfecd06f90e24f88946.jpeg?imageView2/1/w/100/h/100/q/85/format/webp/interlace/1\') no-repeat center/cover',
              }}
            />
          </a>
          <div>
            <a className="author-name">{author}</a>
            <div className="article-info">
              <time>{update_at}</time> 
              {/* <span className="views">阅读 1367</span> */}
            </div>
          </div>
        </div>
        {/* <button className="follow">关注</button> */}
      </div>
      <h1 className="article-title">{title}</h1>
      <div className="article-content">
        <div className="article-detail" dangerouslySetInnerHTML={{ __html: html || translateMarkdown(content || '') }} />
      </div>
    </Wrapper>
  )
}

export default Article
