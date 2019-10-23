import React from 'react'

import { BackTop, Col, Layout, Row } from 'antd'

import Header from './Header'
import './index.less'
import Main from './Main'
import Sider from './Sider'

// 响应式
const siderLayout = { xxl: 4, xl: 5, lg: 5, sm: 0, xs: 0 }
const contentLayout = { xxl: 20, xl: 19, lg: 19, sm: 24, xs: 24 }

const Frame: React.FC = ({ children }) => {
  return (
    <Layout className="app-container">
      <Header />
      <Row className="app-wrapper">
        <Col {...siderLayout}>
          <Sider />
        </Col>
        <Col {...contentLayout}>
          <Main>{children}</Main>
        </Col>
      </Row>
      <BackTop />
    </Layout>
  )
}

export default Frame
