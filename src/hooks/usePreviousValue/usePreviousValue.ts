import { useEffect, useRef, useState } from 'react';
import type { UsePreviousValueOptions } from './types';

/**
 * 前回の値を返すhook
 * @param value 現在の値
 * @param options オプション
 * @returns 前回の値
 */
export default function usePreviousValue<T = any>(
  value: T,
  options: UsePreviousValueOptions<T> = {},
): T | undefined {
  const [prevValue, setPrevValue] = useState(options.initialValue);
  const isEqualRef = useRef(options.isEqual);

  useEffect(() => {
    isEqualRef.current =
      options.isEqual ?? ((oldValue, newValue) => oldValue === newValue);
  });

  useEffect(() => {
    if (!isEqualRef.current(prevValue, value)) {
      setPrevValue(value);
    }
  }, [value]);

  return prevValue;
}
