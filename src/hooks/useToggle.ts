import { useCallback, useState } from 'react';

export default function useToggle<T>(initiateFlag: boolean) {
	const [ flag, setFlag ] = useState(initiateFlag);

	const onToggle = useCallback((newFlag) => setFlag(!newFlag), []);

	return { flag, onToggle };
}
