import { Difficulty } from './../../addQuestionForm/enums/Difficulty';

export type QuestionCounterDifficultyType =
  | Difficulty.easy
  | Difficulty.medium
  | Difficulty.hard;

export interface IQuestionCounter {
  count?: number;
  difficulty?: QuestionCounterDifficultyType;
}
