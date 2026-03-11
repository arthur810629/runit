import axios from 'axios';
import { useEffect, useMemo, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { AuthContext } from '../contexts';
import routes from '../routes';
import { fetchUserData } from '../slices/userSlice';

function AuthProvider({ children }) {
  const dispatch = useDispatch();
  const signInStatus = JSON.parse(localStorage.getItem('signInStatus'));
  const [isLoggedIn, setLoggedIn] = useState(
    signInStatus ? signInStatus.status : false,
  );
  const [isAuthResolved, setAuthResolved] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchUserData())
      .unwrap()
      .then(() => {
        setLoggedIn(true);
      })
      .catch(() => {
        localStorage.removeItem('signInStatus');
        localStorage.removeItem('guestUserData');
        setLoggedIn(false);
      })
      .finally(() => {
        setAuthResolved(true);
      });
  }, [dispatch]);

  const memoizedValue = useMemo(
    () => ({
      signOut: async () => {
        await axios.post(routes.signOutPath());
        localStorage.removeItem('signInStatus');
        setLoggedIn(false);
        navigate(routes.landingPath());
      },

      signIn: () => {
        localStorage.removeItem('guestUserData');
        setAuthResolved(false);
        dispatch(fetchUserData())
          .unwrap()
          .then(() => {
            setAuthResolved(true);
          })
          .catch((serializedError) => {
            setAuthResolved(true);
            const error = new Error(serializedError.message);
            error.name = serializedError.name;
            throw error;
          });
        localStorage.setItem('signInStatus', JSON.stringify({ status: true }));
        setLoggedIn(true);
      },
      isLoggedIn,
      isAuthResolved,
    }),
    [dispatch, isAuthResolved, isLoggedIn, navigate],
  );

  return (
    <AuthContext.Provider value={memoizedValue}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
