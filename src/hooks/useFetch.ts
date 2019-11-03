import { useEffect, useState } from 'react'

export default function useFetch<T, V>(request: (args: T) => Promise<V>, initialRequestParam?: T, initialData?: V) {
  const [data, setData] = useState(initialData)
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)

  const [param, setParam] = useState(initialRequestParam)

  useEffect(() => {
    let didCancel = false
    setIsLoading(true)
    async function fetchData() {
      try {
        const result = await request(param as T)

        if (!didCancel) {
          setData(result)
        }
      } catch (error) {
        if (!didCancel) {
          setIsError(true)
        }
      } finally {
        setIsLoading(false)
      }
    }
    fetchData()
    return () => {
      didCancel = true
    }
  }, [param])

  function doFetch(arg?: T) {
    setParam(arg)
  }

  return { data, setData, isLoading, isError, doFetch }
}
