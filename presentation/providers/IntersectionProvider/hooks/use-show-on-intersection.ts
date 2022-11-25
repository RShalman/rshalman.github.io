import { useIntersectionObserver } from '@presentation/providers/IntersectionProvider';
import { RefObject, useEffect, useState } from 'react';

export const useShowOnIntersection = (ref: RefObject<Element>) => {
  const [isShow, setIsShow] = useState<boolean>(false);

  const { observe } = useIntersectionObserver();

  useEffect(() => {
    if (ref.current) {
      observe(ref.current, () => setIsShow(true));
    }
  }, [observe, ref]);

  return isShow;
};
