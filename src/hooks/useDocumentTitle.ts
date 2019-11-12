import { useEffect, useRef } from 'react'

export default function useDocumentTitle(title: string) {
  const titleRef = useRef('')

  useEffect(() => {
    titleRef.current = document.title
    document.title = title
    return () => {
      document.title = titleRef.current
    }
  }, [])
}
