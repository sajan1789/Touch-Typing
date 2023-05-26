import { START_TIMER,STOP_TIMER,STOP_TIME, START_TIME} from "./actionType";
 
export const startTest=()=>{
     return {type:START_TIMER}
}
 export const startTime=(payload)=>{
     return {type:START_TIME,payload}
 }
 export const stopTime=(payload)=>{
    return {type:STOP_TIME,payload}
}