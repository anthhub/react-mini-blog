import { useCallback, useEffect, useMemo, useState, useRef } from 'react'
import { useHistory, useLocation } from 'react-router'

const queryToObject = (search: string) => {
  return search
    .replace('?', '')
    .split('&')
    .map(item => item.split('='))
    .reduce((res, cur) => {
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
      .filter(item => obj[item])
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
  // search 是地址栏中 ? 开始的内容
  const history = useHistory()
  const { search } = useLocation()
  const queryRef = useRef({} as any)

  const query = useMemo(() => {
    const query1 = queryToObject(search)
    queryRef.current = query1
    return query1
  }, [search])

  const setQuery = useCallback((newQuery: object) => {
    history.replace(objectToQuery({ ...queryRef.current, ...newQuery }))
  }, [])

  return { query, setQuery }
}
