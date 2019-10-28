import { TLazyComponentsKeys } from './lazyComponents'

const routes: IRoute[] = [
  {
    path: '/',
    exact: true,
    component: 'Frame',
    childRoutes: [
      { path: '/', component: 'Home' },
      { path: '/home', component: 'Home' },
      { path: '/test', component: 'Test' },
      // { path: 'article/:id', component: Article },
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
