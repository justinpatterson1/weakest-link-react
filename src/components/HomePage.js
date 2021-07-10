import React,{useContext} from 'react'
import coverImg from "../images/cover.jpg"
import HomeScreenContext from '../context/HomeScreeContext'
import CharacterPageContext from '../context/CharacterPageContext'

const HomePage = () => {
    const{homeScreen,setHomeScreen} = useContext(HomeScreenContext);
    const{setCharacterPage} = useContext(CharacterPageContext);
    const imageStyle =
    {
        backgroundImage:`url(${coverImg})`,
        backgroundPosition:`center center`,
        backgroundSize:`cover`,
        backgroundRepeat:`no-repeat`,
        backgroundAttachment:`local`,
        height:`100vh`

    }


    return (
       <div className={homeScreen.visible === false?"hide":""}>
            <div id="homePage" className="grid col-1" style={imageStyle} onClick={()=>{
                setHomeScreen({visible:false})
                setCharacterPage({visible:true})
                }}>
                    <h1> click to start </h1>
            </div>
        </div>
    )
}


export default HomePage
