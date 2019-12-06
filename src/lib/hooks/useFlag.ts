import { useCallback, useState } from 'react'

export default function useFlag<T>(initiateFlag: boolean) {
  const [flag, setFlag] = useState(initiateFlag)

  const setTrue = useCallback(e => setFlag(true), [])

  const setFalse = useCallback(e => setFlag(false), [])

  return { flag, setTrue, setFalse, setFlag }
}
