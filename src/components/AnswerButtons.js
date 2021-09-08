import React,{useContext,useState} from 'react'
import CorrectAnswerContext from '../context/CorrectAnswerContext'
import RoundOneCashContext from '../context/RoundOneCashContext'
import QuestionContext from '../context/QuestionContext'
import ResultButtonContext from '../context/ResultButtonContext'
import IncorrectAnswerContext from '../context/IncorrectAnswerContext'
import RoundContext from '../context/RoundContext'
import RoundTwoCashContext from '../context/RoundTwoCashContext'
import AudienceContext from '../context/AudienceContext'
import ColorContext from '../context/ColorContext'
import CallAFriendContext from '../context/CallAFriendContext'
import RoundTextContext from '../context/RoundTextContext'
import RoundPageContext from '../context/RoundPageContext'
import GameDisplayContext from '../context/GameDisplayContext'
import HomeScreenContext from '../context/HomeScreeContext'
import WinCounterContext from '../context/WinCounterContext'
import WinScreenDisplayContext from '../context/WinScreenDisplayContext'
import WinnerContext from '../context/WinnerContext'
import {valAssignment}  from '../utils/ButtonUtils'
import { parseEntities } from 'parse-entities'

const AnswerButtons = (props) => {

    
    const{audience} = useContext(AudienceContext)
    const{setGameScreen} = useContext(GameDisplayContext)
    const{setHomeScreen} = useContext(HomeScreenContext)
    const{round,setRound} = useContext(RoundContext)
    const{roundPageVisible,setRoundPageVisible} = useContext(RoundPageContext)
    const{roundText,setRoundText} = useContext(RoundTextContext)
    const{setWrongAnswer} = useContext(IncorrectAnswerContext)
    const {correctAnswer,setCorrectAnswer} = useContext(CorrectAnswerContext);
    const {setQuestion} = useContext(QuestionContext)
    const {resultButton,setResultButton} = useContext(ResultButtonContext)
    const {roundOneCash,setRoundOneCash}= useContext(RoundOneCashContext);
    const {roundTwoCash,setRoundTwoCash}= useContext(RoundTwoCashContext);
    const {isClicked,setIsClicked} = useContext(CallAFriendContext)
    const {winCounter,setWinCounter} = useContext(WinCounterContext)
    const {winner,setWinner} = useContext(WinnerContext)
    const {winScreenDisplay,setWinScreenDisplay} = useContext(WinScreenDisplayContext)
    const {color} = useContext(ColorContext)

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

const entityCleanupAndAssignment =(newQuestion,answer,incorrectAnswers,setQuestion,setCorrectAnswer,setWrongAnswer,resultButton,setResultButton)=>{
    let Question = parseEntities(newQuestion)
    let newAnswer = parseEntities(answer)
  
    let wrong = [...incorrectAnswers]
    let wrongAnswers = [];
  
    for(let i =0; i < wrong.length; i++){
        let cleanedWrongAnswer = wrong[i]
        cleanedWrongAnswer = parseEntities(cleanedWrongAnswer)
        wrongAnswers.push(cleanedWrongAnswer)
    }
    
    valAssignment(Question,newAnswer,wrongAnswers,setQuestion,setCorrectAnswer,setWrongAnswer,resultButton,setResultButton)
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

                entityCleanupAndAssignment(newQuestion,answer,incorrectAnswers,setQuestion,setCorrectAnswer,setWrongAnswer,resultButton,setResultButton)
                
                
                


            })
            .catch(err=>console.log(err))
}

const buttonsEnabled = ()=>{
    const buttons = [...resultButton];

    for(let i=0;i<buttons.length;i++)
    {
        buttons[i].disabled = false
    }
}

const winCheck = ()=>
{ 
     let i = winCounter.counter;
    let win = i + 1     
    console.log(win)
    
    if(win === 5)
    {
        setWinScreenDisplay({visibility:true})
        setGameScreen({visible:false});
        setWinner(true)
    }
    
}


    return (
        <div>
        <button disabled={props.disabled !== false} id="answerButtons" className={ props.selected === true ?"callAfriendPick choice":" choice"} value={props.answers} onClick={()=>
        {
           
            
            if(props.answers == correctAnswer)
            {
            
                colorChanger();
                apiFetch();
               
                if(round ===3)
                {
                    
                  
                    
                    

                    buttonsEnabled()
                    if(isClicked === true)
                    {
                        buttonColorReset()
                        setIsClicked(false)
                    }

                   winCheck();
                    
                }
            }
            else{

                
                wrongInput();
                apiFetch();
                if(round ===3)
                {
                    buttonsEnabled()
                    if(isClicked === true)
                    {
                        buttonColorReset()
                        setIsClicked(false)
                        
                    }

                    setGameScreen({visible:false});
                    setRoundText("Game Over");
                    setRoundPageVisible(true);
                    setRound(1)
                    setWinner(false)

                    let time = 0
                    const interval = setInterval(()=>{
                    let timer = time++

                        if(timer===2)
                        {
                            clearInterval(interval)
                            setRoundPageVisible(false)
                            setWinScreenDisplay({visibility:true})
                            //setHomeScreen(true)
                        }
                        
                    },1000)

                   
                }


            }
            
            
        }}>
            {props.answers}
        </button>
        </div>
    )
}



export default AnswerButtons
