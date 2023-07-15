import { Link, useNavigate } from "react-router-dom"
import Rout from "../../Routing/Rout"
import style from "../Navbar/Navbar.css"
import { useSelector } from "react-redux"
import { AuthAction } from "../../Redux/Action"
function Navbar(){
     const store = useSelector((store)=>{
        return store.Auth
     })
     const Navigate = useNavigate();
     function logoutAuth(){
        AuthAction(false);
        Navigate("/")
     }
    return (
        <div>
        <>
        {
            !store ?
                <div style={{display:"flex",justifyContent:"space-around", background:"black"}}>
                
                    <Link to = "/" className="linkstyle">Home</Link>
                    <Link to = "/login" className="linkstyle">Login</Link>
                    <Link to = "/todo" className="linkstyle"> Todo</Link>
                    <Link to = "/cart" className="linkstyle"> Cart</Link>
                </div> :
                <div style={{display:"flex",justifyContent:"space-around", background:"black"}}>
                    <Link to = "/" className="linkstyle">Home</Link>
                    <Link to="/todo"  className="linkstyle">All Data</Link>
                    <Link to="/add" className="linkstyle">AddData</Link>
                    <a onClick={()=>logoutAuth()} className="linkstyle">Logout</a>
               </div>
       }
        </>
   

         
         <Rout/>
        </div>
       
    )
}
export default Navbar