import { IFunction } from '@types/commons';
import {
  createContext,
  FC,
  PropsWithChildren,
  RefObject,
  useContext,
} from 'react';

export type IntersectionProviderContext = {
  entries: typeof entriesMap;
  observe: typeof observe;
  unobserve: typeof unobserve;
};

type RefElement = RefObject<Element>['current'];

const providerContext = createContext<IntersectionProviderContext | null>(null);

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        executeAction(entry.target);
        unobserve(entry.target);
      }
    });
  },
  { threshold: 0.25 }
);

const entriesMap: Map<string, { ref: RefElement; action: IFunction }> =
  new Map();

const entriesHasKey = (ref: RefElement) =>
  entriesMap.get(ref.className) !== undefined;

const observe = (ref: RefElement, action: IFunction) => {
  if (!entriesHasKey(ref)) {
    entriesMap.set(ref.className, { ref, action });
    observer.observe(ref);
  }
};

const unobserve = (ref: RefElement) => {
  if (entriesHasKey(ref)) {
    entriesMap.delete(ref.className);
    observer.unobserve(ref);
  }
};

const executeAction = (ref: RefElement) => {
  if (entriesHasKey(ref)) {
    entriesMap.get(ref.className)?.action();
  }
};

export const IntersectionProvider: FC<PropsWithChildren<unknown>> = ({
  children,
}) => {
  const ctx = {
    entries: entriesMap,
    observe,
    unobserve,
  };

  return (
    <providerContext.Provider value={ctx}>{children}</providerContext.Provider>
  );
};

export const useIntersectionObserver = () => {
  const ctx = useContext(providerContext);
  if (!ctx) {
    throw new Error(
      'useIntersectionObserver must be used within a IntersectionProvider.'
    );
  }
  return ctx;
};
