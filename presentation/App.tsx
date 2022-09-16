import { MainPage } from '@presentation/complex/pages/MainPage';
import { IntersectionProvider } from '@presentation/providers/IntersectionProvider';

function App() {
  return (
    <IntersectionProvider>
      <MainPage />
    </IntersectionProvider>
  );
}

export default App;
