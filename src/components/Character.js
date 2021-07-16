import React,{useContext} from 'react';
import CharacterPageContext from '../context/CharacterPageContext';
import CharacterDisplayContext from '../context/CharacterDisplayContext';
import GameDisplayContext from '../context/GameDisplayContext';
import TimeContext from '../context/TimeContext';
import RoundContext from '../context/RoundContext';
import TimeTwoContext from '../context/TimeTwoContext';
import {timer,timeCheck} from '../utils/time'

const Character = (props) => {

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
    

    return (
        <div className="character"  onClick={()=>{

            setCharacterPage({visible:false});
            setCharacterDisplay({id:props.id, img:props.image});
            setGameScreen({visible:true});
            timeCheck(setTime,round,setRound,setTime2)
        }}>
            <div style={characterBG}>
          
            </div>   
             {console.log(characterDisplay)}
        </div>
    )
}



export default Character
