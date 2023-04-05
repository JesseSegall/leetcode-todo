import React, { FC, ReactElement } from 'react';
import { Box, Chip, Typography } from '@mui/material';
import { IQuestionHeader } from './interfaces/IQuestionHeader';
import format from 'date-fns/format';
import PropTypes from 'prop-types';

export const QuestionHeader: FC<IQuestionHeader> = (props): ReactElement => {
  //Destructure

  const { title = 'Default Title', date = new Date() } = props;
  return (
    <Box display="flex" width="100%" justifyContent="space-between" mb={3}>
      <Box>
        <Typography variant="h6">{title}</Typography>
      </Box>
      <Box>
        <Chip variant="outlined" label={format(date, 'PPP')} />
      </Box>
    </Box>
  );
};

QuestionHeader.propTypes = {
  title: PropTypes.string,
  date: PropTypes.instanceOf(Date),
};
