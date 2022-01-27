import { combineReducers } from "redux";
import productReducer from './reducer/reducer'

const rootReducer = combineReducers({
    pReducer: productReducer,
});

export default rootReducer;