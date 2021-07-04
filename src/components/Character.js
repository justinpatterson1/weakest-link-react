import React,{useContext} from 'react';
import CharacterPageContext from '../context/CharacterPageContext';


const Character = (props) => {

    const {characterPage,setCharacterPage} = useContext(CharacterPageContext);
    const image = require(`../images/${props.image}`).default

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

        }}>
            <div style={characterBG}>
          
            </div>    
        </div>
    )
}



export default Character
