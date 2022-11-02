import React,{useState} from "react";
import axios from "axios";
import ForecastDay from "./ForecastDay";
export default function Forecast(props){
let [loaded,setLoaded]=useState(false);
let [weather,weatherForecast]=useState(null);
function changeForecast(response){
    console.log(response.data);
    weatherForecast(response.data.daily);
    setLoaded(true);
}
   let lat=props.cordinate.lat;
    let long=props.cordinate.lon;
    let apiKey = "e292e53be8a0b0afa984b45848e5d6c9";
    let url=`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&appid=${apiKey}&units=metric`;  
    axios.get(url).then(changeForecast);

if(loaded){ 
return(
       <div className="weatherdata">
        <div className="row">
        <div className="col">
         <ForecastDay forecast={weather[0]}/>
        </div>
        </div>
        </div>
       );
}else{
    
    return null;
}
}
