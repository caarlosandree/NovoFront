// Exportar todos os hooks personalizados
export { useLocalStorage } from './useLocalStorage';
export { useToggle } from './useToggle';
export { useAsync } from './useAsync';

// Re-exportar hooks úteis do @uidotdev/usehooks
export {
  useClickAway,
  useCopyToClipboard,
  useDebounce,
  useGeolocation,
  useIntersectionObserver,
  useMediaQuery,
  usePrevious,
  useSessionStorage,
  useThrottle,
  useWindowSize,
} from '@uidotdev/usehooks';
