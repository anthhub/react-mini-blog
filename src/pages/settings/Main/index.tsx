import React from 'react'
// import { connect } from 'react-redux';
import { Wrapper } from './style'

const Main: React.FC = props => {
  return <Wrapper>
<div>
  <h1 className='title'>个人资料
</h1>
  <ul className='setting-list'>
  <li className='item'>
    <span className='item-title'>头像</span>
    <div className='avatar-uploader'>
      <div className='avatar'/>
      <div>
        <div>支持 jpg、png 格式大小 5M 以内的图片</div>
      </div>
      <button>点击上传</button>
    </div>
  </li>
  <li className='item'><span  className='item-title'>用户名</span><div></div></li>
  <li className='item'><span className='item-title'>邮箱</span><div></div></li>
  <li className='item'><span className='item-title'>GitHub</span><div></div></li>
  </ul>
  </div>

  </Wrapper>
}

export default Main
