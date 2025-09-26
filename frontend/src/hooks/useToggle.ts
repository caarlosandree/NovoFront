import { useToggle as useUidotdevToggle } from '@uidotdev/usehooks';
import { UseToggleReturn } from '@/types';

export function useToggle(initialValue = false): UseToggleReturn {
  const [value, toggle] = useUidotdevToggle(initialValue);

  const setTrue = () => toggle(true);
  const setFalse = () => toggle(false);

  return {
    value,
    toggle,
    setTrue,
    setFalse,
  };
}
