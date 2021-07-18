import React,{useContext,useState} from 'react'
import CorrectAnswerContext from '../context/CorrectAnswerContext'
import RoundOneCashContext from '../context/RoundOneCashContext'
import QuestionContext from '../context/QuestionContext'
import ResultButtonContext from '../context/ResultButtonContext'
import IncorrectAnswerContext from '../context/IncorrectAnswerContext'
import RoundContext from '../context/RoundContext'
import RoundTwoCashContext from '../context/RoundTwoCashContext'
import AudienceContext from '../context/AudienceContext'
import { valAssignment } from '../utils/ButtonUtils'

const AnswerButtons = (props) => {

    const{audience} = useContext(AudienceContext)
    const{round} = useContext(RoundContext)
    const{setWrongAnswer} = useContext(IncorrectAnswerContext)
    const {correctAnswer,setCorrectAnswer} = useContext(CorrectAnswerContext);
    const {setQuestion} = useContext(QuestionContext)
    const {resultButton,setResultButton} = useContext(ResultButtonContext)
    const {roundOneCash,setRoundOneCash}= useContext(RoundOneCashContext);
    const {roundTwoCash,setRoundTwoCash}= useContext(RoundTwoCashContext);

    const colorChanger =()=>
    {
        if(round===1){
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
    
    if(round===2){
        const cash = [...roundTwoCash];

      const selectedCash = cash.find((cash)=>{return cash.selected === true})

      for(let i=0; i<cash.length;i++)
      {
          cash[i].selected = false
      }
     
       let newSelectedCash =  selectedCash.id + 1;

       newSelectedCash = cash.find((cash)=>{return cash.id === newSelectedCash});

       newSelectedCash.selected = true;

       setRoundTwoCash(cash);
    }
    
    
    }

    
    const wrongInput =()=>
    {
        if(round===1){
        const cash = [...roundOneCash];

        for(let i=0; i<cash.length;i++)
        {
            cash[i].selected = false
        }
        const resetCash = cash.find((cash)=>{return cash.id === 1});

        resetCash.selected = true;

        setRoundOneCash(cash);
    }

    if(round===2){
        const cash = [...roundTwoCash];

        for(let i=0; i<cash.length;i++)
        {
            cash[i].selected = false
        }
        const resetCash = cash.find((cash)=>{return cash.id === 1});

        resetCash.selected = true;

        setRoundTwoCash(cash);
    }

    }

/*const buttonPopulate = (corr,wrong)=>
{
    let i = 0;
    let x=0;
    const existedIndex = [];
    
    const buttons = [...wrong]
    buttons.push(corr);
    const newButtons=[];

    setResultButton(buttons)

    while(i < buttons.length)
    {
        const rand = Math.floor((Math.random()*4));
        const obj = {id:1,answer:buttons[rand],selected:true}
        newButtons.splice(rand,0,buttons[i]);
        
        setResultButton
        i++
    }

  
    console.log("new buttons"+newButtons);
    console.log("buttons:"+buttons);

  const buttons = [...wrong];

   buttons.splice(rand,0,corr)
  setResultButton(buttons)

  console.log("rand:"+rand)
  console.log(buttons)
}*/

/*const valAssignment = (ques,corr,wrong)=>
{
  setQuestion(ques);
  setCorrectAnswer(corr);
  setWrongAnswer(wrong)

  buttonPopulate(corr,wrong)
}*/

const buttonColorReset = ()=>
{
    const button = [...resultButton];

    const resetBtn = button.find((btn)=>{return btn.selected === true});

    resetBtn.selected = false;

    setResultButton(button)
}


const apiFetch = ()=>
{
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


                
                valAssignment(newQuestion,answer,incorrectAnswers,setQuestion,setCorrectAnswer,setWrongAnswer,resultButton,setResultButton)
                


            })
            .catch(err=>console.log(err))
}




    return (
        <div>
        <button className={ props.selected === true ?"callAfriendPick choice":" choice"} value={props.answers} onClick={()=>
        {
        
            if(props.answers == correctAnswer)
            {
                colorChanger();
                apiFetch();
                buttonColorReset()
            }
            else{
                wrongInput();
                apiFetch();
                buttonColorReset()
            }
            
            
        }}>
            {props.answers}
        </button>
        </div>
    )
}

export default AnswerButtons
