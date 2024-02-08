import { Avatar, Box, Button, Typography } from '@mui/material';

import { logout } from 'shell/firebase';

const UserProfile = ({ user }: any) => {
  return (
    <>
      <Avatar src={user.photoURL} sx={{ width: 56, height: 56 }} />
      <Typography component="h1" variant="h5">
        Welcome, {user.displayName || 'User'}
      </Typography>
      {user?.email}
      <Box sx={{ mt: 1, width: '100%' }}>
        <Button fullWidth variant="outlined" sx={{ mb: 2 }} onClick={logout}>
          Logout
        </Button>
      </Box>
    </>
  );
};

export default UserProfile;
