import { useDispatch, useSelector } from "react-redux"
import ItemList from "./ItemList"
import { clearCart } from "../constants/CartSlice"

const Cart=()=>{
  
  const dispatch=useDispatch()
  const handleclearcart=()=>{
         dispatch(clearCart())
}
  const cartItems=useSelector((store)=> store.cart.items)
  return (<div className=" text-center m-4 p-4">
    <h1 className="text-2xl font-bold">This is our cart</h1>
    <div className="w-6/12 m-auto">
    {cartItems.length===0 && <h1>cart is empty add items to the cart</h1>}
      <ItemList items={cartItems}/>
    </div>
    <div>
      <button className="p-2 m-2 bg-black text-white rounded-lg" onClick={handleclearcart}>Clear</button>
    </div>
    </div>
)
       
}
export default Cart