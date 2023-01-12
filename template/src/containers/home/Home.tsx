import React from "react";
import {useNavigate} from "react-router-dom";




const Home =()=>{

    const navigate = useNavigate()

    return<div><button onClick={()=>{navigate("/personalization")}}> imad's home </button>  </div>
}




export default Home
