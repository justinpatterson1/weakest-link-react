import React,{useContext} from 'react'
import coverImg from "../images/cover.jpg"
import HomeScreenContext from '../context/HomeScreeContext'
import CharacterPageContext from '../context/CharacterPageContext'
import ResumeContext from '../context/ResumeContext'
import ClockContext from '../context/ClockContext';
import BankContext from '../context/BankContext';
import CharacterContext from '../context/CharacterContext'
import RoundContext from '../context/RoundContext';
import CharacterDisplayContext from '../context/CharacterDisplayContext';
import GameDisplayContext from '../context/GameDisplayContext'
import StartTimerContext from '../context/StartTimerContext'

const HomePage = () => {
    const{homeScreen,setHomeScreen} = useContext(HomeScreenContext);
    const{setCharacterPage} = useContext(CharacterPageContext);
    const{resumeGame,setResumeGame}= useContext(ResumeContext)
    const {clock,setClock} = useContext(ClockContext)
    const {bank,setBank} = useContext(BankContext)
    const {character,setCharacter} = useContext(CharacterContext)
    const {characterDisplay,setCharacterDisplay} = useContext(CharacterDisplayContext)
    const {round,setRound} = useContext(RoundContext)
    const {gameScreen,setGameScreen} = useContext(GameDisplayContext)
    const {startTime,setStartTimer} = useContext(StartTimerContext)
    const imageStyle =
    {
        backgroundImage:`url(${coverImg})`,
        backgroundPosition:`center center`,
        backgroundSize:`cover`,
        backgroundRepeat:`no-repeat`,
        backgroundAttachment:`local`,
    

    }


    return (
       <div className={homeScreen.visible === false?"hide":""}>
        <div id="homePageDiv" >
                <div id="homePage"  className="grid col-1" style={imageStyle}>
                    <div>
                        <h1 className={resumeGame === false?"hide":" "} onClick={()=>{
                            const currtime = JSON.parse(localStorage.getItem("Time"))
                            const currBankAmt =JSON.parse(localStorage.getItem("Bank"))
                            const currCharacter =JSON.parse(localStorage.getItem("Character"))
                            const currRound = JSON.parse(localStorage.getItem("Round"))
                            
                            localStorage.removeItem("Time")
                            localStorage.removeItem("Bank")
                            localStorage.removeItem("Character")
                            localStorage.removeItem("Round")
                            localStorage.removeItem("Resume")

                            setClock(currtime)
                           setBank(currBankAmt)
                            setCharacterDisplay(currCharacter)
                            setRound(currRound)
                            setHomeScreen({visible:false})
                            setGameScreen({visible:true})
                            setStartTimer(true)
                            setResumeGame(false)
                            

                            
                           
                        }}>Continue</h1>
                        <h1 onClick={()=>{
                        
                            setCharacterPage({visible:true})
                            setHomeScreen({visible:false})


                        }}> New Game </h1>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default HomePage
