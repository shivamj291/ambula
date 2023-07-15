import {useEffect,useState} from "react"
import { useSelector } from "react-redux";
import MyAction from "../Redux/Action";


function Practice(){
    const[data,setData]=useState([]);
    
    const[totalCompleted,setTotalCompleted] = useState(0)

    const[page,setPage]=useState(1);
    const[load,setLoad]=useState(false);
  
    const[toggle,setToggle]=useState(true);

    useEffect(()=>{
        getTodos(page);
        totalCartdisplay();
     },[page])
    const totalCart = useSelector((store)=>{
      return store.data;
    })
    console.log(totalCart)

     async function totalCartdisplay(){
        try{
            setLoad(true);
            var resp= await fetch(`http://localhost:8000/data`);
                let data=await resp.json();
                MyAction(data);

                let totalcompletedData = data?.filter((ele,i)=>{
                      return ele.status==true;
                })
                
                setTotalCompleted(totalcompletedData.length);
                console.log(totalCompleted)
              
                setLoad(false);
        }catch(error){
             console.log(error);
             setLoad(false)
        }
     }
 function handletoggle(ele,i){
  
  const obj = {
    title:ele.title,
    status:!ele.status
  };
 console.log(obj)
 
  
  fetch(`http://localhost:8000/data/${i}`,{
    method:"PATCH",
    headers:{
      'content-type':'application/json'
    },
  body:JSON.stringify(obj)
 }).then(()=>{getTodos(page)
              totalCartdisplay()})
}


    const getTodos = async (p=1) =>{
        try{
            setLoad(true);
            var resp= await fetch(`http://localhost:8000/data?_page=${p}&_limit=5`);
                let data=await resp.json();
                console.log(data)
                setData(data);
                setLoad(false);
        }catch(error){
             console.log(error);
             setLoad(false)
        }
      }

      // stamurai


     function handledelete(id){
      fetch(`http://localhost:8000/data/${id}`,
      {
        method:"DELETE"
      }
      ).then(()=>{
        getTodos(page)
        totalCartdisplay()
      })
      }

     function nextPageDisable(){

        var nextPage = totalCart.length/5;
        
         if(totalCart.length%5==0){
            return nextPage
         }else{
          return nextPage+1
         }
     }
   
     return(
        <div id="pra">

                      
            <h1>{"Total Completed -->" +" "+ totalCompleted}</h1>
           
            <div>{load ? <h3>Loading...</h3> : null}</div>
          
        
            <h1> {"Total Cart -->"+" "+ totalCart.length}</h1>
                                <table border="2" style={{margin:"40px auto"}}>
                                    <thead>
                                    <tr>
                                        <th style = {{background:"green"}}>S.No.</th>
                                        <th style = {{background:"green"}}>PRODUCT</th>
                                        <th style = {{background:"green"}}>PRICE</th>
                                        <th style = {{background:"green"}}>CURRENT STATUS</th>
                                        <th style = {{background:"green"}}>DELETE</th>
                                        <th style = {{background:"green"}}>CHANGE STATUS</th>
                                        <th style = {{background:"green"}}>Image</th>
                                       
                                    </tr>
                                    </thead>
                                    <tbody>
                                         
                                 {
                                        data?.map((ele,i)=>(
                                        
                                        <tr key={i}>
                                            
                                            <td style = {{background:"pink",padding:"10px 20px"}}>{i+1+(page*5-5)}</td>
                                            <td style = {{background:"pink",padding:"10px 20px"}}>{ele.title}</td>
                                   
                                            <td style = {{background:"pink",padding:"10px 20px"}}>₹{ele.price}</td>
                                            <td style = {{background:"pink",padding:"10px 20px"}}>{ele.status ? "Completed":"Not Completed"}</td>
                                            <td style = {{padding:"10px 20px",background:"pink"}}>
                                               <buttom onClick={()=>handledelete(ele.id)} style={{background:"teal",padding:"3px 20px",borderRadius:"10px",color:"white",cursor:"pointer"}}>REMOVE</buttom>
                                            </td>
                                            <td style = {{background:"pink",padding:"10px 20px"}}>
                                              <buttom onClick={()=>handletoggle(ele,ele.id)} style={{background:"teal",padding:"3px 20px",borderRadius:"10px",color:"white",cursor:"pointer"}}>Change Status</buttom>
                                            </td>
                                            <td style = {{background:"pink",padding:"10px 20px"}}>
                                              <a href={ele.image}>ImageUrl</a>
                                            </td>
                                        </tr>
                                    
                                       ))
                                  }
                                  </tbody>
                                  </table>
                                  <button disabled={page==1} onClick={()=>setPage((page)=> page -1)} style={{cursor:"pointer"}}>pre</button>
                                  <button disabled={page == Math.floor(nextPageDisable())} onClick={()=>setPage((page) => page + 1)} style={{cursor:"pointer"}}>next</button>
        
                         </div>
               )
   
}
export default Practice





