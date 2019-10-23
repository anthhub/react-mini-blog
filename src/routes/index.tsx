import Frame from '@/containers/Frame'
import RouteErrorBoundary from '@/containers/RouteErrorBoundary'
import React, { Suspense } from 'react'
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'
import routes, { IRoute, lazyComponents } from './routes'

const renderRoutes = (routesTree: IRoute[]) => (
  <Switch>
    {routesTree.map(route => {
      const Comp = lazyComponents[route.component]
      return route.childRoutes ? (
        <Route
          key={route.component}
          path={route.path}
          render={props => (
            <Comp {...props}>
              <Suspense fallback={<div>Loading...</div>}>
                <Switch>
                  {renderRoutes(route.childRoutes as IRoute[])} <Redirect to={'/'} />
                </Switch>
              </Suspense>
            </Comp>
          )}
        />
      ) : (
        <Route exact key={route.component} path={route.path} component={Comp} />
      )
    })}
    <Redirect to={'/'} />
  </Switch>
)

const AppRouter: React.FC = () => {
  return (
    <BrowserRouter>
      <RouteErrorBoundary>{renderRoutes(routes)}</RouteErrorBoundary>
    </BrowserRouter>
  )
}

export default AppRouter
