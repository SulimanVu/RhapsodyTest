import { useAuthState } from 'react-firebase-hooks/auth';
import { Box, Container, CircularProgress } from '@mui/material';

import LoginForm from '@/features/auth/ui/LoginForm';
import UserProfile from '@/features/auth/ui/UserProfile';

import { auth } from 'shell/firebase';

const Login = () => {
  const [user, loading, error] = useAuthState(auth);

  if (loading) return <CircularProgress />;

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          mt: 8,
        }}
      >
        {user ? (
          <UserProfile user={user} />
        ) : (
          <LoginForm loading={loading} error={error} />
        )}
      </Box>
    </Container>
  );
};

export default Login;
