import React, { FC, ReactElement } from 'react';
import { format } from 'date-fns';
import { Grid, Box } from '@mui/material';
import { QuestionCounter } from '../questionCounter/questionCounter';
import { Question } from '../question/question';

export const TaskArea: FC = (): ReactElement => {
  return (
    <Grid item md={8} px={4}>
      <Box mb={8} px={4}>
        <h2>
          Status of your LeetCode grind as of {format(new Date(), 'PPPP')}
        </h2>
      </Box>
      <Grid container display="flex" justifyContent="center">
        <Grid
          item
          display="flex"
          flexDirection="row"
          justifyContent="space-around"
          alignItems="center"
          md={10}
          xs={12}
          mb={8}
        >
          <QuestionCounter />
          <QuestionCounter />
          <QuestionCounter />
        </Grid>
        <Grid item display="flex" flexDirection="column" xs={10} md={8}>
          <Question />
          <Question />
        </Grid>
      </Grid>
    </Grid>
  );
};
