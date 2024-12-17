import {createContext, useContext} from 'react';

export const QuizContext = createContext({
    nextQuestion:() => {},
    currentQuestion:() => {},
    isCorrect:(coorectAns) => {},
})

export const useQuizContext = () => {
    return useContext(QuizContext)
}

export const Quizprovider = QuizContext.Provider