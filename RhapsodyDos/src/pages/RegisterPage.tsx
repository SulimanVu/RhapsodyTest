import { Box, Container } from '@mui/material';

import RegisterForm from '@/features/auth/ui/RegisterForm';

const Register = () => {
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
        <RegisterForm />
      </Box>
    </Container>
  );
};

export default Register;
