import { Outlet } from 'react-router-dom';
import { AppBar } from './AppBar';
import { Box } from './Box';
import { Suspense } from 'react';

export const Layout = () => {
  return (
    <Box display="flex" flexDirection="column">
      <AppBar />
      <Suspense fallback={null}>
      <Outlet />
      </Suspense>
    </Box>
  );
};
