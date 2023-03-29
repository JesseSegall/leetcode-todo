import React, { FC, ReactElement } from 'react';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { customTheme } from './theme/customTheme';
import { Dashboard } from './pages/dashboard/dashboard';

const App: FC = (): ReactElement => {
  return (
    <ThemeProvider theme={customTheme}>
      {/* This just resets the base CSS based on options provided */}
      <CssBaseline />
      <Dashboard />
    </ThemeProvider>
  );
};
export default App;
