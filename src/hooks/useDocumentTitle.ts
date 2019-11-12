import { useEffect } from 'react'

export default function useDocumentTitle(title: string, defaultTile = 'juejin') {
  useEffect(() => {
    document.title = title
    return () => {
      document.title = defaultTile
    }
  }, [title])
}
