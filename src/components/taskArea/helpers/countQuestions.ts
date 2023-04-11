import { QuestionCounterStatusType } from './../../questionCounter/interfaces/IQuestionCounterStatus';
import { IQuestionAPI } from '../interfaces/IQuestionAPI';

export const countQuestions = (
  questions: IQuestionAPI[],
  status: QuestionCounterStatusType,
): number => {
  if (!Array.isArray(questions)) {
    return 0;
  }

  const totalQuestions = questions.filter((question) => {
    return question.status === status;
  });

  return totalQuestions.length;
};
