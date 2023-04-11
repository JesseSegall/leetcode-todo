import { IQuestionFooter } from './iQuestionFooter';
import { IQuestionHeader } from './IQuestionHeader';
import { IQuestionDescription } from './IQuestionDescription';

export interface IQuestion
  extends IQuestionDescription,
    IQuestionFooter,
    IQuestionHeader {
  difficulty?: string;
}
