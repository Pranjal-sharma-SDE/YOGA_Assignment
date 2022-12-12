import React, { useEffect, useState, useContext } from 'react';
import { getAuth, onAuthStateChanged } from "firebase/auth";

export const UserContext = React.createContext();

export const UserProvider = (props) => {
  const [session, setSession] = useState({
    user: null,
    loading: true,
    isAdmin: false,
  });
  const auth = getAuth();
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user)=> {
      let isAdmin = false;

      if (user) {
        const token =  user.getIdTokenResult();
        isAdmin = token.claims.admin;
      }

      setSession({ loading: false, user, isAdmin });
    });

    return () => unsubscribe();
  }, []);

  return (
    <UserContext.Provider value={session}>
      {!session.loading && props.children}
    </UserContext.Provider>
  );
};

  const useSession = () => {
  const session = useContext(UserContext);
  return session;
};
export default(useSession);

