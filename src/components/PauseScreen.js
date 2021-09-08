import React,{useContext} from 'react'
import StartTimerContext from '../context/StartTimerContext'
import PauseScreenContext from '../context/PauseScreenContext';
import ClockContext from '../context/ClockContext';
import BankContext from '../context/BankContext';
import CharacterContext from '../context/CharacterContext'
import RoundContext from '../context/RoundContext';
import ResumeContext from '../context/ResumeContext'
import CharacterDisplayContext from '../context/CharacterDisplayContext';
import HomeScreenContext from '../context/HomeScreeContext';
import GameDisplayContext from '../context/GameDisplayContext';


const PauseScreen = () => {
    const {startTimer, setStartTimer} = useContext(StartTimerContext);
    const {clock,setClock} = useContext(ClockContext)
    const {bank,setBank} = useContext(BankContext)
    const {character,setCharacter} = useContext(CharacterContext)
    const {characterDisplay} = useContext(CharacterDisplayContext)
    const {round,setRound} = useContext(RoundContext)
    const {pauseScreenVisible,setPauseScreenVisible} = useContext(PauseScreenContext);
    const {resumeGame,setResumeGame} = useContext(ResumeContext)
    const {homeScreen,setHomeScreen} = useContext(HomeScreenContext)
    const {setGameScreen} = useContext(GameDisplayContext)

    const saveGame=()=>{
        
        localStorage.setItem("Time",JSON.stringify(clock))
        localStorage.setItem("Bank",JSON.stringify(bank))
        localStorage.setItem("Character",JSON.stringify(characterDisplay))
        localStorage.setItem("Round",JSON.stringify(round))
        localStorage.setItem("Resume",JSON.stringify(true))

    }
    return (
        <div id="pauseScreen" className={pauseScreenVisible.visibility === true?"":"hide"}>
            <div className="grid col-1">
                <div>
                    <p onClick={()=>{
                        setStartTimer(true)
                        setPauseScreenVisible({visibility:false})
                    }}>
                        Resume
                    </p>
                    <p onClick={()=>{
                    
                       saveGame()
                       setPauseScreenVisible({visibility:false})
                       setHomeScreen({visible:true})
                       setStartTimer(false)
                       setGameScreen({visible:false})
                       setClock({
                           minute:0,
                           second:0,
                           second2:0
                           })
                       setResumeGame(true)
                    }}>
                        Save
                    </p>
                    <p onClick={()=>{
                            setPauseScreenVisible({visibility:false})
                            setHomeScreen({visible:true})
                            setStartTimer(false)
                            setGameScreen({visible:false})
                            setClock({
                                minute:0,
                                second:0,
                                second2:0
                                })
                    }}>
                        Quit
                    </p>
                </div>
            </div>
        </div>
    )
}

export default PauseScreen
