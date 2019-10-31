import { BackTop } from 'antd'
import React from 'react'
import AppDownload from '../../components/AppDownload'
import Article from './Article'
import Author from './Author'
import Catalog from './Catalog'
// import { connect } from 'react-redux';
import { Wrapper } from './style'

const Post: React.FC = props => {
  return (
    <Wrapper>
      <div className="left">
        <Article />
      </div>
      <div className="right">
        <Author />
        <AppDownload />
        <Catalog />
      </div>
      <BackTop />
    </Wrapper>
  )
}

export default Post
