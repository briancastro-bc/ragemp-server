import { Question, } from '../../domain/models/QuestionModel';
import { QuizRepository, } from '../../domain/repositories/QuizRepository';

export class JsonQuizRepository implements QuizRepository {
  findAllQuestions(): Array<Question> {
    throw new Error('Method not implemented.');
  }

  findQuestionById(id: number): Question {
    throw new Error('Method not implemented.');
  }
}