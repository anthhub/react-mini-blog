import { TLazyComponentsKeys } from './lazyComponents'

const routes: IRoute[] = [
	{
		path: '/mobi/post/:id',
		exact: true,
		component: 'MobilePost'
	},
	{
		path: '/editor',
		exact: true,
		component: 'Editor'
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
			{ path: '/editor/:id', component: 'Editor' }
			// { path: 'article/:id', component: Article }
		]
	}
]

export default routes

export interface IRoute {
	path: string
	exact?: boolean
	component: TLazyComponentsKeys
	childRoutes?: IRoute[]
}
