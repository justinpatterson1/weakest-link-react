import React,{useContext} from 'react'
import CorrectAnswerContext from '../context/CorrectAnswerContext'

const AnswerButtons = (props) => {

    const {correctAnswer} = useContext(CorrectAnswerContext)
    return (
        <button className="choice" value={props.answers} onClick={()=>
        {
            if(props.answers == correctAnswer)
            {
                alert("yoww")
            }
        }}>
            {props.answers}
        </button>
    )
}

export default AnswerButtons
