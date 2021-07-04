import React,{useContext} from 'react';
import RoundOneCash from '../components/RoundOneCash';
import RoundOneCashContext from '../context/RoundOneCashContext';
import CharacterDisplayContext from '../context/CharacterDisplayContext';


const GameScreen = () => {
    
    const {roundOneCash} = useContext(RoundOneCashContext);
    const {characterDisplay} = useContext(CharacterDisplayContext);
    const image = require(`../images/${characterDisplay.img}`).default;
   

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
                <div>
                    <img src={image} alt="" />
                </div>
            </div>
            <div id="gameScreen">
                <div>

                </div>
            </div>
            <div id="actionBtn">
                
            </div>
     </div>
    )
}
export default GameScreen
