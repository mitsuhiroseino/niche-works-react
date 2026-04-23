import type { Ref } from 'react';
import { useCallback } from 'react';
import setRefCurrent from '../../utils/setRefCurrent';

/**
 * 複数のrefに纏めて値を渡すことができるrefを取得する
 * @param refs
 * @returns
 */
export default function useCombinedRefs<T = any>(...refs: Ref<T>[]) {
  const setter = useCallback((value: T) => {
    setRefCurrent(value, ...refs);
  }, refs);
  return setter;
}
