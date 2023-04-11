import React, { FC, ReactElement } from 'react';
import { Avatar, Box, Typography } from '@mui/material';
import { IQuestionBorderColor } from './interfaces/IQuestionBorderColor';
import { Difficulty } from '../addQuestionForm/enums/Difficulty';
import { emitCorrectLabel } from './helpers/emitCorrectLabel';
import { emitCorrectBorderColors } from './helpers/emitCorrectBorderColor';
import PropTypes from 'prop-types';

export const QuestionCounter: FC<IQuestionBorderColor> = (
  props,
): ReactElement => {
  // Destructure

  const { difficulty = Difficulty.easy, count = 0 } = props;
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
            borderColor: `${emitCorrectBorderColors(difficulty)}`,
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
          {emitCorrectLabel(difficulty)}
        </Typography>
      </Box>
    </>
  );
};

QuestionCounter.propTypes = {
  count: PropTypes.number,
  difficulty: PropTypes.oneOf([
    Difficulty.easy,
    Difficulty.medium,
    Difficulty.hard,
  ]),
};
