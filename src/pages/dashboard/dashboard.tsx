import React, { FC, ReactElement } from 'react';
import { Grid } from '@mui/material';
import { Sidebar } from '../../components/sidebar/sidebar';
import { QuestionArea } from '../../components/questionArea/questionArea';

export const Dashboard: FC = (): ReactElement => {
  return (
    <Grid container minHeight="100vh" p={0} m={0}>
      <QuestionArea />
      <Sidebar />
    </Grid>
  );
};
