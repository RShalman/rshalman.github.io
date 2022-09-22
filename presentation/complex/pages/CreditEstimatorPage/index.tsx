import CreditEstimator from 'credit-estimator';
import { useEffect } from 'react';

const NODE_ID = 'credit-estimator-project';

export const CreditEstimatorPage = () => {
  useEffect(() => {
    const [, onUnmount] = CreditEstimator(NODE_ID);
    return onUnmount;
  }, []);

  return <div id={NODE_ID} />;
};
