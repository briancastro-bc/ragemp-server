import { Question, } from '../models/QuestionModel';

export interface QuizRepository {
  findAllQuestions(): Array<Question>;
  findQuestionById(id: number): Question;
}