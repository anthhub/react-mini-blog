import { ArticleEntity } from '@/modal/entities/article.entity'
import React, { memo } from 'react'
import { Link } from 'react-router-dom'
// import { connect } from 'react-redux';
import { Wrapper } from './style'

interface IProps extends ArticleEntity {}

const Article: React.FC<IProps> = ({ title, update_at, author, type, screenshot, id }) => {
  console.log('%c%s', 'color: #20bd08;font-size:15px', '===TQY===: screenshot', screenshot)
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
                    <a className="user-link">{author}</a>
                  </li>
                  <li className="info-item">{update_at}</li>
                  <li className="">
                    <a className="tag-link">{type}</a>
                  </li>
                </ul>
              </div>

              <div className="title">
                <div className="title-link">{title}</div>
              </div>

              <div>
                <ul className="info-row">
                  <li>
                    <a className="little-box like">
                      <img className="icon" src="https://b-gold-cdn.xitu.io/v3/static/img/zan.e9d7698.svg" />
                      <span className="count">27</span>
                    </a>
                  </li>
                  <li>
                    <a className="little-box comment">
                      <img className="icon" src="https://b-gold-cdn.xitu.io/v3/static/img/comment.4d5744f.svg" />
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
