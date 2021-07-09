import React,{useContext,useEffect,useState} from 'react';
import RoundOneCash from '../components/RoundOneCash';
import RoundOneCashContext from '../context/RoundOneCashContext';
import CharacterDisplayContext from '../context/CharacterDisplayContext';
import ResultButtonContext from '../context/ResultButtonContext';
import AnswerButtons from '../components/AnswerButtons';
import CorrectAnswerContext from '../context/CorrectAnswerContext';
import QuestionContext from '../context/QuestionContext';


const GameScreen = () => {
    
    const [time,setTime] = useState("");
 
   
    

    const {roundOneCash} = useContext(RoundOneCashContext);
    const {characterDisplay} = useContext(CharacterDisplayContext);
    const {correctAnswer,setCorrectAnswer} = useContext(CorrectAnswerContext);
    const {question} = useContext(QuestionContext)
    const {resultButton,setResultButton} = useContext(ResultButtonContext)
    const image = require(`../images/${characterDisplay.img}`).default;
   

    const timer = (()=>
    { 
        let time = 10;
        const interval = setInterval(()=>{
            const timer = time--
            setTime(timer)

            if(time == 0)
            {
                clearInterval(time)
            }

        },1000)
    })
    

    
 
    return (
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
    )
}
export default GameScreen
