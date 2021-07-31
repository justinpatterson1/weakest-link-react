import React,{useState,useContext} from 'react'
import RoundScreenImage from '../images/roundScreen.jpg'
import RoundPageContext from '../context/RoundPageContext'
import RoundTextContext from '../context/RoundContext'
const RoundPage = (props) => {
 
   const {roundText} = useContext(RoundTextContext);
   //const [roundText,setRoundText] = useState("Round 1")
    const {roundPageVisible} = useContext(RoundPageContext);
   
    const roundScreenBG=
    {
        backgroundImage:`url(${RoundScreenImage})`,
        backgroundPosition:`center center`,
        backgroundSize:`cover`,
        backgroundRepeat:`no-repeat`,
        backgroundAttachment:`local`,
        height:`100vh`

    }

  console.log(roundText)

    return (
        <div className={roundPageVisible===false?"hide":""} style={roundScreenBG}>
            <div className="grid col-1 " id="roundPage">
                    <div className="roundPosition grid col-1 ">
                        {props.round}
                    </div>
            </div>
            
        </div>
    )
}

export default RoundPage
