import { useEffect, useState } from "react"

function CartShow({price,img,title,setTotal,total2,total}){
        const [qty,setQty] = useState(1);
        useEffect(()=>{
           setTotal(total2)
        },[])

        function setQtymin(){
            setQty(qty-1);
            console.log(price)
            setTotal(total-price)
        }
        function setQtyplus(){
            setQty(qty+1);
            setTotal(total+price)
        }
     
    return (
        <div>
                                   <div style={{display:"flex"}}>
                                  
                                       <div>
                                          <img src={img} alt="" width="170px" height="200px"style={{margin:"20px"}}/>
                                           <h4>{title}</h4>
                                       </div>
                                     
                                         <div style={{display:"flex",justifyContent:"center",height:"50px",margin:"auto",gap:"30px"}}>
                                             <button style={{height:"30px",border:"2px solid red"}} onClick={setQtyplus}>+</button>
                                             <>₹{price*qty}</>
                                            
                                              <button style={{height:"30px",border:"2px solid red"}} onClick={setQtymin} disabled={qty==1}>-</button>
                                              <button style={{textAlign:'left',padding:"0px 20px",color:"white",background:"teal",border:"none"}}>Buy Now</button>

                                         </div>
                                       
                                   </div>
        </div>
    )
}
export default CartShow