import { CreditEstimatorPage } from '@presentation/complex/pages/CreditEstimatorPage';
import { MainPage } from '@presentation/complex/pages/MainPage';
import { IntersectionProvider } from '@presentation/providers/IntersectionProvider';
import { Route, Routes } from 'react-router';

function App() {
  return (
    <IntersectionProvider>
      <Routes>
        <Route path={'/'} element={<MainPage />} />
        <Route path={'/credit-estimator'} element={<CreditEstimatorPage />} />
      </Routes>
    </IntersectionProvider>
  );
}

export default App;
