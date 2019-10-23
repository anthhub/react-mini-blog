import Frame from '@/containers/Frame'
import { lazy } from 'react'

export const lazyComponents = {
  Home: lazy(() => import('../pages/home')),
  Frame,
}

const routes: IRoute[] = [
  {
    path: '/',
    exact: true,
    component: 'Frame',
    childRoutes: [
      { path: '/', component: 'Home' },
      { path: '/home', component: 'Home' },
      // { path: 'article/:id', component: Article },
    ],
  },
]

export default routes

export type TLazyComponentsKeys = keyof typeof lazyComponents

export interface IRoute {
  path: string
  exact?: boolean
  component: TLazyComponentsKeys
  childRoutes?: IRoute[]
}
