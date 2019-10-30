import { useCallback, useState } from 'react'

export default function useEvent<T>(initiateValue: T) {
  const [value, setValue] = useState(initiateValue)

  const onEvent = useCallback(e => setValue(e.target.value), [])

  return { value, onEvent }
}
