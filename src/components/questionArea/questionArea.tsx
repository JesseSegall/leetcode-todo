import React, { FC, ReactElement, useContext, useEffect } from 'react';
import { format } from 'date-fns';
import { ShowCompletedContext } from '../../context';
import { Grid, Box, Alert, LinearProgress } from '@mui/material';
import { QuestionCounter } from '../questionCounter/questionCounter';
import { Question } from '../question/question';
import { useQuery, useMutation } from '@tanstack/react-query';
import { sendApiRequest } from '../../helpers/sendApiRequest';
import { IQuestionAPI } from './interfaces/IQuestionAPI';
import { Status } from '../addQuestionForm/enums/Status';
import { IUpdateQuestion } from '../addQuestionForm/interfaces/IUpdateQuestion';
import { countQuestions } from './helpers/countQuestions';
import { QuestionStatusChangeContext } from '../../context';

export const QuestionArea: FC = (): ReactElement => {
  const questionsUpdatedContext = useContext(QuestionStatusChangeContext);

  const { showCompleted } = useContext(ShowCompletedContext);

  const { error, isLoading, data, refetch } = useQuery(
    ['question'],
    async () => {
      return await sendApiRequest<IQuestionAPI[]>(
        'http://localhost:3200/questions',
        'GET',
      );
    },
  );

  // Update question mutation

  const updateQuestionMutation = useMutation((data: IUpdateQuestion) =>
    sendApiRequest('http://localhost:3200/questions', 'PUT', data),
  );

  useEffect(() => {
    refetch();
  }, [questionsUpdatedContext.updated]);

  useEffect(() => {
    if (updateQuestionMutation.isSuccess) {
      questionsUpdatedContext.toggle();
    }
  }, [updateQuestionMutation.isSuccess]);

  function onStatusChangeHandler(
    e: React.ChangeEvent<HTMLInputElement>,
    id: string,
  ) {
    updateQuestionMutation.mutate({
      id,
      status: e.target.checked ? Status.review : Status.todo,
    });
  }

  function markCompleteHandler(
    e:
      | React.MouseEvent<HTMLButtonElement>
      | React.MouseEvent<HTMLAnchorElement>,
    id: string,
  ) {
    updateQuestionMutation.mutate({
      id,
      status: Status.completed,
    });
  }

  return (
    <Grid item md={8} px={4}>
      <Box mb={8} px={4}>
        <h2>
          Status of your LeetCode grind as of {format(new Date(), 'PPPP')}
        </h2>
      </Box>
      <Grid container display="flex" justifyContent="center">
        <Grid
          item
          display="flex"
          flexDirection="row"
          justifyContent="space-around"
          alignItems="center"
          md={10}
          xs={12}
          mb={8}
        >
          <QuestionCounter
            count={data ? countQuestions(data, Status.todo) : undefined}
            status={Status.todo}
          />
          <QuestionCounter
            status={Status.review}
            count={data ? countQuestions(data, Status.review) : undefined}
          />
          <QuestionCounter
            status={Status.completed}
            count={data ? countQuestions(data, Status.completed) : undefined}
          />
        </Grid>

        <Grid item display="flex" flexDirection="column" xs={10} md={8}>
          <>
            {error && (
              <Alert severity="error">
                There was an error fetching your tasks
              </Alert>
            )}

            {!error && Array.isArray(data) && data.length === 0 && (
              <Alert severity="warning">
                You do not have any questions created yet. Start by adding a
                question!
              </Alert>
            )}
            {isLoading ? (
              <LinearProgress />
            ) : (
              Array.isArray(data) &&
              data.length > 0 &&
              data.map((each, index) => {
                return each.status === Status.todo ||
                  each.status === Status.review ||
                  (showCompleted && each.status === Status.completed) ? (
                  <Question
                    key={index + each.difficulty}
                    id={each.id}
                    title={each.title}
                    date={new Date(each.date)}
                    description={each.description}
                    difficulty={each.difficulty}
                    onStatusChange={onStatusChangeHandler}
                    status={each.status}
                    onClick={markCompleteHandler}
                  />
                ) : (
                  false
                );
              })
            )}
          </>
        </Grid>
      </Grid>
    </Grid>
  );
};
