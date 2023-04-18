import { Difficulty } from './../../addQuestionForm/enums/Difficulty';
import { Status } from '../../addQuestionForm/enums/Status';

export interface IQuestionAPI {
  id: string;
  date: string;
  title: string;
  description: string;
  status: `${Status}`;
  difficulty: `${Difficulty}`;
}
