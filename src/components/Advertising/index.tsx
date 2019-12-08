// 详情页 右侧 作者简介卡片

import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

import { Wrapper } from './style'

interface IProps {
  user?: any
}
const avatar = 'https://user-gold-cdn.xitu.io/2019/2/10/168d577489bcbe76?imageView2/1/w/180/h/180/q/85/format/webp/interlace/1'

const Advertising: React.FC<IProps> = ({ user: { username = '', jobTitle = '', company = '', avatarLarge = '', id = '' } = {} }) => {
  return (
    <Wrapper avatarLarge={avatarLarge}>
      <header className="author-title" title={'由于公司经营不善...'}>
        网站作者在线求职 😂😂😂
      </header>
      <div className="author-info">
        <a className="author-desc" href={'https://juejin.im/user/5bc3ed12e51d450e77631fd4'} target="_blank" title={'由于公司经营不善...'}>
          <div className="avatar" style={{ background: `#eee url(${avatar}) no-repeat center/cover` }} />
          <div className="info">
            <span className="author-name">{'github@anthhub'}</span>

            <span className="author-intro" title={'由于公司经营不善...'}>
              {'找工作中@求挖'}
            </span>
          </div>
        </a>

        <div className="agree">
          <a href={'https://juejin.im/user/5bc3ed12e51d450e77631fd4'} target="_blank">
            <span>掘金</span>
            <span className="count">{'anthhub'}</span>
          </a>
        </div>
        <div className="views">
          <span>邮箱</span>
          <span className="count">{'anthhub@163.com'}</span>
        </div>
      </div>
    </Wrapper>
  )
}

export default Advertising
