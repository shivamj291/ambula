import  { applyMiddleware ,createStore} from "redux"
import logger from 'redux-logger'
import reducer from "./Reducer"

const store = createStore(reducer, applyMiddleware(logger))
console.log(store)
export default store;