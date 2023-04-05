import React, { FC, ReactElement } from 'react';
import { QuestionHeader } from '../question/_questionHeader';
import { Box } from '@mui/system';
import { QuestionDescription } from './_questionDescription';
import { QuestionFooter } from './_questionFooter';
import { IQuestion } from './interfaces/IQuestion';
import { Status } from '../addQuestionForm/enums/Status';
import { Difficulty } from '../addQuestionForm/enums/Difficulty';

export const Question: FC<IQuestion> = (props): ReactElement => {
  const {
    title,
    date,
    description,
    difficulty,
    status,
    onStatusChange,
    onClick,
  } = props;
  return (
    <Box
      display="flex"
      width="100%"
      justifyContent="flex-start"
      flexDirection="column"
      mb={4}
      p={2}
      sx={{
        width: '100%',
        backgroundColor: 'background.paper',
        borderRadius: '8px',
        border: '1px solid',
        borderColor: 'error.light',
      }}
    >
      <QuestionHeader />
      <QuestionDescription />
      <QuestionFooter />
    </Box>
  );
};
