// 右侧 下载客户端小卡片

import React from 'react'
// import { connect } from 'react-redux';
import { Wrapper } from './style'

const AppDownload: React.FC = props => {
  return (
    <Wrapper>
      <div className="app-link">
        <img  className="qr-img" src="https://b-gold-cdn.xitu.io/v3/static/img/timeline.e011f09.png" alt="qrcode" />
        <div className="content">
          <div className="headline">下载掘金客户端</div>
          <div className="desc">一个帮助开发者成长的社区</div>
        </div>
      </div>
    </Wrapper>
  )
}

export default AppDownload
