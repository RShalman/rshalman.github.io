import { MainPage } from '@presentation/complex/pages/MainPage';
import { IntersectionProvider } from '@presentation/providers/IntersectionProvider';
import { lazy } from 'react';
import { Route, Routes } from 'react-router';

const CreditEstimatorPageComponent = lazy(
  () => import('@presentation/complex/pages/CreditEstimatorPage')
);

function App() {
  return (
    <IntersectionProvider>
      <Routes>
        <Route path={'/'} element={<MainPage />} />
        <Route
          path={'/credit-estimator'}
          element={<CreditEstimatorPageComponent />}
        />
      </Routes>
    </IntersectionProvider>
  );
}

export default App;
