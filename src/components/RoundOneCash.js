import React,{useContext} from 'react'

//const{roundOneCash} = useContext()

const RoundOneCash = (props) => {
    return (
        <div className={props.selected === true ?"roundCashBg cash-div grid col-1 ": "cash-div grid col-1  "}>
            {props.value}
        </div>
    )
}

export default RoundOneCash
