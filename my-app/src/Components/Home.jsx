import React from 'react'
import { useState ,useRef} from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { startTest,startTime,stopTime } from '../Redux/touchTyping/action'

const Home = () => {
    const [input,setInput]=useState("")
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
    const startTyping=()=>{
    
        inputRef.current.focus();
        let randomIndex=Math.floor(Math.random()*text.length) 
        setType(text[randomIndex]) 
        
        dispatch(startTime(performance.now()))
        setStart("Done")

    }
    const calculateSpeed=()=>{
            let correct_word=input.trim()==='' ? 0: input.trim().split(" ").length
            if(correct_word!==0){
                let speed=(correct_word/(-1*Math.ceil((endingTime-startingTime)/1000))*60)
               setMsg(`Your speed is ${speed} per minutes`)
            }
    }
     const stopTyping=()=>{
        
        dispatch(stopTime(performance.now()))
        console.log( -1*Math.ceil((endingTime-startingTime)/1000))
            setStart("Start")
            calculateSpeed()
            setType("")
            setInput("")
      
     }
    const startGame=()=>{
         switch (start) {
            case "Start": 
            
            inputRef.current.focus();  
           
            startTyping()
            
              break;
              case "Done":
              setMsg("")
                stopTyping()
                 

         }
          
         }
  return (
    <div>
        <div>
            <h2>{msg}</h2>
            <h2>{type}</h2>
        </div>
        <div>
            <input type="text" value={input} onChange={(e)=>setInput(e.target.value)} ref={inputRef} />
        </div>
        <div>
            <button onClick={startGame}>{start}</button>
        </div>
    </div>
  )
}

export default Home