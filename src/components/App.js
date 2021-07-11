import '../css/App.css';
import HomePage from '../components/HomePage.js';
import CharacterPage from '../components/CharacterPage.js'
import {useState,useEffect} from 'react';
import CharacterContext from '../context/CharacterContext';
import CharacterPageContext from '../context/CharacterPageContext'
import GameScreen from '../components/GameScreen'
import GameDisplayContext from '../context/GameDisplayContext';
import RoundOneCashContext from '../context/RoundOneCashContext';
import CharacterDisplayContext from '../context/CharacterDisplayContext';
import ResultButtonContext from "../context/ResultButtonContext";
import CorrectAnswerContext from '../context/CorrectAnswerContext';
import QuestionContext from '../context/QuestionContext';
import HomeScreenContext from '../context/HomeScreeContext';
import TimeContext from '../context/TimeContext';
import IncorrectAnswerContext from '../context/IncorrectAnswerContext';
import RoundTwoCashContext from '../context/RoundTwoCashContext';
import BankContext from '../context/BankContext';
import RoundContext from '../context/RoundContext'

function App() {
  const [round,setRound] = useState(1);
  const [bank,setBank] = useState(0);
  const [time,setTime] = useState("");
  const [homeScreen,setHomeScreen] = useState({visible:true});
  const [gameScreen,setGameScreen] = useState({visible:false});
  const [resultButton,setResultButton] = useState([]);
  const [correctAnswer,setCorrectAnswer] = useState('');
  const [question,setQuestion] = useState('');
  const [wrongAnswer,setWrongAnswer] = useState([])
  const [characterDisplay,setCharacterDisplay] = useState({id:0,img:'stickman.png'});
  const [characterPage,setCharacterPage] = useState({visible:false});
  const [roundOneCash,setRoundOneCash] = useState([
  {
    id:1,
    value:0,
    selected:true
  },
  {
    id:2,
    value:1000,
    selected:false
  },
  {
    id:3,
    value:5000,
    selected:false
  },
  {
    id:4,
    value:10000,
    selected:false
  },
  {
    id:5,
    value:50000,
    selected:false
  },
  {
    id:6,
    value:75000,
    selected:false
  },
  {
    id:7,
    value:125000,
    selected:false
  },
  {
    id:8,
    value:250000,
    selected:false
  },
  {
    id:9,
    value:500000,
    selected:false
  }
 
])

const [roundTwoCash,setRoundTwoCash] = useState([
  {
    id:1,
    value:0,
    selected:true
  },
  {
    id:2,
    value:1000,
    selected:false
  },
  {
    id:3,
    value:10000,
    selected:false
  },
  {
    id:4,
    value:75000,
    selected:false
  },
  {
    id:5,
    value:125000,
    selected:false
  },
  {
    id:6,
    value:500000,
    selected:false
  }
])
const [character,setCharacter] = useState([
  {
    id:1,
    proPic:"img1_proPic.png",
    img:"img1.png"
  },

  {
    id:2,
    proPic:"img2_proPic.png",
    img:"img2.png"
  },
  {
    id:3,
    proPic:"img3_proPic.png",
    img:"img3.png"
  },
  {
    id:4,
    proPic:"img4_proPic.png",
    img:"img4.png"
  },
  {
    id:5,
    proPic:"img5_proPic.png",
    img:"img5.png"
  },
  {
    id:6,
    proPic:"img6_proPic.png",
    img:"img6.png"
  },
  {
    id:7,
    proPic:"img7_proPic.png",
    img:"img7.png"
  },
  {
    id:8,
    proPic:"img8_proPic.png",
    img:"img8.png"
  }

])

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

console.log("question:" + question)
console.log("wrong answers:" + wrongAnswer)

useEffect(()=>{
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
  console.log("blah blah")
},[])

  return (
    <>

    <HomeScreenContext.Provider value={{homeScreen,setHomeScreen}}>
    <CharacterPageContext.Provider value={{characterPage,setCharacterPage}}>
        <CharacterContext.Provider value={{character,setCharacter}}>
          <RoundOneCashContext.Provider value={{roundOneCash,setRoundOneCash}}>
            <CharacterDisplayContext.Provider value={{characterDisplay,setCharacterDisplay}}>
              <ResultButtonContext.Provider value={{resultButton,setResultButton}}>
                <CorrectAnswerContext.Provider value={{correctAnswer,setCorrectAnswer}}>
                  <QuestionContext.Provider value={{question,setQuestion}}>
                    <GameDisplayContext.Provider value={{gameScreen,setGameScreen}}>
                      <TimeContext.Provider value={{time,setTime}}>
                        <IncorrectAnswerContext.Provider value={{wrongAnswer,setWrongAnswer}}>
                          <RoundTwoCashContext.Provider value={{roundTwoCash,setRoundTwoCash}}>
                            <BankContext.Provider value={{bank,setBank}}>
                              <RoundContext.Provider value={{round,setRound}}>

                                    <HomePage/>
                                    <CharacterPage/>
                                    <GameScreen/>

                              </RoundContext.Provider>
                            </BankContext.Provider>
                          </RoundTwoCashContext.Provider>
                        </IncorrectAnswerContext.Provider>
                      </TimeContext.Provider>
                    </GameDisplayContext.Provider>
                   </QuestionContext.Provider>
                </CorrectAnswerContext.Provider>
              </ResultButtonContext.Provider>
             </CharacterDisplayContext.Provider>
          </RoundOneCashContext.Provider>
        </CharacterContext.Provider>
      </CharacterPageContext.Provider>
    </HomeScreenContext.Provider>
  
   </>
   /*
      1) add state for character,place images in state
      2) create hover effect over chracter
      3) add routes
   */
  );
}

export default App;
