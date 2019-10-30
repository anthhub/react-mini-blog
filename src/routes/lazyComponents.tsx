import Frame from '@/containers/Frame';


import React, { lazy, Suspense } from 'react';
import SpinCenter from '@/components/SpinCenter';

export type TLazyComponentsKeys = keyof typeof lazyComponents;

const withSuspense = (Component: any) => {
	return (props: any) => (
		<Suspense fallback={<SpinCenter />}>
			<Component {...props} />
		</Suspense>
	);
};

export const lazyComponents = {
	Frame,
	Home: withSuspense(lazy(() => import('../pages/home'))),
	Post: withSuspense(lazy(() => import('../pages/post'))),
	Test: withSuspense(lazy(() => import('../pages/test')))
};
