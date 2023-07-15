
var data = {
    data:[],
    cart:[],
    Auth:false
}

function counterReducer(state = data , action) {
  switch (action.type) {
    case 'GETDATA':
      return state={
        ...state,
        data:action.Payload
      }
      case 'CART':
            return state={
              ...state,
              cart:action.Payload
            }
    case 'LOGIN':
        return state={
          ...state,
          Auth:action.Payload
        }
        
    
    default: return state
  }
}
export default counterReducer