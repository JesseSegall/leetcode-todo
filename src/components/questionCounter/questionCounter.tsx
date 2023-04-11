import React, { FC, ReactElement } from 'react';
import { Avatar, Box, Typography } from '@mui/material';
import { IQuestionCounter } from './interfaces/IQuestionCounterStatus';
import { Difficulty } from '../addQuestionForm/enums/Difficulty';
import { emitCorrectLabel } from './helpers/emitCorrectLabel';
import { emitCorrectBorderColors } from './helpers/emitCorrectBorderColor';
import { Status } from '../addQuestionForm/enums/Status';
import PropTypes from 'prop-types';

export const QuestionCounter: FC<IQuestionCounter> = (props): ReactElement => {
  // Destructure

  const { status = Status.todo, count = 0 } = props;
  return (
    <>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        <Avatar
          sx={{
            backgroundColor: 'transparent',
            border: '5px solid',
            width: '96px',
            height: '96px',
            marginBottom: '16px',
            borderColor: `${emitCorrectBorderColors(status)}`,
          }}
        >
          <Typography color="#ffffff" variant="h4">
            {count}
          </Typography>
        </Avatar>
        <Typography
          color="#ffffff"
          fontWeight="bold"
          fontSize="20px"
          variant="h5"
        >
          {emitCorrectLabel(status)}
        </Typography>
      </Box>
    </>
  );
};

QuestionCounter.propTypes = {
  count: PropTypes.number,
  status: PropTypes.oneOf([Status.todo, Status.completed, Status.review]),
};
