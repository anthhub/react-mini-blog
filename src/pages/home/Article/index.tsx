import React from 'react'
import { Link } from 'react-router-dom'
// import { connect } from 'react-redux';
import { Wrapper } from './style'

const Article: React.FC = props => {
  return (
    <Wrapper>
      <li>
        <div>
          <section className="content">
            <div className="info-box">
              <div>
                <ul className="info-row">
                  <li className="column info-item">专栏</li>
                  <li className="info-item">
                    <a className="user-link">前端小智</a>
                  </li>
                  <li className="info-item">3小时前</li>
                  <li className="">
                    <a className="tag-link">JavaScript</a>
                  </li>
                </ul>
              </div>

              <div className="title">
                <div className="title-link">重温一下 JS 进阶需要掌握的 13 个概念</div>
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

            <div
              className="thumb"
              style={{
                background:
                  'url(\'https://ss1.baidu.com/-4o3dSag_xI4khGko9WTAnF6hhy/image/h%3D300/sign=7ecc7f20ae0f4bfb93d09854334e788f/10dfa9ec8a1363279e1ed28c9b8fa0ec09fac79a.jpg\') no-repeat center/cover',
              }}
            />
          </section>
        </div>
      </li>
    </Wrapper>
  )
}

export default Article
