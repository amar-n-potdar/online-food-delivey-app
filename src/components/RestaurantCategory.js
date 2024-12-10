import { useState } from "react";
import ItemList from "./ItemList";
const RestaurantCategory=(props)=>{
    const[showitems,Setshowitems]=useState(false);
    const{data}=props;
    const handlclick=()=>{
        return(
        Setshowitems(!showitems))
    }
  return(
        <div>
            {}
            <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4 ">
            <div className="flex justify-between cursor-pointer"  onClick={handlclick}>
                <span className="font-bold text-lg">{data.title} ({data.itemCards.length})</span>
                <span>⬇️</span>
                </div>
               {showitems && <ItemList items={data.itemCards}/> }
            </div>
            </div>
    )
}
export default RestaurantCategory;