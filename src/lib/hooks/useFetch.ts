import { useCallback, useEffect, useState } from 'react'

export default function useFetch<T, V>(request: (args?: T) => Promise<V>, initialRequestParam: any = [], initialData?: V) {
  const [data, setData] = useState(initialData)
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)

  // const [param, setParam] = useState(initialRequestParam)

  const fetchData = useCallback(async () => {
    try {
      const result = await request()

      setData(result)
    } catch (error) {
      setIsError(true)
    } finally {
      setIsLoading(false)
    }
  }, [...initialRequestParam])

  useEffect(() => {
    setIsLoading(true)
    fetchData()
  }, [...initialRequestParam])

  function doFetch() {
    fetchData()
  }

  return { data, setData, isLoading, isError, doFetch }
}
