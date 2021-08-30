import React,{useContext} from 'react'
import StartTimerContext from '../context/StartTimerContext'
import PauseScreenContext from '../context/PauseScreenContext';

const PauseScreen = () => {
    const {startTimer, setStartTimer} = useContext(StartTimerContext);
    const {pauseScreenVisible,setPauseScreenVisible} = useContext(PauseScreenContext);

    return (
        <div id="pauseScreen" className={pauseScreenVisible.visibility === true?"":"hide"}>
            <div className="grid col-1">
                <div>
                    <p onClick={()=>{
                        setStartTimer(true)
                        setPauseScreenVisible({visibility:false})
                    }}>
                        Resume
                    </p>
                    <p>
                        Quit
                    </p>
                </div>
            </div>
        </div>
    )
}

export default PauseScreen
