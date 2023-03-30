import React, { FC, ReactElement } from 'react';
import { TextField } from '@mui/material';
import { ITextField } from './interfaces/ITextField';
import PropTypes from 'prop-types';
export const QuestionTitleField: FC<ITextField> = (props): ReactElement => {
  // Destructuring the props
  const { onChange = (e) => console.log(e), disabled = false } = props;
  return (
    <TextField
      id="title"
      label="Question Title"
      placeholder="Question Title"
      variant="outlined"
      size="small"
      name="title"
      fullWidth
      disabled={disabled}
      onChange={onChange}
    />
  );
};

QuestionTitleField.propTypes = {
  onChange: PropTypes.func,
  disabled: PropTypes.bool,
};
