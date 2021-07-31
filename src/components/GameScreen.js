import React,{useContext} from 'react';
import RoundOneCash from '../components/RoundOneCash';
import RoundOneCashContext from '../context/RoundOneCashContext';
import CharacterDisplayContext from '../context/CharacterDisplayContext';
import ResultButtonContext from '../context/ResultButtonContext';
import AnswerButtons from '../components/AnswerButtons';
import CorrectAnswerContext from '../context/CorrectAnswerContext';
import QuestionContext from '../context/QuestionContext';
import GameDisplayContext from '../context/GameDisplayContext';
import TimeContext from '../context/TimeContext';
import ActionButtons from '../components/ActionButtons'
import RoundTwoCash from '../components/RoundTwoCash';
import RoundTwoCashContext from '../context/RoundTwoCashContext';
import RoundContext from '../context/RoundContext';
import BankContext from '../context/BankContext';
import TimeTwoContext from '../context/TimeTwoContext';
import AudienceGraph from '../components/AudienceGraph';
import GraphVisibilityContext from '../context/GraphVisibilityContext';
import stageBackGround from '../images/stage-background.jpg'
import RoundTextContext from '../context/RoundTextContext'
import {timeCheck, timerTwo} from '../utils/time'


const GameScreen = () => {
    
    const {roundText,setRoundText} = useContext(RoundTextContext)
    const {graphVisibility} = useContext(GraphVisibilityContext)
    const {bank,setBank} = useContext(BankContext)
    const {round,setRound} = useContext(RoundContext)
    const {time2,setTime2} = useContext(TimeTwoContext);
    const {time,setTime} = useContext(TimeContext);
    const {roundTwoCash,setRoundTwoCash} = useContext(RoundTwoCashContext)
    const {gameScreen,setGameScreen} = useContext(GameDisplayContext);
    const {roundOneCash,setRoundOneCash} = useContext(RoundOneCashContext);
    const {characterDisplay} = useContext(CharacterDisplayContext);
    const {correctAnswer,setCorrectAnswer} = useContext(CorrectAnswerContext);
    const {question} = useContext(QuestionContext)
    const {resultButton,setResultButton} = useContext(ResultButtonContext)
    const image = require(`../images/${characterDisplay.img}`).default;

  
   
    const stageBackGroundBG=
    {
        backgroundImage:`url(${stageBackGround})`,
        backgroundPosition:`center center`,
        backgroundSize:`cover`,
        backgroundRepeat:`no-repeat`,
        backgroundAttachment:`local`,
        height:`100vh`

    }

const cashReset =()=>
{
    if(round ===1){
    const cash = [...roundOneCash];

    for(let i=0; i<cash.length;i++)
    {
        cash[i].selected = false
    }
    const resetCash = cash.find((cash)=>{return cash.id === 1});

    resetCash.selected = true;

    setRoundOneCash(cash);
 }

 if(round ===2){
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

const bankSum =()=>
{
    let bankVal = bank;
    if(round === 1)
    {
        const roundCash = [...roundOneCash];

        const selectedCashDiv = roundCash.find((cash)=>{return cash.selected === true});
        
        let cashDivVal = selectedCashDiv.value;

        bankVal = bankVal + cashDivVal;

        setBank(bankVal)

    
        cashReset()
        if(bankVal >= 500000)
        {
            setRound(2)
            timerTwo(setTime2,setRound);
            setRoundText("Round 2")
        }
    }

    if(round === 2)
    {
        const roundCash = [...roundTwoCash];

        const selectedCashDiv = roundCash.find((cash)=>{return cash.selected === true});
        
        let cashDivVal = selectedCashDiv.value;

        bankVal = bankVal + cashDivVal;

        
        setBank(bankVal)
        cashReset();
        if(bankVal >= 1000000)
        {
            setRound(3)
            setRoundText("Round 3")
            //timerTwo(setTime2,setRound);
        }


    }
}

const cashPositionCheck =()=>
{
    if(round === 1)
    {
        const cash = [...roundOneCash]

        const check = cash.find((cash)=>{return cash.value === 0});

        if(check.selected === true)
        {
            return true
        }
    }

    if(round === 2)
    {
        const cash = [...roundTwoCash]

        const check = cash.find((cash)=>{return cash.value === 0});

        if(check.selected === true)
        {
            return true
        }
    }
}


    
 
    return (
        
        <div style={stageBackGroundBG} className={gameScreen.visible === true?"":"hide"}id="gamer">
             <div id="audienceModalDiv" className={graphVisibility.visibility === false ?"hide ":""}>
                 <AudienceGraph/>
            </div>
        <div  >
           
            <div className="gameDisplay">
            <div id="moneyDiv">
                <div id="roundOneCashDiv" >
                    <div className={round === 1?"":"hide"} >
                        <div className="grid col-10">
                        {
                            roundOneCash.map((cash)=>(<RoundOneCash Key={cash.id} value={cash.value} selected={cash.selected}/>)) 
                        }

                        <div className="roundCashBg cash-div grid col-1 bank-btn" onClick={(()=>{
                            
                            if(!cashPositionCheck())
                            {
                                bankSum()
                            }
                            
                            })} >
                            <h2 >BANK</h2>
                        </div>
                        </div>
                   
                    </div>
                    <div className={round === 2?"":"hide"} >
                        <div className="grid col-7">
                            {
                                roundTwoCash.map((cash)=>(<RoundTwoCash Key={cash.id} value={cash.value} selected={cash.selected}/>))
                                
                            }
                              <div className="roundCashBg cash-div grid col-1 bank-btn" onClick={()=>{
                                  if(!cashPositionCheck())
                                  {
                                      bankSum()
                                  }
                              }} >
                                  <h2 >BANK</h2>
                             </div>
                        </div>
                      
                    </div>
                    
                </div>
                
            </div>

            <div id="characterDisplay">
                <div className="grid col-1">
                    <img src={image} alt="" />
                </div>
            </div>
            <div id="gameScreen">
                <div id="screen" className="grid col-1">
                    {question}
                </div>
                <div id="button-area"  >
                    
                    <div  className="grid col-2">
                         {
                            resultButton.map((choices,i)=>(<AnswerButtons id={choices.id} answers={choices.answer} selected={choices.selected}/>))
                         }
                    </div>
                        
                        
                 </div>
            </div>
            <ActionButtons/>
         </div>
     </div>
     </div>
    )
}
export default GameScreen
