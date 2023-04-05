import React, { FC, ReactElement } from 'react';
import { Box, Typography } from '@mui/material';

import { IQuestionDescription } from './interfaces/IQuestionDescription';
import PropTypes from 'prop-types';

export const QuestionDescription: FC<IQuestionDescription> = (
  props,
): ReactElement => {
  const { description = 'Here is a discription of a LeetCode question.' } =
    props;
  return (
    <Box>
      <Typography>{description}</Typography>
    </Box>
  );
};

QuestionDescription.propTypes = {
  description: PropTypes.string,
};
