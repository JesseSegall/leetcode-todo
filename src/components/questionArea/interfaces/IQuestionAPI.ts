import { Difficulty } from './../../addQuestionForm/enums/Difficulty';
import { Status } from '../../addQuestionForm/enums/Status';
// Template literals so only enums can be passed to status and diff
export interface IQuestionAPI {
  id: string;
  date: string;
  title: string;
  description: string;
  status: `${Status}`;
  difficulty: `${Difficulty}`;
}
