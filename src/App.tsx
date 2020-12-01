import React,{useState} from 'react';
import {Dificulty} from './api/api';
import {TOTAL_QUESTIONS,QuestionState,fetchQuestions,AnswerObject} from './api/api';
import QuestionCard from './components/QuestionCard';
import {GlobalStyle,Wrapper} from './App.styles';
import firebase from './firebase';



function App() {
 
  const messaging = firebase.messaging();
  messaging.requestPermission().then(()=>{
    return messaging.getToken()
  }).then((token)=>{
    console.log('Token: ',token);
  }).then((err)=>{
    console.log(err);
  })
   const [loading,setLoading] = useState(false);
   const [questions,setQuestions] = useState<QuestionState[]>([]);
   const [number,setNumber] = useState(0);
   const [userAnswers,setUserAnswers] = useState<AnswerObject[]>([]);
   const [score,setScore] = useState(0);
   const [gameover,setGameOver] = useState(true); 

  // console.log(questions); 

  const startQuiz = async() => {
    
    //  console.log("Start Quiz Function Called");
      setLoading(true);
      setGameOver(false);
      const quizes = await fetchQuestions(
        TOTAL_QUESTIONS,
        Dificulty.EASY
      );
      setQuestions(quizes);
      setScore(0);
      setUserAnswers([])
      setNumber(0); 
      setLoading(false);  
  };

  const checkAnswer = (e:React.MouseEvent<HTMLButtonElement>)=>{
    //console.log("Check Answer Function Called");
    if(!gameover){
      const answer = e.currentTarget.value;
      const correct = questions[number].correct_answer === answer;
      if(correct)setScore(prev=>prev+1);
      const answerObject = {
        question:questions[number].question,
        answer,
        correct,
        correctAnswer:questions[number].correct_answer,
      }
      setUserAnswers(prev=>[...prev,answerObject]);
    }
  };

  const nextQuestion = ()=>{
   // console.log("Next Question Function Called");
    const nextQuestion = number + 1;
    if(nextQuestion === TOTAL_QUESTIONS){
      setGameOver(true);
    }else{
      setNumber(nextQuestion);
    }

  };

  return (
    <>
    <GlobalStyle />
      <Wrapper>
      <div className="App">
        <h1>React Quiz App</h1>

        {gameover || userAnswers.length === TOTAL_QUESTIONS ? 
        <button className="start" onClick={startQuiz}>
          Start Quiz
        </button>: null}

        {!gameover ? <p className="score">{`Score:${score}`}</p>:null}

        {loading ? <p className="loading">Loading Question......</p>:null}
        {!loading && !gameover && (
          <QuestionCard
          questionNum = {number+1}
          totalQuestions={TOTAL_QUESTIONS}
          question={questions[number].question}
          answers = {questions[number].answers}
          userAnswer = {userAnswers ? userAnswers[number] : undefined}
          callback = {checkAnswer}
        />
        )}
       
        {!gameover && !loading && userAnswers.length === number +1 && number !== TOTAL_QUESTIONS -1?(
          <button className="next" onClick={nextQuestion}>Next Question</button>
        ):null }
        
      </div>
      </Wrapper>  
      
    </>
  );
}

export default App;

      