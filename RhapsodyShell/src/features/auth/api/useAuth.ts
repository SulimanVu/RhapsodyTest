import { useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';

import { auth } from '@/shared/firebase';

export const useAuth = () => {
  const navigate = useNavigate();

  const [user, loading, error] = useAuthState(auth);

  useEffect(() => {
    if (!user) {
      navigate('/login');
    }
  }, []);

  return { user, loading, error };
};
