import React,{useContext} from 'react'
import Character from "../components/Character"
import characterSelectBG  from "../images/game-background.jpg"
import CharacterContext from '../context/CharacterContext'
import CharacterPageContext from '../context/CharacterPageContext'

const CharacterPage = () => {
    const {character} = useContext(CharacterContext)
    const {characterPage} = useContext(CharacterPageContext);

    const selectionBG=
    {
        backgroundImage:`url(${characterSelectBG})`,
        backgroundPosition:`center center`,
        backgroundSize:`cover`,
        backgroundRepeat:`no-repeat`,
        backgroundAttachment:`fixed`,
        height:`100vh`

    }

    return (
        <div className={characterPage.visible === true?"":"hide"} id="characterPage" style={selectionBG}>
            <div id="characterDiv" className="grid col-4" >
              {
                character.map((char)=>(<Character Key={char.id} id={char.id} image={char.img} proPic={char.proPic} />))
              }
             </div>
        </div>
      
    )

}

export default CharacterPage
