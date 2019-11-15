import { useCallback, useState, useEffect, useMemo } from 'react'
import { useLocation, useHistory } from 'react-router'

const queryToObjct = (search: string) => {
	return search.replace('?', '').split('&').map((item) => item.split('=')).reduce((res, cur) => {
		if (!cur[0] || !cur[1]) {
			return res
		}

		res[cur[0]] = cur[1]

		return res
	}, {} as any)
}

const objectToQuery = (obj: any) => {
	return (
		'?' +
		Object.keys(obj)
			.filter((item) => obj[item])
			// .sort((a, b) => a.localeCompare(b))
			.reduce((res, cur, index, arr) => {
				if (index === arr.length - 1) {
					return `${res}${cur}=${obj[cur]}`
				}

				return `${res}${cur}=${obj[cur]}&`
			}, '')
	)
}

export default function useQuery<T>() {
	// search 是地址栏 ? 开始的内容
	const history = useHistory()
	const { search } = useLocation()

	const [ queryObject, setQueryObject ] = useState({} as any)

	const query = useMemo(
		() => {
			const query = { ...queryObject, ...queryToObjct(search) }

			console.log('-------useMemo-----', { queryObject, state: queryToObjct(search) }, query)
			return query
		},
		[ search, queryObject ]
	)

	const setQuery = useCallback(
		(newQuery: object) => {
			setQueryObject((obj: any) => {
				history.replace(objectToQuery(obj))
				console.log('------useCallback------', { obj, query, newQuery })
				return { ...obj, ...newQuery }
			})
		},
		[ query ]
	)

	return { query, setQuery }
}
