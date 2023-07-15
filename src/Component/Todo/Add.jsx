import { useState } from "react";

function Post(){
    
    var [inputdata,setInputdata]=useState({
        title:"",
        description:"",
        price:"",
        brand:"",
        category:"",
        image:"",
        status:false
    });

    function add(event){
        event.preventDefault();
        console.log(inputdata)
        var obj = inputdata;
         console.log(obj)
        try{
            fetch(`http://localhost:8000/data`,{
                method:"POST",
                headers:{
                  'content-type':'application/json'
                },
              body:JSON.stringify(obj)
             }).then((data)=>alert("data has been added"))
        }catch(err){
            alert("something went wrong")
        }
        
    }
  

   return(
    <div>
        <form action="" style={{background:"gray",padding:"20px",width:"40%",margin:"50px auto"}} onSubmit={(e)=>add(e)}>
          <input placeholder="Title" onChange={(e)=>(setInputdata({...inputdata,title:e.target.value}))} style={{padding:"10px 100px",marginTop:"40px"}}/><br/>
          <input placeholder="Description" onChange={(e)=>(setInputdata({...inputdata,description:e.target.value}))} style={{padding:"10px 100px",marginTop:"20px"}}/><br/>
          <input placeholder="Price" onChange={(e)=>(setInputdata({...inputdata,price:e.target.value}))} style={{padding:"10px 100px",marginTop:"20px"}}/><br/>
          <input placeholder="Brand" onChange={(e)=>(setInputdata({...inputdata,brand:e.target.value}))} style={{padding:"10px 100px",marginTop:"20px"}}/><br/>
          <input placeholder="Category" onChange={(e)=>(setInputdata({...inputdata,category:e.target.value}))} style={{padding:"10px 100px",marginTop:"20px"}}/><br/>
          <input placeholder="Image Url" onChange={(e)=>(setInputdata({...inputdata,image:e.target.value}))} style={{padding:"10px 100px",marginTop:"20px"}}/><br/>
         
          <input type="submit" style={{padding:"12px 30px",marginTop:"40px",marginLeft:"2px",color:"white",background:"teal",border:"none"}}/>
        </form>
         
         
     
    </div>
   )
}

export default Post
