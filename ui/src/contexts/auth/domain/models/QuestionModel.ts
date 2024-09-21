import { Answer, } from './AnswerModel';

export class Question {
  id: number;
  image: string;
  title: string;
  description: string;
  question: string;
  correctAnswer: number;
  answers: Array<Answer>;
}