import { useBreakpoints } from '@vueuse/core';

const breakpoints = useBreakpoints({ desktop: '52.5rem' });

const desktop = breakpoints.greater('desktop');

export default function useBreakpoint() {
  return { desktop };
}
