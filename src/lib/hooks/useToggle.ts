import { useCallback, useState } from 'react'

export default function useToggle<T>(initiateFlag: boolean) {
  const [flag, setFlag] = useState(initiateFlag)

  const onToggle = useCallback(() => setFlag(!flag), [flag])

  return { flag, onToggle, setFlag }
}
