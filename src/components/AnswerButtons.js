import React,{useContext} from 'react'
import CorrectAnswerContext from '../context/CorrectAnswerContext'
import RoundOneCashContext from '../context/RoundOneCashContext'

const AnswerButtons = (props) => {

    const {roundOneCash,setRoundOneCash}= useContext(RoundOneCashContext);
    const {correctAnswer} = useContext(CorrectAnswerContext);

    const colorChanger =()=>
    {
        const cash = [...roundOneCash];

      const selectedCash = cash.find((cash)=>{return cash.selected === true})

      for(let i=0; i<cash.length;i++)
      {
          cash[i].selected = false
      }
     // const newCash =  cash.forEach((cash)=>{return cash.selected === false});

       let newSelectedCash =  selectedCash.id + 1;

       newSelectedCash = cash.find((cash)=>{return cash.id === newSelectedCash});

       newSelectedCash.selected = true;

       setRoundOneCash(cash);

    
    }


    return (
        <button className="choice" value={props.answers} onClick={()=>
        {
            if(props.answers == correctAnswer)
            {
                alert("yoww")
            }
            colorChanger();
        }}>
            {props.answers}
        </button>
    )
}

export default AnswerButtons
