import React, { FC, ReactElement } from 'react';
import { QuestionHeader } from '../question/_questionHeader';
import { Box } from '@mui/system';
import { QuestionDescription } from './_questionDescription';
import { QuestionFooter } from './_questionFooter';
import { IQuestion } from './interfaces/IQuestion';
import { Status } from '../addQuestionForm/enums/Status';
import { Difficulty } from '../addQuestionForm/enums/Difficulty';
import { renderDifficultyBorderColor } from './helpers/renderDifficultyBorderColor';
import PropTypes from 'prop-types';

export const Question: FC<IQuestion> = (props): ReactElement => {
  const {
    title,
    date,
    description,
    difficulty = Difficulty.easy,
    status = Status.completed,
    onStatusChange,
    onClick,
    id,
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
        borderColor: renderDifficultyBorderColor(difficulty),
      }}
    >
      <QuestionHeader title={title} date={date} />
      <QuestionDescription description={description} />
      <QuestionFooter
        onClick={onClick}
        onStatusChange={onStatusChange}
        id={id}
        status={status}
      />
    </Box>
  );
};

Question.propTypes = {
  title: PropTypes.string,
  date: PropTypes.instanceOf(Date),
  description: PropTypes.string,
  difficulty: PropTypes.string,
  status: PropTypes.string,
  onStatusChange: PropTypes.func,
  onClick: PropTypes.func,
};
