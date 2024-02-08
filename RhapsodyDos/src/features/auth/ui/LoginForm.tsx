import { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  Box,
  Button,
  Grid,
  Link,
  TextField,
  Typography,
  CircularProgress,
} from '@mui/material';

import { logInWithEmailAndPassword, signInWithGoogle } from 'shell/firebase';

const LoginForm = ({ loading, error }: any) => {
  const [formState, setFormState] = useState({
    email: '',
    password: '',
  });

  const handleInputChange = (event: any) => {
    const { name, value } = event.target;
    setFormState((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleLogin = async () => {
    try {
      setFormState((prevState) => ({ ...prevState, isLoading: true }));
      await logInWithEmailAndPassword(formState.email, formState.password);
    } catch (error: any) {
      setFormState((prevState) => ({ ...prevState, error: error.message }));
    } finally {
      setFormState((prevState) => ({ ...prevState, isLoading: false }));
    }
  };

  const { email, password } = formState;

  return (
    <>
      <Typography component="h1" variant="h5">
        Sign in
      </Typography>
      <Box sx={{ mt: 1, width: '100%' }}>
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="email"
          label="Email Address"
          name="email"
          autoComplete="email"
          autoFocus
          value={email}
          onChange={handleInputChange}
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          name="password"
          label="Password"
          type="password"
          id="password"
          autoComplete="current-password"
          value={password}
          onChange={handleInputChange}
        />
        {error && <Typography color="error">{error}</Typography>}
        <Button
          type="button"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
          onClick={handleLogin}
          disabled={loading}
        >
          {loading ? <CircularProgress size={24} /> : 'Login'}
        </Button>
        <Button
          fullWidth
          variant="contained"
          onClick={signInWithGoogle}
          disabled={loading}
        >
          Login with Google
        </Button>
        <Grid container justifyContent="space-between" sx={{ mt: 2 }}>
          <Grid item>
            <Link component={RouterLink} to="/login/reset-password" variant="body2">
              Forgot password?
            </Link>
          </Grid>
          <Grid item>
            <Link component={RouterLink} to="/login/register" variant="body2">
              Don't have an account? Register
            </Link>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default LoginForm;
