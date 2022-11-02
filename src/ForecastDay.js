import React from "react";
export default function ForecastDay(props){
    function maxTemperature(){
        let max=Math.round(props.forecast.temp.max);
        return`${max}°`;
    }
    function minTemperature(){
        let min=Math.round(props.forecast.temp.min);
        return`${min}°`;
    }
    function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }

    return(
         <div>
          <div className="WeatherForecast-day">{day()}</div>
            <div className="forecast Temperature">
                <span className="forecast max"><strong>{maxTemperature()}</strong></span>
               <span className="forecast min">{minTemperature()}</span>
            </div>
            </div>
            
    );
}