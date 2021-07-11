import React,{useContext} from 'react'
import TimeContext from '../context/TimeContext'
import BankContext from '../context/BankContext'
const ActionButtons = () => {

    const{time} = useContext(TimeContext)
    const {bank} = useContext(BankContext)
    return (
        <div id="actionBtn" className='grid col-1'>
        <div id="bank" >
           <span>BANK</span><br/>
           {bank}
        </div>
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
