import React,{useContext} from 'react';
import RoundOneCash from '../components/RoundOneCash';
import RoundOneCashContext from '../context/RoundOneCashContext';


const GameDIsplay = () => {
    
    const { roundOneCash} = useContext(RoundOneCashContext)
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
                    <img src="./src/images/character_1.png" alt="" />
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

export default GameDIsplay
