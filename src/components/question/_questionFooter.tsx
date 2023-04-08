import React, { FC, ReactElement } from 'react';
import { Box, Switch, FormControlLabel, Button } from '@mui/material';
import PropTypes from 'prop-types';
import { IQuestionFooter } from './interfaces/iQuestionFooter';

export const QuestionFooter: FC<IQuestionFooter> = (props): ReactElement => {
  const {
    onStatusChange = (e) => console.log(e),
    onClick = (e) => console.log(e),
  } = props;
  return (
    <Box
      display="flex"
      width="100%"
      justifyContent="space-between "
      mt={4}
      alignItems="center"
    >
      <FormControlLabel
        label="Needs Review"
        control={<Switch color="info" onChange={(e) => onStatusChange(e)} />}
      ></FormControlLabel>

      <Button
        variant="contained"
        color="success"
        size="small"
        sx={{ color: '#ffffff' }}
        onClick={(e) => onClick(e)}
      >
        Mark Complete
      </Button>
    </Box>
  );
};

QuestionFooter.propTypes = {
  onStatusChange: PropTypes.func,
  onClick: PropTypes.func,
};
