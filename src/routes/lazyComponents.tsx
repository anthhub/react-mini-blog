import Frame from '@/containers/Frame';

import { Spin } from 'antd';
import React, { lazy, Suspense } from 'react';

export type TLazyComponentsKeys = keyof typeof lazyComponents;

const withSuspense = (Component: any) => {
	return (props: any) => (
		<Suspense fallback={<Spin />}>
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
