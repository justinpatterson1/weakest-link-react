import React,{useContext} from 'react'
import BankContext from '../context/BankContext'
import stageBackGround from '../images/stage-background.jpg'
import CharacterDisplayContext from '../context/CharacterDisplayContext'
import CharacterPageContext from '../context/CharacterPageContext'
import WinScreenDisplayContext from '../context/WinScreenDisplayContext'
import GameDisplayContext from '../context/GameDisplayContext'
import HomeScreenContext from '../context/HomeScreeContext'
import ClockContext from '../context/ClockContext'
import StartTimerContextContext from '../context/StartTimerContext'
import WinnerContext from '../context/WinnerContext'

const WinnerScreen = () => {
    const {bank,setBank} = useContext(BankContext);
    const {characterPage,setCharacterPage} = useContext(CharacterPageContext);
    const {winScreenDisplay,setWinScreenDisplay} = useContext(WinScreenDisplayContext);
    const {characterDisplay} = useContext(CharacterDisplayContext);
    const {gameScreen,setGameScreen} = useContext(GameDisplayContext);
    const {homeScreen,setHomeScreen} = useContext(HomeScreenContext);
    const {clock,setClock} = useContext(ClockContext)
    const {startTimer,setStartTimer} = useContext(StartTimerContextContext)
    const {winner,setWinner} = useContext(WinnerContext)
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

    return (
        <div id='winScreen' style={stageBackGroundBG} className={winScreenDisplay.visibility === false ?'hide':" "}>
            <div className={winner === true ?" ":" hide"} style={{textAlign:'center',padding:'20px'}}>
               
                <h1>Congratualtions You Won</h1>
            </div>
            <div id="loss-div" className={winner === false ?" ":"hide"} style={{textAlign:'center',padding:'20px',height:'100px'}}>
               
               <h1>Sorry You Lost</h1>
           </div>
            <div id="" className="grid col-2">
                <div>
                    <div className="grid col-1" style={{justifyItems:'center'}}>
                        <img id="winnerSceenImage" src={image} alt="" />
                    </div>
                </div>
                <div className="grid col-1" style={{alignItems:'center'}}>
                    <div id="winnings" className="grid col-1" style={{alignItems:'center'}}>
                        <h1>Winnings</h1>
                        <h1>{bank}</h1>
                    </div>
                    <div className="grid col-1" style={{alignItems:'center'}}>
                        <div>
                            <div className="winScreenBtn grid col-1" onClick={()=>{
                               
                                setWinScreenDisplay({visibility:false})
                                setCharacterPage({visible:true});
                                setClock({
                                    minute:0,
                                    second:0,
                                    second2:0
                                  })
                                setStartTimer(false)
                            }}>
                            
                                <p>
                                    Play Again?
                                </p>
                            </div>
                            <div className="winScreenBtn grid col-1">
                                <p onClick={()=>{
                                    setWinScreenDisplay({visibility:false})
                                    setHomeScreen({visible:true})
                                    setStartTimer(false)
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
                </div>
            </div>
        </div>
    )
}

export default WinnerScreen
