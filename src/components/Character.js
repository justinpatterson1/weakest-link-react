import React,{useContext} from 'react';
import CharacterPageContext from '../context/CharacterPageContext';
import CharacterDisplayContext from '../context/CharacterDisplayContext';
import GameDisplayContext from '../context/GameDisplayContext';
import TimeContext from '../context/TimeContext';
import RoundContext from '../context/RoundContext';
import TimeTwoContext from '../context/TimeTwoContext';
import RoundPageContext from '../context/RoundPageContext';
import RoundTextContext from '../context/RoundTextContext';
import BankContext from '../context/BankContext';
import HomeScreenContext from '../context/HomeScreeContext';
import {timer,timeCheck} from '../utils/time'

const Character = (props) => {

    const {roundText,setRoundText} = useContext(RoundTextContext)
    const {setHomeScreen} = useContext(HomeScreenContext)
    const {roundPageVisible,setRoundPageVisible} = useContext(RoundPageContext);
    const {bank} = useContext(BankContext)
    const {round,setRound} = useContext(RoundContext)
    const {time2,setTime2} = useContext(TimeTwoContext)
    const {setTime} = useContext(TimeContext)
    const {gameScreen,setGameScreen} = useContext(GameDisplayContext);
    const {characterPage,setCharacterPage} = useContext(CharacterPageContext);
    const {characterDisplay,setCharacterDisplay} = useContext(CharacterDisplayContext);
    const image = require(`../images/${props.proPic}`).default

    const characterBG=
    {
        backgroundImage:`url(${image})`,
        backgroundPosition:`center`,
        backgroundSize:`cover`,
        backgroundRepeat:`no-repeat`,
        backgroundAttachment:`local`,
        backgroundOrigin:'border-box',
        height:`100%`,
        width:'100%'

    }
    
    const displayRound = (evt)=>
    {
        let bankAmount = bank;
        let time = 0
        const interval = setInterval(()=>{
            let timer = time++

            if(timer === 2)
            {
                
                setCharacterDisplay({id:evt.target.id, img:props.image});
                setGameScreen({visible:true});
                setRoundPageVisible(false);
                timeCheck(setTime,round,setRound,setTime2,setRoundPageVisible,setRoundText,bank,setGameScreen,setHomeScreen)
                
            }
        },1000)
    }

    return (
        <div className="character"  onClick={(evt)=>{

            //setRoundText("Round 1")
            setCharacterPage({visible:false});
            setRoundPageVisible(true);
            displayRound(evt);
            setRoundText('Round One')
            
        }}>
            <div style={characterBG}>
          
            </div>   
             {console.log(characterDisplay)}
        </div>
    )
}



export default Character
