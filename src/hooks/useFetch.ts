import { useEffect, useState } from 'react'

type promiseCb = (args: any) => Promise<any>

export default function useFetch<U, V, T>(request: V & promiseCb, initialRequestParam?: T, initialData?: U) {
  const [data, setData] = useState(initialData)
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)

  const [param, setParam] = useState(initialRequestParam)

  useEffect(() => {
    let didCancel = false
    setIsLoading(true)
    async function fetchData() {
      try {
        const result = await request(param)

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
