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


function App() {
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
    value:1250000,
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
const [character,setCharacter] = useState([
  {
    id:1,
    img:"character_1.png"
  },

  {
    id:2,
    img:"batman.png"
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
                                    <HomePage/>
                                    <CharacterPage/>
                                    <GameScreen/>

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
