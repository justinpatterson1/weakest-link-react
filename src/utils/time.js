const timer = ((setTime,round,setRound,setTime2,setRoundPageVisible,setRoundText)=>
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
                    setRoundText("Round 2")
                    setRoundPageVisible(true)

                    let roundTime = 0
                    const roundInterval = setInterval(()=>{
                     
                        let timer = roundTime++
                        
                        if(timer === 2)
                        {
                            setRound(2)
                            
                            setRoundPageVisible(false)
                        }

                    },1000)
                    
                    setRound(2)
                   timerTwo(setTime2,setRound,setRoundPageVisible,setRoundText)
                   
                  
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


    const timerTwo =(setTime2,setRound,setRoundPageVisible,setRoundText)=>
    {
        let time = 0;
    
        
       
        const interval = setInterval(()=>{
            
                let timer = `${time++}`;

                setTime2(timer) 
                console.log("running")
                
                

                if(time === 90)
                {   
                    clearInterval(interval)
                    setRoundText("Round 3")
                    setRoundPageVisible(true)

                    let roundTime = 0

                    const roundInterval = setInterval(()=>{
                     
                        let timer = roundTime++
                        
                        if(timer === 2)
                        {
                            setRound(3)
                            setRoundPageVisible(false)
                        }

                    },1000)
                    
                   
                    
                }
    
        

    },1000)
}


const timeCheck = (setTime,round,setRound,setTime2,setRoundPageVisible,setRoundText)=>
{
    if(round===1)
    {
        timer(setTime,round,setRound,setTime2,setRoundPageVisible,setRoundText)
        
    }

    if(round ===2)
    {
        timerTwo(round,setRound,setTime2,setRoundPageVisible,setRoundText)
    
    }
}
    export {timer,timerTwo,timeCheck};