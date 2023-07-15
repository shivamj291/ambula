import { Routes, Route } from "react-router-dom";
import Practice from "../Todo/GetData";
import Post from "../Todo/Add";
import FetchTheData from "../Shoping";
import SingleProduct from "../Shoping/SingleProduct";
import Login from "../LogIn/Login";

import PrivateAuth from "../Private/Private";
import Cart from "../CartPage/Cart";
function Rout(){
    return (
        <div>
           <Routes>
              <Route path = "/" element={<FetchTheData/>}/>
              <Route path = "/todo" element={<PrivateAuth>
                  <Practice/>
              </PrivateAuth>}/>
              <Route/>
              <Route path = "/add" element={<Post/>}/>
              <Route path = "/login" element={<Login/>}/>
              <Route path="/cart" element={<Cart/>}/>
              <Route path="/:id" element={<SingleProduct/>}/>
           </Routes>
        </div>
    )
}
export default Rout;