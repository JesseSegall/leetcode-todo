import { QuestionCounterDifficultyType } from './../interfaces/IQuestionCounter';
import { Difficulty } from '../../addQuestionForm/enums/Difficulty';

export const emitCorrectBorderColors = (
  difficulty: QuestionCounterDifficultyType,
): string => {
  switch (difficulty) {
    case Difficulty.easy:
      return 'success.light';
    case Difficulty.medium:
      return 'warning.light';
    case Difficulty.hard:
      return 'error.light';
  }
};
