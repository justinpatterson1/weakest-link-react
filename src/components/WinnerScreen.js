import React,{useContext} from 'react'
import BankContext from '../context/BankContext'
import stageBackGround from '../images/stage-background.jpg'
import CharacterDisplayContext from '../context/CharacterDisplayContext'
import CharacterPageContext from '../context/CharacterPageContext'
import WinScreenDisplayContext from '../context/WinScreenDisplayContext'
import GameDisplayContext from '../context/GameDisplayContext'


const WinnerScreen = () => {
    const {bank,setBank} = useContext(BankContext);
    const {characterPage,setCharacterPage} = useContext(CharacterPageContext);
    const {winScreenDisplay,setWinScreenDisplay} = useContext(WinScreenDisplayContext);
    const {characterDisplay} = useContext(CharacterDisplayContext);
    const {gameScreen,setGameScreen} = useContext(GameDisplayContext);
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
        <div style={stageBackGroundBG} className={winScreenDisplay.visibility === false ?'hide':" "}>
            <div style={{textAlign:'center',padding:'20px'}}>
                <h1>Congratualtions You Won</h1>
            </div>
            <div className="grid col-2">
                <div>
                <div className="grid col-1" style={{justifyItems:'center'}}>
                    <img src={image} alt="" />
                </div>
                </div>
                <div className="grid col-1" style={{alignItems:'center'}}>
                    <div className="grid col-1" style={{alignItems:'center'}}>
                        <h1>Winnings</h1>
                        {bank}
                    </div>
                    <div className="grid col-1" style={{alignItems:'center'}}>
                        <div>
                            <div className="winScreenBtn grid col-1" onClick={()=>{
                               
                                setWinScreenDisplay({visibility:false})
                                setCharacterPage({visible:true});
                            
                            }}>
                                <p>
                                    Play Again?
                                </p>
                            </div>
                            <div className="winScreenBtn grid col-1">
                                <p>
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
