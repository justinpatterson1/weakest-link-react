import React,{useContext,useState} from 'react'
import {FaQuestion,FaPause} from 'react-icons/fa'
import {ImPhone} from 'react-icons/im'
import TimeContext from '../context/TimeContext'
import BankContext from '../context/BankContext'
import RoundContext from '../context/RoundContext'
import TimeTwoContext from '../context/TimeTwoContext'
import IncorrectAnswerContext from '../context/IncorrectAnswerContext'
import CorrectAnswerContext from '../context/CorrectAnswerContext'
import ResultButtonContext from '../context/ResultButtonContext'
import AudienceContext from '../context/AudienceContext'
const ActionButtons = () => {

    const {audience,setAudience} = useContext(AudienceContext)
    const{resultButton,setResultButton} = useContext(ResultButtonContext)
    const{correctAnswer,setCorrectAnswer} = useContext(CorrectAnswerContext)
    const{round} = useContext(RoundContext)
    const{time} = useContext(TimeContext)
    const{time2} = useContext(TimeTwoContext)
    const {bank} = useContext(BankContext)
    const {wrongAnswer,setWrongAnswer} = useContext(IncorrectAnswerContext)

    const fiftyfifty = ()=>
    {
        let ans = wrongAnswer;
        
        for(let i=0; i<ans.length;i++)
        {
            ans.pop();
        
        }

        const rand = Math.floor((Math.random()*2)+1);
        
    
        console.log(rand) 
        if(rand === 1)
        {
            ans.splice(1,0,correctAnswer)
            setResultButton(ans)
        
        }
        else{
            ans.splice(0,0,correctAnswer)
            setResultButton(ans)
        }
    
    }

    const audienceChoice =()=>
    {
        let ans = wrongAnswer;
        
        for(let i=1; i<ans.length;i++)
        {
            ans.pop();
        
        }

        const rand = Math.floor((Math.random()*3)+1);
        
    
        console.log(rand) 
        ans.splice(rand,0,correctAnswer)
            setResultButton(ans)
        
        
    }


    return (
        <div id="actionBtn" className='grid col-1'>
        <div id="bank" >
           <span>BANK</span><br/>
           {bank}
        </div>
        <div id="lifeLines" className={round===3?"":"hide"}>
           <div className="grid col-1">
                <div className="fiftyFifty" onClick={fiftyfifty}>
                    50/50
                </div>
                <div className="audience" onClick={audienceChoice}>
                    < FaQuestion/>
                </div>
                <div className="phone">
                    <ImPhone/>
                </div>
            </div>
        </div>
        <div id="pause-menu" className="grid col-1">
            <div>
                <FaPause/>
            </div>
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
