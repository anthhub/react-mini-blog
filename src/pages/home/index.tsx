import { BackTop } from 'antd'
import React from 'react'
import AppDownload from '../../components/AppDownload'
import Login from '../../components/Login'

import ArticleList from './ArticleList'
import { Wrapper } from './style'

const Home: React.FC = props => {
  return (
    <Wrapper>
      <ArticleList />
      <AppDownload />
      {/* <Login/> */}
      <BackTop />
    </Wrapper>
  )
}

export default Home
