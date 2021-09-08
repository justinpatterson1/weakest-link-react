import { parseEntities } from "parse-entities";
const buttonPopulate = (corr,wrong,resultButton,setResultButton)=>
{
  const rand = Math.floor((Math.random()*4));
  
  const buttons = [...wrong];
  const results = [...resultButton]
   buttons.splice(rand,0,corr)
   
 for(let i=0; i < results.length ;i++)
 {
    results[i].answer = buttons[i];
 }

 setResultButton(results);

 // setResultButton(buttons)

 console.log("correct:"+ corr)
  console.log("rand:"+rand)
  console.log(buttons)
}


const valAssignment = (ques,corr,wrong,setQuestion,setCorrectAnswer,setWrongAnswer,resultButton,setResultButton)=>
{
  
  setQuestion(ques);
  setCorrectAnswer(corr);
  setWrongAnswer(wrong)

  buttonPopulate(corr,wrong,resultButton,setResultButton)
}

const entityCleanupAndAssignment =(ques,corr,wrongs,setQuestion,setCorrectAnswer,setWrongAnswer,resultButton,setResultButton)=>{
  let Question = parseEntities(ques)
  let newAnswer = parseEntities(corr)

  let wrong = [...wrongs]
  let wrongAnswers = [];

  for(let i =0; i < wrong.length; i++){
      let cleanedWrongAnswer = wrong[i]
      cleanedWrongAnswer = parseEntities(cleanedWrongAnswer)
      wrongAnswers.push(cleanedWrongAnswer)
  }
  
  valAssignment(ques,corr,wrongs,setQuestion,setCorrectAnswer,setWrongAnswer,resultButton,setResultButton)
}
export{buttonPopulate,valAssignment,entityCleanupAndAssignment}