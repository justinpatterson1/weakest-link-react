const timer = ((setTime,round,setRound,setTime2)=>
    { 
        let min= 0;
        let time = 0;
        let sec = 0;
        
       
        const interval = setInterval(()=>{
            if(round === 1){
                let timer = `${min}:${sec}${time++}`;

                setTime(timer) 
                
                
                if(sec == 5 && time==9 )
                { 
                    time=0;
                    sec=0;
                     min++
                
                }
                if(time==9)
                {
                     sec++;
                     time=0;
                }

                if(min == 2 || round == 2)
                {
                    clearInterval(time)
                    setRound(2)
                   timerTwo(setTime2,setRound)
                  
                }
    
               /* if(min == 1)
                {
                    clearInterval(time)
                }*/
                if(round === 2)
                {
                
                   
                   
                }
            }

           


            
           

        },1000)
    })


    const timerTwo =(setTime2,setRound)=>
    {
        let time = 0;
    
        
       
        const interval = setInterval(()=>{
            
                let timer = `${time++}`;

                setTime2(timer) 
                console.log("running")
                
                

                if(time === 90)
                {   
                    clearInterval(time)
                    
                    setRound(3)
                    alert("kkk")
                }
    
                /*if(time == 0)
                {
                    
                }*/
        

    },1000)
}


const timeCheck = (setTime,round,setRound,setTime2)=>
{
    if(round===1)
    {
        timer(setTime,round,setRound,setTime2)
    }

    if(round ===2)
    {
        timerTwo(round,setRound,setTime2)
    }
}
    export {timer,timerTwo,timeCheck};