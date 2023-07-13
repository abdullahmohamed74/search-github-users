import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {
  AuthWrapper,
  Dashboard,
  ErrorPage,
  Login,
  ProtectedRoute,
} from './pages';

function App() {
  return (
    <AuthWrapper>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </AuthWrapper>
  );
}
export default App;
