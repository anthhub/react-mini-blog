// 加载 ing

import { Spin } from 'antd'
import React from 'react'
import { Wrapper } from './style'

const SpinCenter: React.FC = props => {
  return (
    <Wrapper>
      <Spin className="loading" />
    </Wrapper>
  )
}

export default SpinCenter
