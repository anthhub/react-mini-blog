import { TLazyComponentsKeys } from './lazyComponents'

const routes: IRoute[] = [
  {
    path: '/editor',
    exact: true,
    component: 'Demo',
  },
  {
    path: '/',
    exact: true,
    component: 'Frame',
    childRoutes: [
      { path: '/', component: 'Home' },
      { path: '/timeline', component: 'Home' },
      { path: '/post/:id', component: 'Post' },
      { path: '/settings', component: 'Settings' },
      { path: '/test', component: 'Test' },
      // { path: 'article/:id', component: Article }
    ],
  },
]

export default routes

export interface IRoute {
  path: string
  exact?: boolean
  component: TLazyComponentsKeys
  childRoutes?: IRoute[]
}
