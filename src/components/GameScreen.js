import React,{useContext,useEffect,useState} from 'react';
import RoundOneCash from '../components/RoundOneCash';
import RoundOneCashContext from '../context/RoundOneCashContext';
import CharacterDisplayContext from '../context/CharacterDisplayContext';
import ResultButtonContext from '../context/ResultButtonContext';
import AnswerButtons from '../components/AnswerButtons';
import CorrectAnswerContext from '../context/CorrectAnswerContext';
import QuestionContext from '../context/QuestionContext';
import GameDisplayContext from '../context/GameDisplayContext';
import TimeContext from '../context/TimeContext';


const GameScreen = () => {
    
  
 
   
    const {time} = useContext(TimeContext)
    const {gameScreen,setGameScreen} = useContext(GameDisplayContext);
    const {roundOneCash} = useContext(RoundOneCashContext);
    const {characterDisplay} = useContext(CharacterDisplayContext);
    const {correctAnswer,setCorrectAnswer} = useContext(CorrectAnswerContext);
    const {question} = useContext(QuestionContext)
    const {resultButton,setResultButton} = useContext(ResultButtonContext)
    const image = require(`../images/${characterDisplay.img}`).default;
   

   


    
 
    return (
        <div className={gameScreen.visible === true?"":"hide"}>
            <div className="gameDisplay">
            <div id="moneyDiv">
                <div id="roundOneCashDiv">
                    <div  className="grid col-9">
                        {
                            roundOneCash.map((cash)=>(<RoundOneCash Key={cash.id} value={cash.value} />)) 
                        }
                    </div>
                </div>
                <div className="hide"></div>
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
                            resultButton.map((choices)=>(<AnswerButtons answers={choices}/>))
                         }
                    </div>
                        
                        
                 </div>
            </div>
            <div id="actionBtn">
                {time}
            </div>
         </div>
     </div>
    )
}
export default GameScreen
