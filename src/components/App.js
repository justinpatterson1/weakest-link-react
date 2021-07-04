import '../css/App.css';
import HomePage from '../components/HomePage.js';
import CharacterPage from '../components/CharacterPage.js'
import {useState} from 'react';
import CharacterContext from '../context/CharacterContext';
import CharacterPageContext from '../context/CharacterPageContext'
import GameScreen from '../components/GameScreen'
import GameDisplayContext from '../context/GameDisplayContext';
import RoundOneCashContext from '../context/RoundOneCashContext';
import CharacterDisplayContext from '../context/CharacterDisplayContext';
import ResultButtonContext from "../context/ResultButtonContext";

function App() {
const [resultButton,setResultButton] = useState([]);
const [characterDisplay,setCharacterDisplay] = useState({id:0,img:'stickman.png'});
const [characterPage,setCharacterPage] = useState({visible:true});
const [roundOneCash,setRoundOneCash] = useState([
  {
    id:1,
    value:0,
    selected:true
  },
  {
    id:2,
    value:1000,
    selected:true
  },
  {
    id:3,
    value:5000,
    selected:true
  },
  {
    id:4,
    value:10000,
    selected:true
  },
  {
    id:5,
    value:50000,
    selected:true
  },
  {
    id:6,
    value:75000,
    selected:true
  },
  {
    id:7,
    value:1250000,
    selected:true
  },
  {
    id:8,
    value:250000,
    selected:true
  },
  {
    id:9,
    value:500000,
    selected:true
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

  return (
    <>
    <HomePage/>
    <CharacterPageContext.Provider value={{characterPage,setCharacterPage}}>
        <CharacterContext.Provider value={{character,setCharacter}}>
          <RoundOneCashContext.Provider value={{roundOneCash,setRoundOneCash}}>
            <CharacterDisplayContext.Provider value={{characterDisplay,setCharacterDisplay}}>
              <ResultButtonContext.Provider value={{resultButton,setResultButton}}>

                 
             <CharacterPage/>
             <GameScreen/>

              </ResultButtonContext.Provider>
             </CharacterDisplayContext.Provider>
          </RoundOneCashContext.Provider>
        </CharacterContext.Provider>
    </CharacterPageContext.Provider>
  
   </>
   /*
      1) add state for character,place images in state
      2) create hover effect over chracter
      3) add routes
   */
  );
}

export default App;
