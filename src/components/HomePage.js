import React from 'react'
import coverImg from "../images/cover.jpg"

const HomePage = () => {
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
        <div id="homePage" className="grid col-1" style={imageStyle} onClick={()=>{}}>
                <h1> click to start </h1>
        </div>
    )
}


export default HomePage
