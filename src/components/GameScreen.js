import React,{useContext,useEffect,useState} from 'react';
import RoundOneCash from '../components/RoundOneCash';
import RoundOneCashContext from '../context/RoundOneCashContext';
import CharacterDisplayContext from '../context/CharacterDisplayContext';


const GameScreen = () => {
    
    const {roundOneCash} = useContext(RoundOneCashContext);
    const {characterDisplay} = useContext(CharacterDisplayContext);
    const [correctAnswer,setCorrectAnswer] = useState('');
    const [wrongAnswer,setWrongAnswer] = useState([])
    const image = require(`../images/${characterDisplay.img}`).default;
   
    useEffect(()=>{
        const ENDPOINT   = "https://opentdb.com/api.php?amount=10&category=21&difficulty=easy&type=multiple"
        fetch(ENDPOINT)
        .then((res)=>{
            return res.json();
        })
        .then((json)=>{
            setCorrectAnswer(json.results[0].correct_answer)
            setWrongAnswer(json.results[0].incorrect_answers)
        })
        .catch(err=>console.log(err))
    },[])

    console.log(`correct:${correctAnswer}`)
    console.log(`incorrect:${wrongAnswer}`)
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
                <div id="screen">

                </div>
                <div id="button-area" className="grid col-4">

                </div>
            </div>
            <div id="actionBtn">
                
            </div>
     </div>
    )
}
export default GameScreen
