import { useAuth0 } from '@auth0/auth0-react';
import { Navigate } from 'react-router-dom';

function ProtectedRoute({ children }) {
  const { user } = useAuth0();

  if (!user) {
    return <Navigate to="/login" />;
  }

  return children;
}
export default ProtectedRoute;
