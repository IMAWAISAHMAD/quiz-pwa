import {shuffleArray} from '../utils/util';

export const TOTAL_QUESTIONS = 10;

export type Question = {
    category: string,
    correct_answer: string,
    difficulty: string,
    incorrect_answers: string[],
    question: string,
    type: string,
}

export type QuestionState = Question & {answers: string[]}

export enum Dificulty {
    EASY = 'easy',
    MEDIUM = 'medium',
    HARD = 'hard',
}

export type AnswerObject={
    question:string,
    answer: string,
    correct:boolean,
    correctAnswer:string
  }
  
export const fetchQuestions = async(amount: number,difficulty: Dificulty) =>{
    const apiUrl = `https://opentdb.com/api.php?amount=${amount}&category=18&difficulty=${difficulty}&type=multiple`;
    const response =  await(await fetch(apiUrl)).json();
    return response.results.map((question: Question)=>(
        {
            ...question,
            answers:shuffleArray([
                ...question.incorrect_answers,
                question.correct_answer
            ])

        }
    ));
   
};