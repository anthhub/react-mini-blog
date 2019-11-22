import { useCallback, useEffect, useMemo, useState } from 'react'

export default function useEventFetch<T, V, U, X>(
	request: (args?: T) => Promise<V>,
	deps: any[],
	memoCb: (arg: V) => any = (a) => a,
	initialData?: V
) {
	const [ data, setData ] = useState(initialData)
	const [ isLoading, setIsLoading ] = useState(false)
	const [ isError, setIsError ] = useState(false)

	let didCancel = false
	useEffect(() => {
		didCancel = false
		return () => {
			didCancel = true
		}
	}, deps || [])

	const onEvent = useCallback(async () => {
		setIsLoading(true)
		try {
			const result = await request()

			if (!didCancel) {
				setData(result)
			}
		} catch (error) {
			if (!didCancel) {
				setIsError(true)
			}
		} finally {
			if (!didCancel) {
				setIsLoading(false)
			}
		}
	}, deps || [])

	const memoData = useMemo(
		() => {
			try {
				return memoCb(data as V)
			} catch (error) {
				console.warn(error.message)
				return data
			}
		},
		[ data ]
	)

	return { data, setData, isLoading, isError, onEvent, memoData }
}
