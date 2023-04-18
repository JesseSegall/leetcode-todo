import React, { FC, useContext } from 'react';
import { Button } from '@mui/material';
import { ShowCompletedContext } from '../../context';

export const ShowHideCompletedButton: FC = () => {
  const { showCompleted, setShowCompleted } = useContext(ShowCompletedContext);

  const handleClick = () => {
    setShowCompleted(!showCompleted);
  };

  return (
    <Button variant="outlined" onClick={handleClick}>
      {showCompleted ? 'Hide Completed Questions' : 'Show Completed Questions'}
    </Button>
  );
};
