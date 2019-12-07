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
      <header className="author-title">网站作者求职 😂😂😂</header>
      <div className="author-info">
        <a className="author-desc" href={'https://juejin.im/user/5bc3ed12e51d450e77631fd4'} target="_blank" title={'由于公司运营问题...'}>
          <div className="avatar" style={{ background: `#eee url(${avatar}) no-repeat center/cover` }} />
          <div className="info">
            <a href={'https://github.com/anthhub'} target="_blank" onClick={e => e.stopPropagation()}>
              <span className="author-name">{'github@anthhub'}</span>
            </a>
            <span className="author-intro" title={'由于公司运营不善问题...'}>
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
