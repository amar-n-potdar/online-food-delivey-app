import Header from "./Header";
import { useParams } from "react-router-dom";
import useRestaurantMenu from '../constants/useRestaurantMenu';
import RestaurantCategory from "./RestaurantCategory";
const RestaurantMenu=()=>{
    const {resId}=useParams();
    const resinfo=useRestaurantMenu(resId)
    
    
    if(resinfo===null) return <Header />
      const{name,city,costForTwoMessage}=resinfo?.cards[2]?.card?.card?.info
     // const {itemCards}=resinfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
      //console.log(resinfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards);
      
      const categories=resinfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c)=>{
        return(
            c?.card?.card?.["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
             )
      })
      console.log(categories);
      

    return(
        <div className="text-center">
            <h1 className="font-bold my-6 text-2xl:">{name}</h1>
            <p className="font-bold">
                {city}-{costForTwoMessage}
            </p>
           {
            categories.map((category)=>{
               return(
                <RestaurantCategory 
                key={category?.card?.card.title}
                data={category?.card?.card}/>
               )
            })
           }
         
        </div>
    )
}
export default RestaurantMenu;