import CreditEstimator from 'credit-estimator';
import { useEffect, useRef } from 'react';

const NODE_ID = 'credit-estimator-project';

export const CreditEstimatorPage = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const hasMountedApp = ref?.current?.hasChildNodes();
    if (!hasMountedApp) CreditEstimator(NODE_ID);
  }, []);

  return <div ref={ref} id={NODE_ID} />;
};
