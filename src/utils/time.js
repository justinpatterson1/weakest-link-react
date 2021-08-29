const timer = ((setTime,round,setRound,setTime2,setRoundPageVisible,setRoundText,bank,setGameScreen,setHomeScreen,pause)=>
    { 
        let min= 0;
        let time = 0;
        let sec = 0;
        let timer =0;
        
       
    
            const interval = setInterval(()=>{
           
            if(round === 1){
                

                 timer = `${min}:${sec}${time++}`;
               
                setTime(timer) 
                if(pause == true) {

                    clearInterval(interval)
                
                }
                
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
                    clearInterval(interval)
                    setRoundText("Round 2")
                    setRoundPageVisible(true)

                    let roundTime = 0
                    const roundInterval = setInterval(()=>{
                     
                        let timer = roundTime++
                        
                        if(timer === 2)
                        {
                            clearInterval(roundInterval)
                            setRound(2)
                            
                            setRoundPageVisible(false)
                        }

                    },1000)
                    
                    setRound(2)
                   timerTwo(setTime,round,setRound,setTime2,setRoundPageVisible,setRoundText,bank,setGameScreen,setHomeScreen,pause)
                   
                  
                }
    
            
               
            }

           
            

            
           

            },1000)
        
    })


    const timerTwo =(setTime,round,setRound,setTime2,setRoundPageVisible,setRoundText,bank,setGameScreen,setHomeScreen,pause)=>
    {
        let time = 0;
    
        
       
        const interval = setInterval(()=>{
            
                let timer = `${time++}`;

                setTime2(timer) 
                console.log("running")
                
                

                if(time === 90)
                {   
                    clearInterval(interval)
                     
                   /* setRoundText("Round 3")
                    
                    setRoundPageVisible(true)*/
                    
                    
                
                    

                    if(bank == 0){
                        
                        setGameScreen({visible:false})
                        setRoundText("Game Over")
                        setRoundPageVisible(true)
                        
                        setRound(1)

                        let roundTime = 0

                        const roundInterval = setInterval(()=>{
                         
                            let timer = roundTime++
                            
                            if(timer === 2){
                                
                                clearInterval(roundInterval)

                                setRoundPageVisible(false)
                                setHomeScreen({visibile:true});
                            }
    
                        },1000)
                        
                    }
                    else{
                        setRound(3)
                        setRoundText("Round 3")
                    
                        setRoundPageVisible(true)
                        let roundTime = 0

                        const roundInterval = setInterval(()=>{
                         
                            let timer = roundTime++
                            
                            if(timer === 2)
                            {
                                
                                clearInterval(roundInterval)
                                
                                //setRoundPageVisible(false)
                                setRoundPageVisible(false)
                            }
    
                        },1000)
                        
                    }

                    
                    
                   
                    
                }
    
        

    },1000)
}


const timeCheck = (setTime,round,setRound,setTime2,setRoundPageVisible,setRoundText,bank,setGameScreen,setHomeScreen,pause)=>
{
    if(round===1)
    {
        timer(setTime,round,setRound,setTime2,setRoundPageVisible,setRoundText,bank,setGameScreen,setHomeScreen,pause)
        
    }

    if(round ===2)
    {
        timerTwo(setTime,round,setRound,setTime2,setRoundPageVisible,setRoundText,bank,setGameScreen,setHomeScreen,pause)
        
    }
}
    export {timer,timerTwo,timeCheck};