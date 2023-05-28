import React from 'react'
import { useState ,useRef} from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { startTest,startTime,stopTime } from '../Redux/touchTyping/action'  
import '../Styles/Home.css'
const Home = () => {
    const [input,setInput]=useState("")
    const [showtimer,setShowtimer]=useState("")
    const [intervalId, setIntervalId] = useState(null);
    const [timeSpend,setTimespend]=useState(0)
    // const [InputDisabled,setInputDisabled] = useState(false);
    const [msg,setMsg]=useState("")
    const [type,setType]=useState("")
    const [start,setStart]=useState("Start")
    const inputRef = useRef(null);
    // const {text, startingTime,endingTime}=useSelector((s)=>{
    // })
    const text=useSelector((s)=>s.reducer.text)
    const startingTime=+useSelector((s)=>s.reducer.startingTime)
    const endingTime=+useSelector((s)=>s.reducer.endingTime)
    // console.log(startTime,endingTime)
    const dispatch = useDispatch();
    const  showTimer=()=>{

        
           const Id=setInterval(()=>{
                    setTimespend(prev=>prev+1)
                
                  },1000)
                  setIntervalId(Id)
    }
    const startTyping=()=>{
    
        inputRef.current.focus();
        let randomIndex=Math.floor(Math.random()*text.length) 
        setType(text[randomIndex]) 
        setMsg("")
        dispatch(startTime(performance.now()))
       
         showTimer();

    }
    const errorcheck=(word)=>{
          let num=0
          let str=type
          str=str.trim().split(" ")
          let str2=input
          str2=str2.trim().split(" ")
          for(let i=0;i<str2.length;i++){
            if(str2[i]===str[i]){
                num++
            }
          }
          return num
    }
    const calculateSpeed=()=>{
            let correct_word=input.trim()==='' ? 0: input.trim().split(" ").length
            let str=type
          str=str.trim().split(" ")
            let a=errorcheck()
           let accuracy=Math.ceil((a/str.length)*100)
            if(correct_word!==0){
                let speed=Math.ceil( ( correct_word/(-1*Math.ceil((endingTime-startingTime)/1000))*60))
               setMsg(`Your speed is ${speed} word per minutes and accuracy is ${accuracy} %`)
               clearInterval(intervalId)
               setTimespend(0)
            }
            else{
                setMsg('You must have to type first')
                clearInterval(intervalId)
               setTimespend(0)
            }
    }
     const stopTyping=()=>{
        
        dispatch(stopTime(performance.now()))
        // console.log( -1*Math.ceil((endingTime-startingTime)/1000))
            setStart("Start")
            calculateSpeed()
            setType("")
            setInput("")
      
     }
    const startGame=()=>{
         switch (start) {
            case "Start": 
            setStart("Done")
            inputRef.current.focus();  
           
            startTyping()
            
              break;
              case "Done":
             clearInterval(intervalId)
            
              setMsg("")
                stopTyping()
         }
            
         }
  return (
    
        <div className='mainDiv'>
            <div className='centerDiv'>
               <h1 >Welcome To Typing Speed Test</h1>
               <div className='timer-div'>
                <p className='show-time'>{timeSpend}</p>
               </div>
               <h2>{msg}</h2>
               {type && <h2>Type 👉 {type}</h2>} 
               <input className='typeArea' type="text" value={input} onChange={(e)=>setInput(e.target.value)} ref={inputRef} />
               <br />
               <button className='mainBtn' onClick={startGame}>{start}</button>
            </div>
        </div>
       
    
  )
}

export default Home