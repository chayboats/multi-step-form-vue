import { useBreakpoints } from '@vueuse/core';

const breakpoints = useBreakpoints({ tablet: '48rem' });

const tablet = breakpoints.greater('tablet');

export default function useBreakpoint() {
  return { tablet };
}
