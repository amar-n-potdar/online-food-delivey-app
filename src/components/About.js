import { useContext } from "react";
import Usercontext from "../constants/UserContext";

const About=()=>{
    const{LoggedinUser}=useContext(Usercontext)
    return(
        <><h1>
            About us
        </h1>
        <h2>This is namaste react web series</h2>
        <h3>{LoggedinUser}</h3>
        </>
    )
}
export default About;