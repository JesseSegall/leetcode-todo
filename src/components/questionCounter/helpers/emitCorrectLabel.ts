import { QuestionCounterDifficultyType } from '../interfaces/IQuestionCounter';
import { Difficulty } from '../../addQuestionForm/enums/Difficulty';
export const emitCorrectLabel = (
  difficulty: QuestionCounterDifficultyType,
): string => {
  switch (difficulty) {
    case Difficulty.easy:
      return `Easy`;
    case Difficulty.medium:
      return `Medium`;
    case Difficulty.hard:
      return `Hard`;
  }
};
