import SpinCenter from '@/components/SpinCenter'
import React, { lazy, Suspense } from 'react'

export type TLazyComponentsKeys = keyof typeof lazyComponents

const withSuspense = (Component: any) => {
  return (props: any) => (
    <Suspense fallback={<SpinCenter />}>
      <Component {...props} />
    </Suspense>
  )
}

export const lazyComponents = {
  Frame: withSuspense(lazy(() => import('../containers/Frame'))),
  Home: withSuspense(lazy(() => import('../pages/home'))),
  Post: withSuspense(lazy(() => import('../pages/post'))),
  MobilePost: withSuspense(lazy(() => import('../pages/mobiPost'))),
  Settings: withSuspense(lazy(() => import('../pages/settings'))),
  Editor: withSuspense(lazy(() => import('../pages/editor'))),
  User: withSuspense(lazy(() => import('../pages/user'))),
  // EditMarkdown: withSuspense(lazy(() => import('../components/EditMarkdown'))),
}
