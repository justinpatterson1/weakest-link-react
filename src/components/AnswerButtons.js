import React,{useContext} from 'react'
import CorrectAnswerContext from '../context/CorrectAnswerContext'
import RoundOneCashContext from '../context/RoundOneCashContext'
import QuestionContext from '../context/QuestionContext'
import ResultButtonContext from '../context/ResultButtonContext'
import IncorrectAnswerContext from '../context/IncorrectAnswerContext'

const AnswerButtons = (props) => {

    const{setWrongAnswer} = useContext(IncorrectAnswerContext)
    const {correctAnswer,setCorrectAnswer} = useContext(CorrectAnswerContext);
    const {setQuestion} = useContext(QuestionContext)
    const {setResultButton} = useContext(ResultButtonContext)
    const {roundOneCash,setRoundOneCash}= useContext(RoundOneCashContext);
    

    const colorChanger =()=>
    {
        const cash = [...roundOneCash];

      const selectedCash = cash.find((cash)=>{return cash.selected === true})

      for(let i=0; i<cash.length;i++)
      {
          cash[i].selected = false
      }
     
       let newSelectedCash =  selectedCash.id + 1;

       newSelectedCash = cash.find((cash)=>{return cash.id === newSelectedCash});

       newSelectedCash.selected = true;

       setRoundOneCash(cash);

    
    }

    
    const wrongInput =()=>
    {
        const cash = [...roundOneCash];

        for(let i=0; i<cash.length;i++)
        {
            cash[i].selected = false
        }
        const resetCash = cash.find((cash)=>{return cash.id === 1});

        resetCash.selected = true;

        setRoundOneCash(cash);

    }

    const buttonPopulate = (corr,wrong)=>
{
  const rand = Math.floor((Math.random()*4));
  
  const buttons = [...wrong];

   buttons.splice(rand,0,corr)
  setResultButton(buttons)

  console.log("rand:"+rand)
  console.log(buttons)
}

const valAssignment = (ques,corr,wrong)=>
{
  setQuestion(ques);
  setCorrectAnswer(corr);
  setWrongAnswer(wrong)

  buttonPopulate(corr,wrong)
}




    return (
        <button className="choice" value={props.answers} onClick={()=>
        {
            if(props.answers == correctAnswer)
            {
                colorChanger();

                    const ENDPOINT ="https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=multiple";
                    fetch(ENDPOINT)
                    .then((res)=>{
                        return res.json();
                    })
                    .then((json)=>{
                    const rand = Math.floor((Math.random() * 10) + 1);
                        /*Created api for trivia question, set correct answer and wrong answer into one state (resultButton)*/ 
                        const newQuestion = json.results[rand].question;
                        const answer = json.results[rand].correct_answer;
                        const incorrectAnswers = json.results[rand].incorrect_answers;


                        
                        valAssignment(newQuestion,answer,incorrectAnswers)
                        


                    })
                    .catch(err=>console.log(err))
            }
            else{
                wrongInput();
            }
            
        }}>
            {props.answers}
        </button>
    )
}

export default AnswerButtons
