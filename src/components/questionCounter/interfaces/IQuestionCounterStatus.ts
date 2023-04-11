import { Status } from '../../addQuestionForm/enums/Status';

export type QuestionCounterStatusType =
  | Status.todo
  | Status.review
  | Status.completed;

export interface IQuestionCounter {
  count?: number;
  status?: QuestionCounterStatusType;
}
