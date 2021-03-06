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
import TimeTwoContext from '../context/TimeTwoContext';
import AudienceContext from '../context/AudienceContext';
import AudienceGraphContext from '../context/AudienceGraphContext';
import GraphVisibliltyContext from '../context/GraphVisibilityContext'
import ColorContext from '../context/ColorContext'
import CallAFriendContext from '../context/CallAFriendContext';
import RoundPage from '../components/RoundPage';
import RoundPageContext from '../context/RoundPageContext';
import RoundTextContext from '../context/RoundTextContext';
import {valAssignment} from '../utils/ButtonUtils' 



function App() {
  const [audience,setAudience] = useState(null);
  const [round,setRound] = useState(1);
  const [bank,setBank] = useState(0);
  const [time,setTime] = useState("");
  const [time2,setTime2] = useState("");
  const [homeScreen,setHomeScreen] = useState({visible:true});
  const [gameScreen,setGameScreen] = useState({visible:false});
  const [resultButton,setResultButton] = useState([{id:1,answer:"ans",selected:false},{id:2,answer:"ans",selected:false},{id:3,answer:"ans",selected:false},{id:4,answer:"ans",selected:false}]);
  const [correctAnswer,setCorrectAnswer] = useState('');
  const [question,setQuestion] = useState('');
  const [wrongAnswer,setWrongAnswer] = useState([])
  const [characterDisplay,setCharacterDisplay] = useState({id:0,img:'stickman.png'});
  const [characterPage,setCharacterPage] = useState({visible:false});
  const [graphVisibility,setGraphVisibility] = useState({visibility:false});
  const [graphData,setGraphData] = useState()
  const [color,setColor] =  useState(false);
  const [isClicked,setIsClicked] = useState(false);
  const [roundPageVisible,setRoundPageVisible] = useState(false)
  const [roundText,setRoundText] = useState()
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





/*const buttonPopulate = (corr,wrong,resultButton,setResultButton)=>
{
  const rand = Math.floor((Math.random()*4));
  
  const buttons = [...wrong];
  const results = [...resultButton]
   buttons.splice(rand,0,corr)
   
 for(let i=0; i < results.length ;i++)
 {
    results[i].answer = buttons[i];
 }

 setResultButton(results);

 // setResultButton(buttons)

 console.log("correct:"+ corr)
  console.log("rand:"+rand)
  console.log(buttons)
}


const valAssignment = (ques,corr,wrong,setQuestion,setCorrectAnswer,setWrongAnswer,resultButton,setResultButton)=>
{
  setQuestion(ques);
  setCorrectAnswer(corr);
  setWrongAnswer(wrong)

  buttonPopulate(corr,wrong,resultButton,setResultButton)
}*/


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


      
     valAssignment(newQuestion,answer,incorrectAnswers,setQuestion,setCorrectAnswer,setWrongAnswer,resultButton,setResultButton)
     


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
                                <TimeTwoContext.Provider value={{time2,setTime2}}>
                                  <AudienceContext.Provider value={{audience,setAudience}}>
                                    <AudienceGraphContext.Provider value={{graphData,setGraphData}}>
                                      <GraphVisibliltyContext.Provider value={{graphVisibility,setGraphVisibility}}>
                                        <ColorContext.Provider value={{color,setColor}}>
                                          <CallAFriendContext.Provider value={{isClicked,setIsClicked}}>
                                            <RoundPageContext.Provider value={{roundPageVisible,setRoundPageVisible}}>
                                              <RoundTextContext.Provider value={{roundText,setRoundText}}>

                                                <HomePage/>
                                                <CharacterPage/>
                                                <RoundPage round={roundText} />
                                                <GameScreen/>

                                                </RoundTextContext.Provider>
                                               </RoundPageContext.Provider>
                                             </CallAFriendContext.Provider>
                                          </ColorContext.Provider>
                                        </GraphVisibliltyContext.Provider>
                                     </AudienceGraphContext.Provider>
                                    </AudienceContext.Provider>
                                </TimeTwoContext.Provider>
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
