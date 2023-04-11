import React, { FC, ReactElement } from 'react';
import { Box, Switch, FormControlLabel, Button } from '@mui/material';
import PropTypes from 'prop-types';
import { IQuestionFooter } from './interfaces/iQuestionFooter';
import { Status } from '../addQuestionForm/enums/Status';

export const QuestionFooter: FC<IQuestionFooter> = (props): ReactElement => {
  const {
    id,
    status,
    onStatusChange = (e) => console.log(e),
    onClick = (e) => console.log(e),
  } = props;
  console.log(Status.review);
  console.log(status);
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
        control={
          <Switch
            onChange={(e) => onStatusChange(e, id)}
            color="info"
            defaultChecked={status === Status.review}
          />
        }
      ></FormControlLabel>

      <Button
        variant="contained"
        color="success"
        size="small"
        sx={{ color: '#ffffff' }}
        onClick={(e) => onClick(e, id)}
      >
        Mark Complete
      </Button>
    </Box>
  );
};

QuestionFooter.propTypes = {
  onStatusChange: PropTypes.func,
  onClick: PropTypes.func,
  id: PropTypes.string.isRequired,
  status: PropTypes.string,
};
