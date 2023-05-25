import { legacy_createStore,combineReducers } from "redux";
import { reducer} from "./touchTyping/reducer";

let rootReducer=combineReducers(
    {
        reducer
    }
)

export const store=legacy_createStore(rootReducer)