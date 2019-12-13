import { BackTop } from 'antd'
import React from 'react'

import Advertising from '@/components/Advertising'

import AppDownload from '../../components/AppDownload'
import ArticleList from './ArticleList'
import { Wrapper } from './style'

const Home: React.FC = props => {
  return (
    <Wrapper>
      <div className="left">
        <ArticleList />
      </div>
      <div className="right">
        <Advertising />
        <AppDownload />
        <BackTop />
      </div>
      <BackTop />
    </Wrapper>
  )
}

export default Home
