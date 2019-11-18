import { useCallback, useState } from 'react'

export default function useInputEvent<T>(initiateValue: T) {
	const [ value, setValue ] = useState(initiateValue)

	const onInputEvent = useCallback((e) => setValue(e.target.value), [])

	return { value, onInputEvent, setValue }
}
