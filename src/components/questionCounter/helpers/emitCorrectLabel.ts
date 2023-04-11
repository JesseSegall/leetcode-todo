import { QuestionCounterStatusType } from './../interfaces/IQuestionCounterStatus';

import { Status } from '../../addQuestionForm/enums/Status';
export const emitCorrectLabel = (status: QuestionCounterStatusType): string => {
  switch (status) {
    case Status.todo:
      return `Todo`;
    case Status.review:
      return `In Review`;
    case Status.completed:
      return `Completed`;
  }
};
