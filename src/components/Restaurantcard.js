import { useContext } from "react";
import Usercontext from "../constants/UserContext";

//import './index.css';
const Restaurantcard=(props)=>{
  const{LoggedinUser}=useContext(Usercontext)
  const {resdata}=props
    const{name,cuisines,avgRating,deliveryTime,costForTwo,cloudinaryImageId}=resdata?.info;
     return(
       <div className='m-4 p-4 w-[250px] rounded-xl ' style={{backgroundColor:"#f0f0f0"}}>
         <img className="rounded-lg" alt="res-logo" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+cloudinaryImageId}/>
        <h3 className="font-bold py-4 text-xl">{name}</h3>
         <h4>{cuisines.join(",")}</h4>
         <h4>{costForTwo}</h4>
         <h4>{avgRating}stars</h4>
         <h4>{deliveryTime}mins</h4>
         <h4>{LoggedinUser}</h4>
   </div>
     )
   }
    export const withPromotedLabel=(Restaurantcard)=>{
    return(props)=>{
      return(
        <div>
          <label className="absolute bg-black text-white m-2 p-2 rounded-lg">opened</label>
          <Restaurantcard {...props}/>
        </div>
      )
    }
   }
   export default Restaurantcard;