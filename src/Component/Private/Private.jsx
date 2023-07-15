import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom";

function PrivateAuth({children}){
    const storeAuth = useSelector((store)=>{
        return store.Auth;
    })
  
    if(storeAuth){
        return children;
    }
    return <Navigate to="/login"/>
}
export default PrivateAuth