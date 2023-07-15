import store from "./store"

function MyAction(value){
   store.dispatch({
    type:"GETDATA",
    Payload:value
  })
}

export function AuthAction(value){
    store.dispatch({
     type:"LOGIN",
     Payload:value
   })
 }
 export function CartAction(value){
    store.dispatch({
     type:"CART",
     Payload:value
   })
 }
export default MyAction