import React, { FC, ReactElement } from 'react';
import { Box, Typography, Stack } from '@mui/material';

import { QuestionTitleField } from './_questionTitleField';
import { QuestionDescriptionField } from './_questionDescriptionField';
import { QuestionReviewDate } from './_questionReviewDate';
import { QuestionSelectField } from './_questionSelectField';
import { Status } from './enums/Status';
import { Difficulty } from './enums/Difficulty';

export const AddQuestionForm: FC = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="flex-start"
      width="100%"
      px={4}
      my={6}
    >
      <Typography mb={2} component="h2" variant="h6">
        Add A Question
      </Typography>

      <Stack sx={{ width: '100%' }} spacing={2}>
        <QuestionTitleField />
        <QuestionDescriptionField />
        <QuestionReviewDate />
        <Stack sx={{ width: '100%' }} direction="row" spacing={2}>
          <QuestionSelectField
            label="Status"
            name="Status"
            items={[
              {
                value: Status.todo,
                label: Status.todo.toUpperCase(),
              },
              {
                value: Status.review,
                label: Status.review.toUpperCase(),
              },
            ]}
          />
          <QuestionSelectField
            label="Difficulty"
            name="Difficulty"
            items={[
              {
                value: Difficulty.easy,
                label: Difficulty.easy.toLocaleUpperCase(),
              },
              {
                value: Difficulty.medium,
                label: Difficulty.medium.toLocaleUpperCase(),
              },
              {
                value: Difficulty.hard,
                label: Difficulty.hard.toLocaleUpperCase(),
              },
            ]}
          />
        </Stack>
      </Stack>
    </Box>
  );
};
