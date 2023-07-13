import { createContext, useEffect, useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const UserContext = createContext();

function UserProvider({ children }) {
  const [myUser, setMyUser] = useState(null);

  const { loginWithRedirect, logout, user, error, isLoading } = useAuth0();

  useEffect(() => {
    setMyUser(user);
  }, [user]);

  return (
    <UserContext.Provider
      value={{ myUser, loginWithRedirect, logout, error, isLoading }}
    >
      {children}
    </UserContext.Provider>
  );
}

export { UserProvider };
export default UserContext;
