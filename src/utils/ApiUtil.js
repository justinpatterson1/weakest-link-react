import { valAssignment } from "./ButtonUtils";
import { entityCleanupAndAssignment } from "./ButtonUtils";

const apiFetch = (setQuestion,setCorrectAnswer,setWrongAnswer,resultButton,setResultButton)=>
{
    const ENDPOINT ="https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=multiple";
            fetch(ENDPOINT)
            .then((res)=>{
                return res.json();
            })
            .then((json)=>{
            const rand = Math.floor((Math.random() * 10) + 1);
                /*Created api for trivia question, set correct answer and wrong answer into one state (resultButton)*/ 
                const newQuestion = json.results[rand].question;
                const answer = json.results[rand].correct_answer;
                const incorrectAnswers = json.results[rand].incorrect_answers;

                entityCleanupAndAssignment(newQuestion,answer,incorrectAnswers,setQuestion,setCorrectAnswer,setWrongAnswer,resultButton,setResultButton)
                
        
                


            })
            .catch(err=>console.log(err))
}

export{apiFetch}