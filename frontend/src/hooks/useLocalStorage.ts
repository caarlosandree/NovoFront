import { useLocalStorage as useUidotdevLocalStorage } from '@uidotdev/usehooks';
import { UseLocalStorageReturn } from '@/types';

export function useLocalStorage<T>(
  key: string,
  defaultValue: T
): UseLocalStorageReturn<T> {
  const [value, setValue] = useUidotdevLocalStorage(key, defaultValue);

  const removeValue = () => {
    setValue(defaultValue);
  };

  return {
    value,
    setValue,
    removeValue,
  };
}
