import { QuestionStatusChangedContextProvider } from './QuestionStatusChangeContext/QuestionStatusChangeContext';
import { ShowCompletedContextProvider } from './ShowCompletedContext/ShowCompletedContext';
export const rootContext = [
  QuestionStatusChangedContextProvider,
  ShowCompletedContextProvider,
];
