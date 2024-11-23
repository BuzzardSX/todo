import { useMemo } from 'react';

export const useValue = () => useMemo(() => Date.now(), []);
