import React from 'react'

const AnswerButtons = (props) => {
    return (
        <button className="choice">
            {props.answers}
        </button>
    )
}

export default AnswerButtons
