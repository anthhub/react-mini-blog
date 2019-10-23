import RouteErrorBoundary from '@/containers/RouteErrorBoundary'
import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import renderRoutes from './renderRoutes'
import routes from './routes'

const AppRouter: React.FC = () => {
  return (
    <BrowserRouter>
      <RouteErrorBoundary>{renderRoutes(routes)}</RouteErrorBoundary>
    </BrowserRouter>
  )
}

export default AppRouter
