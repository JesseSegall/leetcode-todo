import { Difficulty } from './../../addQuestionForm/enums/Difficulty';

export type QuestionCounterDifficultyType =
  | Difficulty.easy
  | Difficulty.medium
  | Difficulty.hard;

export interface IQuestionBorderColor {
  count?: number;
  difficulty?: QuestionCounterDifficultyType;
}
