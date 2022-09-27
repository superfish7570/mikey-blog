import {legacy_createStore as createStore,combineReducers} from "redux";
import {homeManagePageReducer} from "./reducer";

const rootReducer = combineReducers({
    homeManagePageReducer
})
const store= createStore(rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());


export default store;