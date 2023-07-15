import { useState } from "react"
import { AuthAction } from "../Redux/Action"
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Login(){
   const [input,setInput] = useState({
    Email:"",
    Password:""
   })
   var navigate = useNavigate();
   var store = useSelector((store)=>{
    return store.Auth
   })
   function LoginClick(e){
      e.preventDefault();
      if(input.Email == "jaiswalshivam9399@gmail.com" && input.Password == "jaiswal9399"){
        console.log("shivam login")
        navigate("/todo");
         AuthAction(true);
         
      }else{
         alert("Wrong credential")
      }
   }
   console.log(store)
    return (
        <div>

            <form action="" style={{background:"gray",padding:"20px",width:"40%",margin:"50px auto"}} onSubmit={(e)=>{LoginClick(e)}}>
                    <input type="text" placeholder="EMAIL" onChange={(e)=>setInput({...input,Email:e.target.value})}  style={{padding:"10px 100px",marginTop:"40px"}} /><br/>
                    <input type="text" placeholder="PASSWORD" onChange={(e)=>setInput({...input,Password:e.target.value})}  style={{padding:"10px 100px",marginTop:"40px"}}/><br/>
                    <input type="submit" style={{padding:"12px 30px",marginTop:"40px",marginLeft:"2px",color:"white",background:"teal",border:"none"}}/>
            </form>
           

         
        </div>
    )
}
export default Login