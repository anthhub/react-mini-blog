import React from 'react'

import { Layout, Row, Col, BackTop } from 'antd'

import Header from './Header'
import Sider from './Sider'
// import Main from './Main'
import Test from '@/pages/Test'
import './index.less'

// 响应式
const siderLayout = { xxl: 4, xl: 5, lg: 5, sm: 0, xs: 0 }
const contentLayout = { xxl: 20, xl: 19, lg: 19, sm: 24, xs: 24 }

const Frame: React.FC = props => {
  return (
    <Layout className="app-container">
      <Header />
      <Row className="app-wrapper">
        <Col {...siderLayout}>
          <Sider />
        </Col>
        <Col {...contentLayout}>
          {/* <Main {...props} /> */}
          <Test />
        </Col>
      </Row>
      <BackTop />
    </Layout>
  )
}

export default Frame
