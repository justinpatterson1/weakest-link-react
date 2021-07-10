import React,{useContext} from 'react';
import CharacterPageContext from '../context/CharacterPageContext';
import CharacterDisplayContext from '../context/CharacterDisplayContext';
import GameDisplayContext from '../context/GameDisplayContext';
import TimeContext from '../context/TimeContext';

const Character = (props) => {

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
    const timer = (()=>
    { 
        let min= 0;
        let time = 0;
        let sec = 0;
        let hr = `${sec}${time}`
        const interval = setInterval(()=>{
            let timer = `${min}:${sec}${time++}`;

            setTime(timer) 
            
            
            if(sec == 5 && time==9 )
            { 
                time=0;
                sec=0;
                 min++
            
            }
            if(time==9)
            {
                 sec++;
                 time=0;
            }

            if(time == 0)
            {
                clearInterval(time)
            }

        },1000)
    })


    return (
        <div className="character"  onClick={()=>{

            setCharacterPage({visible:false});
            setCharacterDisplay({id:props.id, img:props.image});
            setGameScreen({visible:true});
            timer()
        }}>
            <div style={characterBG}>
          
            </div>   
           { console.log(characterDisplay) }
        </div>
    )
}



export default Character
