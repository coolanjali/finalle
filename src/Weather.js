import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";
import Forecast from "./Forecast";
export default function Weather() {
  let [city, setCity] = useState("");
  let [temperature, setTemperature] = useState(null);
  let [humidity, setHumidity] = useState(null);
  let [wind, setWind] = useState(null);
  let [icon, setIcon] = useState(null);
  let [description, setDescription] = useState(null);
  let [loaded, setLoaded] = useState(false);
  let [displayCity, setDisplayCity] = useState(null);
  let [setcoord, cordSetting]=useState("");

  function callTemperature(response) {
    setTemperature(response.data.main.temp);
    setHumidity(response.data.main.humidity);
    setWind(response.data.wind.speed);
    setDescription(response.data.weather[0].description);
    setIcon({
      Icon: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });
    setDisplayCity(response.data.name);
    setLoaded(true);
    cordSetting({
        coordinates:response.data.coord,
    });
  }
  function changeForm(event) {
    event.preventDefault();
    let apiKey = "e292e53be8a0b0afa984b45848e5d6c9";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(callTemperature);
  }
  function changeCity(event) {
    setCity(event.target.value);
  }

  let Weather = (
    <div className="container">
      <h2>Searching for City Weather ....</h2>
      <form className="formControl" onSubmit={changeForm}>
        <input
          type="search"
          placeholder="Enter city name"
          onChange={changeCity}
        />
        <input type="submit" placeholder="Search" className="btn btn-primary" />
      </form>
      <figure className="figure">
        <img
          src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
          alt="..."
        />
        <figcaption className="figure-caption">
          5:10pm on Wednesday,October 26
        </figcaption>
      </figure>
      <span className="temperatureMeasure">
        10° <a href="/">C</a>/<a href="/">F</a>
      </span>
      <div className="heading">
        <h3>Paris</h3>
        <ul>
          <li>Wind:50%</li>
          <li>Humidity:12 Km/h</li>
          <li>Cloudy</li>
        </ul>
      </div>
      <footer>
        Open Source coded by Priyanka in{" "}
        <a href="https://github.com/coolanjali/happy">Github</a>
      </footer>
    </div>
  );

  if (loaded) {
    return (
      <div className="container">
        <h2>Searching for City Weather ....</h2>
        <form className="formControl" onSubmit={changeForm}>
          <input
            type="search"
            placeholder="Enter city name"
            onChange={changeCity}
          />
          <input
            type="submit"
            placeholder="Search"
            className="btn btn-primary"
          />
        </form>
        <figure className="figure">
          <img src={icon.Icon} alt="..." />
          <figcaption className="figure-caption">
            5:10pm on Wednesday,October 26
          </figcaption>
        </figure>
        <span className="temperatureMeasure">
          {Math.round(temperature)}° <a href="/">C</a>/<a href="/">F</a>
        </span>
        <div className="heading">
          <h3>{displayCity}</h3>
          <ul>
            <li>Wind: {Math.round(wind)}%</li>
            <li>Humidity:{Math.round(humidity)} Km/h</li>
            <li>{description}</li>
          </ul>
        </div>
        <Forecast cordinate={setcoord.coordinates}/>

        <footer>
          Open Source coded by Priyanka in{" "}
          <a href="https://github.com/coolanjali/happy">Github</a>
        </footer>
      </div>
    );
  } else {
    return Weather;
  }
}