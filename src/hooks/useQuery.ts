import { useCallback, useState, useEffect, useMemo } from 'react'
import { useLocation } from 'react-router'

export default function useQuery<T>() {
	// search 是地址栏 ? 开始的内容
	const { search } = useLocation()

	console.log({ search })

	const query = useMemo(
		() => {
			console.log('----------------------------------------memo')

			return search.replace('?', '').split('&').map((item) => item.split('=')).reduce((res, cur) => {
				res[cur[0]] = cur[1]

				return res
			}, {} as any)
		},
		[ search ]
	)

	return query
}
