import React from 'react'
import './index.less'

class RouteErrorBoundary extends React.Component {
  state = { hasError: false }
  static getDerivedStateFromError(error: any) {
    console.log('%c%s', 'color: #20bd08;font-size:15px', '===TQY===: RouteErrorBoundary -> getDerivedStateFromError -> error', error)
    // 更新 state 使下一次渲染能够显示降级后的 UI
    return { hasError: true }
  }

  componentDidCatch(error: any, errorInfo: any) {
    console.log('%c%s', 'color: #20bd08;font-size:15px', '===TQY===: RouteErrorBoundary -> componentDidCatch -> error, errorInfo', { error }, { errorInfo })
    // 你同样可以将错误日志上报给服务器
    // logErrorToMyService(error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      // 你可以自定义降级后的 UI 并渲染
      return <h1>Something went wrong.</h1>
    }

    return this.props.children
  }
}

export default RouteErrorBoundary
