import { START_TIME ,STOP_TIME} from "./actionType";
const initialState = {
    text: ["a s d l ; j  d","d s s f l k a","f d s l ; s k","d a s d f l ;","s a d a l ; k","s a k l f ; d"," f f s s a a j","f a s d l k j"," j l ; a s g k"," s d a k l ; d","; l k j j d l","a s d f j k l","j f l d ; a l","s a l ; k j f","l k l k j a s","a s a s d f ;","k k k a s d j"] ,
    input: '',
    startingTime:0,
    endingTime:0
    
  };
 export const reducer=(state=initialState,{type,payload})=>{
        switch (type) {
            case START_TIME:
             return {...state,startingTime:+payload}
                break;
                case STOP_TIME:
             return {...state,endingTime:+payload}
                break;
        
            default:
                return state
        }
 }