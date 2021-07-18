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

export{buttonPopulate,valAssignment}