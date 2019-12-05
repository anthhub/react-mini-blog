import React, { Suspense } from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import { lazyComponents } from './lazyComponents'
import { IRoute } from './routes'

const renderRoutes = (routesTree: IRoute[]) => (
	<Switch>
		{routesTree.map((route) => {
			const Comp = lazyComponents[route.component]
			return route.childRoutes ? (
				<Route
					key={route.component}
					path={route.path}
					render={(props) => (
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

export default renderRoutes
