import { useEffect, useState } from "react";

export default function QuizProgress({timeout, onTimeout}){

    const [remainingTime, setRemainingTime]=useState(timeout);
    // console.log('remainingTime',remainingTime);
    useEffect(()=>{
        //   console.log('setting timeout');
    const timer= setTimeout(onTimeout, timeout);
    return()=>{
        clearTimeout(timer);
    }
    },[onTimeout, timeout]
)
    

    useEffect(()=>{
        console.log('setting interval');
    const interval= setInterval(()=>{
        setRemainingTime(prevRemainingTime=> prevRemainingTime - 100);
    },100);
    return ()=>{
        clearInterval(interval);
    }
    }, [])
    

    return(
        <progress id="question-time" min={0} max={timeout} value={remainingTime}/>    
    )

}