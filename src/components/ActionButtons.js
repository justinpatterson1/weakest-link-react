import React,{useContext,useState} from 'react'
import TimeContext from '../context/TimeContext'
import BankContext from '../context/BankContext'
import RoundContext from '../context/RoundContext'
import TimeTwoContext from '../context/TimeTwoContext'
const ActionButtons = () => {

   
    const{round} = useContext(RoundContext)
    const{time} = useContext(TimeContext)
    const{time2} = useContext(TimeTwoContext)
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
                <div className={round===1?"":"hide"}>
                    <h1> {time} </h1>
                </div>
                <div className={round===2?"":"hide"}>
                    <h1> {time2} </h1>
                </div>
            </div>
        </div>
        
        
    </div>
    )
}

export default ActionButtons
