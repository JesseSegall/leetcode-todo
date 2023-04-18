import React, {
  FC,
  useState,
  ReactElement,
  useEffect,
  useContext,
} from 'react';
import {
  Box,
  Typography,
  Stack,
  LinearProgress,
  Button,
  Alert,
  AlertTitle,
} from '@mui/material';
import { ShowHideCompletedButton } from '../questionArea/showCompletedButton';

import { QuestionStatusChangeContext } from '../../context';
import { QuestionTitleField } from './_questionTitleField';
import { QuestionDescriptionField } from './_questionDescriptionField';
import { QuestionReviewDate } from './_questionReviewDate';
import { QuestionSelectField } from './_questionSelectField';
import { Status } from './enums/Status';
import { Difficulty } from './enums/Difficulty';
import { useMutation } from '@tanstack/react-query';
import { sendApiRequest } from '../../helpers/sendApiRequest';
import { ICreateQuestion } from '../questionArea/interfaces/ICreateQuestion';

export const AddQuestionForm: FC = (): ReactElement => {
  // Declaring States

  const [title, setTitle] = useState<string | undefined>(undefined);
  const [description, setDescription] = useState<string | undefined>(undefined);
  const [date, setDate] = useState<Date | null>(new Date());
  const [status, setStatus] = useState<string>(Status.todo);
  const [difficulty, setDifficulty] = useState<string>(Difficulty.easy);
  const [showSuccess, setShowSuccess] = useState<boolean>(false);
  const questionUpdatedContext = useContext(QuestionStatusChangeContext);

  // Create question mutation

  const createQuestionMutation = useMutation((data: ICreateQuestion) =>
    sendApiRequest('http://localhost:3200/questions', 'POST', data),
  );
  function clearFormFields() {
    setTitle(undefined);
    setDescription('');
    setDate(new Date());
    setStatus(Status.todo);
    setDifficulty(Difficulty.easy);
  }
  function createQuestionHandler() {
    if (!title || !date || !description) {
      return;
    }

    const question: ICreateQuestion = {
      title,
      description,
      status,
      date: date.toString(),
      difficulty,
    };

    createQuestionMutation.mutate(question);
    clearFormFields();
  }

  useEffect(() => {
    if (createQuestionMutation.isSuccess) {
      setShowSuccess(true);
      questionUpdatedContext.toggle();
      clearFormFields();
    }

    const successTimeout = setTimeout(() => {
      setShowSuccess(false);
    }, 3000);

    return () => {
      clearTimeout(successTimeout);
    };
  }, [createQuestionMutation.isSuccess]);

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="flex-start"
      width="100%"
      px={4}
      my={6}
    >
      {showSuccess && (
        <Alert severity="success" sx={{ width: '100%', marginBottom: '16px' }}>
          <AlertTitle>Success!</AlertTitle>
          Question has been added!
        </Alert>
      )}

      <Typography mb={2} component="h2" variant="h6">
        Add A Question
      </Typography>

      <Stack sx={{ width: '100%' }} spacing={2}>
        <QuestionTitleField
          onChange={(e) => setTitle(e.target.value)}
          disabled={createQuestionMutation.isLoading}
          titleValue={title}
        />
        <QuestionDescriptionField
          onChange={(e) => setDescription(e.target.value)}
          disabled={createQuestionMutation.isLoading}
          descriptionValue={description}
        />
        <QuestionReviewDate
          value={date}
          onChange={(date) => setDate(date)}
          disabled={createQuestionMutation.isLoading}
        />
        <Stack sx={{ width: '100%' }} direction="row" spacing={2}>
          <QuestionSelectField
            label="Status"
            name="Status"
            value={status}
            onChange={(e) => setStatus(e.target.value as string)}
            items={[
              {
                value: Status.todo,
                label: Status.todo.toUpperCase(),
              },
              {
                value: Status.review,
                label: Status.review.toUpperCase(),
              },
              {
                value: Status.completed,
                label: Status.completed.toUpperCase(),
              },
            ]}
            disabled={createQuestionMutation.isLoading}
          />
          <QuestionSelectField
            label="Difficulty"
            name="Difficulty"
            value={difficulty}
            onChange={(e) => setDifficulty(e.target.value as string)}
            items={[
              {
                value: Difficulty.easy,
                label: Difficulty.easy.toLocaleUpperCase(),
              },
              {
                value: Difficulty.medium,
                label: Difficulty.medium.toLocaleUpperCase(),
              },
              {
                value: Difficulty.hard,
                label: Difficulty.hard.toLocaleUpperCase(),
              },
            ]}
            disabled={createQuestionMutation.isLoading}
          />
        </Stack>
        {/* Only loads prog bar if mutation func fires */}
        {createQuestionMutation.isLoading && <LinearProgress />}

        <Button
          disabled={!title || !description || !date || !status || !difficulty}
          onClick={createQuestionHandler}
          variant="contained"
          size="large"
          fullWidth
        >
          Add a Question
        </Button>
        <ShowHideCompletedButton />
      </Stack>
    </Box>
  );
};
