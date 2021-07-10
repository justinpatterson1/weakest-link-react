import React,{useContext} from 'react'
import TimeContext from '../context/TimeContext'
const ActionButtons = () => {

    const{time} = useContext(TimeContext)
    return (
        <div id="actionBtn" className='grid col-1'>
        <div id="pause-menu">ll</div>
        <div id="lifeLines">
            ll
        </div>
       
        <div id="time-div" className="grid col-1">
            <div id="time" className="grid col-1">
                <div>
                    <h1> {time} </h1>
                </div>
               
            </div>
        </div>
        
        
    </div>
    )
}

export default ActionButtons
