import { BackTop } from 'antd'
import React from 'react'
import AppDownload from '../../components/AppDownload'

import ArticleList from './ArticleList'
import { Wrapper } from './style'

const Home: React.FC = props => {
  return (
    <Wrapper>
      <ArticleList />
      <AppDownload />
      <BackTop />
    </Wrapper>
  )
}

export default Home
