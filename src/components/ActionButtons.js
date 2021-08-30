import React,{useContext,useState} from 'react'
import {FaQuestion,FaPause,} from 'react-icons/fa'
import {ImPhone} from 'react-icons/im'
import {BsPlayFill} from 'react-icons/bs'
import { timeCheck } from '../utils/time'
import TimeContext from '../context/TimeContext'
import BankContext from '../context/BankContext'
import RoundContext from '../context/RoundContext'
import TimeTwoContext from '../context/TimeTwoContext'
import IncorrectAnswerContext from '../context/IncorrectAnswerContext'
import CorrectAnswerContext from '../context/CorrectAnswerContext'
import ResultButtonContext from '../context/ResultButtonContext'
import AudienceContext from '../context/AudienceContext'
import AudienceGraphContext from '../context/AudienceGraphContext'
import GraphVisibilityContext from '../context/GraphVisibilityContext'
import ColorContext from '../context/ColorContext'
import CallAFriendContext from '../context/CallAFriendContext'
import PauseContext from '../context/PauseContext'
import HomeScreenContext from '../context/HomeScreeContext'
import RoundTextContext from '../context/RoundTextContext'
import RoundPageContext from '../context/RoundPageContext'
import GameDisplayContext from '../context/GameDisplayContext'
import CharacterDisplayContext from '../context/CharacterDisplayContext'
import CharacterPageContext from '../context/CharacterPageContext'
import StartTimerContext from '../context/StartTimerContext'
import PauseScreenContext from '../context/PauseScreenContext';
    

const ActionButtons = () => {

    const {setIsClicked} = useContext(CallAFriendContext)
    const {setColor} = useContext(ColorContext)
    const {audience,setAudience} = useContext(AudienceContext)
    const {graphData,setGraphData} = useContext(AudienceGraphContext)
    const{setGraphVisibility} = useContext(GraphVisibilityContext)
    const{resultButton,setResultButton} = useContext(ResultButtonContext)
    const{correctAnswer,setCorrectAnswer} = useContext(CorrectAnswerContext)
    const{round,setRound} = useContext(RoundContext)
    const{time,setTime} = useContext(TimeContext)
    const{time2,setTime2} = useContext(TimeTwoContext)
    const {bank} = useContext(BankContext)
    const {pause,setPause} = useContext(PauseContext)
    const {roundText,setRoundText} = useContext(RoundTextContext)
    const {setHomeScreen} = useContext(HomeScreenContext)
    const {roundPageVisible,setRoundPageVisible} = useContext(RoundPageContext);
    const {gameScreen,setGameScreen} = useContext(GameDisplayContext);
    const {characterPage,setCharacterPage} = useContext(CharacterPageContext);
    const {characterDisplay,setCharacterDisplay} = useContext(CharacterDisplayContext);
    const {startTimer, setStartTimer} = useContext(StartTimerContext)
    const {wrongAnswer,setWrongAnswer} = useContext(IncorrectAnswerContext)
    const {PauseScreenVisible,setPauseScreenVisible} = useContext(PauseScreenContext);
    const[fiftyfiftyVisible,setFiftyFiftyVisible] = useState({visible:true})
    const[callAFriendVisible,setCallAFriendVisible] = useState({visible:true})
    const [askAudienceVisible,setAskAudienceVisible] = useState({visible:true})

    const fiftyfifty = ()=>
    {
        const btnResults = [];
        const ans = wrongAnswer;
        const results = [...resultButton]
        for(let i=0; i<ans.length;i++)
        {
            ans.pop();
            console.log(ans)
        }

        let btnResultsOne =  results.find((btn)=>{return btn.id === 1});
        let btnResultsTwo =  results.find((btn)=>{return btn.id === 2});
        let btnResultsThree =  results.find((btn)=>{return btn.id === 3 });
        let btnResultsFour =  results.find((btn)=>{return btn.id === 4 });

        btnResults.push(btnResultsOne)
        btnResults.push(btnResultsTwo)
        btnResults.push(btnResultsThree)
        btnResults.push(btnResultsFour)

        console.log(btnResults)
        const rand = Math.floor((Math.random()*2)+1);
        
        console.log("???:"+ans)
    
        console.log(rand) 
        if(rand == 1)
        {
            ans.splice(1,0,correctAnswer)
            for(let i=0; i <ans.length;i++){

              btnResults[i].answer = ans[i]

            btnResults[2].answer = " ";
            btnResults[2].disabled = true;

            btnResults[3].answer = " ";
            btnResults[3].disabled = true;
            
            }
            setResultButton(btnResults)

        }
        else{
            ans.splice(0,0,correctAnswer)
            for(let i=0; i <ans.length;i++){

                btnResults[i].answer = ans[i]

                btnResults[2].answer = " ";
                btnResults[2].disabled = true;

                btnResults[3].answer = " ";
                btnResults[3].disabled = true;
               
               }
            setResultButton(btnResults)
        }
     
        
    
        
    }

    const audienceChoice =()=>
    {
        const rand = Math.floor((Math.random()*4));
        const percent = []

        const buttons = [...wrongAnswer];
        buttons.splice(rand,0,correctAnswer)

        let graph= [
            { x: "Group A", y: 900 },
            { x: "Group B", y: 400 },
            { x: "Group C", y: 300 },
            { x: "Group D", y: 500 }
          ];

          
        for(let i =0; i<buttons.length; i++)
        {
            let x= 100;

            const randNum = Math.floor((Math.random()*`${x}`)+1);

            graph[i].x=buttons[i];
            graph[i].y = randNum
            
           /*if(percent.indexOf(randNum) === false)
           {
            
               x = x - randNum;

               percent.push(rand)
           }*/
        }


        setGraphData(graph)
        
        
        
        /*let ans = wrongAnswer;
        
        for(let i=1; i<ans.length;i++)
        {
            ans.pop();
        
        }

        const rand = Math.floor((Math.random()*3)+1);
        
    
        console.log(rand) 
        ans.splice(rand,0,correctAnswer)
            setResultButton(ans)*/
        
        
    }


    const callAFriend = ()=>
    {
        const rand = Math.floor((Math.random()*4))
       const button = [...resultButton];

       const randBtn = button.find((btn)=>{return btn.id === rand})
      randBtn.selected = true;

      
       setResultButton(button)
    }


    return (
        <div id="actionBtn" className='grid col-1'>
        <div style={{color:"white"}}  id="bank" >
           <span>BANK</span><br/>
           {bank}
        </div>
        <div id="lifeLines" className={round===3?"":"hide"}>
           <div className="grid col-1">
                <div style={{color:"white"}} className={fiftyfiftyVisible.visible===true?"fiftyFifty":"hide"} onClick={()=>{
                    fiftyfifty()
                    setFiftyFiftyVisible(false)}}>
                    50/50
                </div>
                <div style={{color:"white"}} className={askAudienceVisible.visible === true?"audience":"hide"} onClick={()=>{
                    audienceChoice();
                    setAskAudienceVisible(false)
                    setGraphVisibility({visibility:true})
                }}>
                    < FaQuestion/>
                </div>
                <div style={{color:"white"}} className={callAFriendVisible.visible===true?"phone":"hide"} onClick={()=>{
                    callAFriend();
                    setCallAFriendVisible(false)
                    setIsClicked(true)
                }}>
                    <ImPhone/>
                </div>
            </div>
        </div>
        <div style={{color:"white"}} id="pause-menu " className="grid col-1" >
            <div className="icon-size" onClick={()=>{

                setPause(true)
                setStartTimer(false)
                setPauseScreenVisible({visibility:true})

                }}>
                <FaPause/>
            </div>
           { /*<div className={pause===false?"icon-size hide":"icon-size"}onClick={()=>{
                setPause(false)
                setStartTimer(true)
                
                }}>
                <BsPlayFill/>
            </div>*/}
        </div>
        
       
        <div id="time-div" className="grid col-1">
            <div id="time" className="grid col-1">
                <div className={round===1?"":"hide"}>
                    <h1> {time} </h1>
                </div>
                <div className={round===2?"":"hide"}>
                    <h1> {time2} </h1>
                </div>
            </div>
        </div>
        
        
    </div>
    )
}

export default ActionButtons
