/* eslint-disable react-hooks/exhaustive-deps */

import React from 'react'

import { Wrapper } from './style'

interface IProps {}
const avatar = 'http://localhost:3003/image-1575807041779.jpg'

const Advertising: React.FC<IProps> = () => {
  return (
    <Wrapper avatarLarge={avatar}>
      <header className="author-title" title={'由于公司经营不善...'}>
        打个广告  <span role="img" aria-label="Panda">😂😂😂</span>
      </header>
      <div className="author-info">
        <a className="author-desc" href={'https://juejin.im/user/5bc3ed12e51d450e77631fd4'} target="_blank" rel="noopener noreferrer" title={'由于公司经营不善...'}>
          <div className="avatar" style={{ background: `#eee url(${avatar}) no-repeat center/cover` }} />
          <div className="info">
            <span className="author-name">{'前端工程师'}</span>

            <span className="author-intro" title={'由于公司经营不善...'}>
              {'上海在职@求挖'}
            </span>
          </div>
        </a>

        <div className="agree">
          <span className="author-intro">{''}</span>
        </div>

        <div className="agree">
          <a href={'https://juejin.im/user/5bc3ed12e51d450e77631fd4'} target="_blank" rel="noopener noreferrer">
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
