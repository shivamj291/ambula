import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import MyAction, { CartAction } from "../Redux/Action";
import { useSelector } from "react-redux";


function FetchTheData(){
    const [data,setData] = useState([]);

    var storedata = useSelector((store)=>{
        return store;
    })
    const[cartData,setCartData] = useState(storedata.cart);
    console.log(cartData)
    
    useEffect(()=>{
        CartAction(cartData)
        fetch("http://localhost:8000/data")
        .then((res)=>res.json())
        .then((data2)=>{
            MyAction(data2);
            setData(data2)   
        })
    },[cartData])

    
      function setCart(ele){
        const filtercart = storedata.cart.filter((el,i)=>{
            return ele.id == el.id
        })
        if(filtercart == 0 ){
            alert("Added in cart")
            setCartData([...cartData,ele])
        }else{
            alert("Allready added in cart");
        }
        
       }
         
    
        
    
    return (
        <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:"30px",width:"98%",margin:"20px auto"}}>
          {
            data.map((ele,i)=>{
                return <div key={i} style={{boxShadow:"0 0 10px gray",padding:"20px"}}>
                
                      
                        <Link to={`${ele.id}`}>
                            <img src={ele.image} alt="" width='40%' height="250px"/>
                            <p>{ele.title}</p>
                            <p>₹{ele.price}</p>
                          
                        </Link>
                        <button style={{textAlign:'left',padding:"5px 20px",color:"white",background:"teal",border:"none",margin:"5px",cursor:"pointer"}} onClick={()=>setCart(ele)}>Add to Cart</button>
                      
    
                  
                </div>
            })
          }
        </div>
    )
        }

export default FetchTheData