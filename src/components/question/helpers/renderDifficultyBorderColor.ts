import { Difficulty } from '../../addQuestionForm/enums/Difficulty';

export const renderDifficultyBorderColor = (difficulty: string): string => {
  switch (difficulty) {
    case Difficulty.easy:
      return 'success.light';
    case Difficulty.medium:
      return 'warning.light';
    case Difficulty.hard:
      return 'error.light';
    default:
      return 'grey.900';
  }
};
