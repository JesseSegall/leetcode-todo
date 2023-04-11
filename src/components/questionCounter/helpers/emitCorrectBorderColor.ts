import { QuestionCounterStatusType } from './../interfaces/IQuestionCounterStatus';

import { Status } from '../../addQuestionForm/enums/Status';

export const emitCorrectBorderColors = (
  status: QuestionCounterStatusType,
): string => {
  switch (status) {
    case Status.todo:
      return 'error.light';
    case Status.review:
      return 'info';
    case Status.completed:
      return 'success.light';
  }
};
