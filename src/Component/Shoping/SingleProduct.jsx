import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom"
import { CartAction } from "../Redux/Action";

function SingleProduct(){

    

    const data = useSelector((store)=>{
        return store;
    })
    const[cartData,setCartData] = useState(data.cart);
    const {id} = useParams();
    useEffect(()=>{
       CartAction(cartData)
    },[cartData])
    const product = data.data?.filter((ele,i)=>{
        return id == ele.id;
    })
   

    function setCart(ele){
        
    
        const filtercart = data.cart?.filter((el,i)=>{
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
        <div style={{display:'flex',justifyContent:"center"}}>
            <div style={{marginTop:"40px"}}>
              <img src = {product[0].image} width="300px" height='400px' />
            </div>
            <div style={{marginTop:"40px"}}>

                <h3 style={{textAlign:"justify",padding:"0 20px"}}>{product[0].title}</h3>
                <h3 style={{textAlign:'left',padding:"0 20px"}}>Category: {product[0].category}</h3>
                <h4 style={{textAlign:'left',padding:"0 20px"}}>Price : ₹{product[0].price}</h4>
                <h3 style={{textAlign:'left',padding:"0 20px"}}>{product[0].brand}</h3>
                <button style={{textAlign:'left',padding:"5px 20px",color:"white",background:"teal",border:"none",margin:"5px",cursor:"pointer"}} onClick={()=>setCart(product[0])}>Add to Cart</button><br/>
                <button style={{textAlign:'left',padding:"5px 20px",color:"white",background:"teal",border:"none",margin:"5px"}}>Buy Now</button>
            </div>
         
        </div>
    )
}
export default SingleProduct