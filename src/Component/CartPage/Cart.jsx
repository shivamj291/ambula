import { useState } from "react"
import { useSelector } from "react-redux"
import CartShow from "./cartshow";

function Cart(){
    const cartData = useSelector((store)=>{
        return store
    })
    const[total,setTotal] = useState(0);
    var total2 = 0
     cartData.cart?.map((ele)=>{
       return (
        
            total2 = total2+ ele.price
        
       )
     })

  
    return (
        <div style={{margin:"50px"}}>
       
                {
                    cartData.cart.map((ele)=>{
                         
                        return <div style={{display:"flex",justifyContent:"center",gap:"40px",background:"gray"}}>
                            
                                 <CartShow price = {ele.price}
                                           img = {ele.image}
                                           title={ele.title}
                                           setTotal = {setTotal}
                                           total2 = {total2}
                                           total={total}
                                 />
                            </div>
                    })
                }
 <h1>Total: {total}</h1>
        </div>
    )
}
export default Cart