import CreditEstimator from 'credit-estimator';
import { useEffect, useRef } from 'react';

const NODE_ID = 'credit-estimator-project';

const CreditEstimatorPage = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref?.current?.hasChildNodes()) {
      CreditEstimator(NODE_ID);
    }
  }, [ref]);

  return <div ref={ref} id={NODE_ID} />;
};

export default CreditEstimatorPage;
