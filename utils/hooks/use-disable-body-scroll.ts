import { useEffect } from 'react';

export const useDisableBodyScroll = (disabled: boolean) => {
  useEffect(() => {
    const element = document?.scrollingElement as HTMLElement;
    if (!element) {
      return;
    }

    element.style.overflowY = disabled ? 'hidden' : null;

    return () => {
      element.style.overflowY = null;
    };
  }, [disabled]);
};
