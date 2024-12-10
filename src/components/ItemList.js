import { useDispatch } from "react-redux"
import { addItems} from "../constants/CartSlice";
const ItemList=({items})=>{
  const dispatch=useDispatch();
  const handleadditem=(item)=>{
          dispatch(addItems(item))
  }
  //console.log(items);
 return (
  (items &&
 <div>
             {items.map((item)=>{
                return<div key={item.card.info.id} className="p-2 m-2  border-gray-200 border-b-2 shadow-lg text-left flex justify-between">
                       <div className="w-9/12">
                  <div className="py-2">
                    <span>{item.card.info.name}</span>
                    <span>-₹{item.card.info.price?item.card.info.price/100:item.card.info.defaultPrice/100 }</span>          
                </div>
                <p className="text-xs"><span>{item.card.info.description}</span></p>
                </div>
                <div className="w-3/12 p-4">
                 <div className="absolute">
                 <button className="p-2 mx-16 rounded-lg bg-black text-white shadow-lg " onClick={()=>handleadditem(item)}>Add+</button>
                 </div>
                 <img  src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+item.card.info.imageId} className="w-full py-4"/>
                  </div>
                </div>
            })}
         </div>
  )
)

}
export default ItemList;