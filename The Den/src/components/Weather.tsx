import "../css/weather.css";
import search_icon from "../assets/weather/search.png";
import clear_icon from "../assets/weather/clear.png";
import cloud_icon from "../assets/weather/cloud.png";
import drizzle_icon from "../assets/weather/drizzle.png";
import rain_icon from "../assets/weather/rain.png";
import snow_icon from "../assets/weather/snow.png";
import wind_icon from "../assets/weather/wind.png";
import humidity_icon from "../assets/weather/humidity.png";
import { useEffect, useRef, useState } from "react";

const Weather = () => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [weatherData, setWeatherData] = useState(false);

  const allIcons = {
    "01d": clear_icon,
    "01n": clear_icon,
    "02d": cloud_icon,
    "02n": cloud_icon,
    "03d": cloud_icon,
    "03n": cloud_icon,
    "04d": drizzle_icon,
    "04n": drizzle_icon,
    "09d": rain_icon,
    "09n": rain_icon,
    "10d": rain_icon,
    "10n": rain_icon,
    "13d": snow_icon,
    "13n": snow_icon,
  };

  const search = async (city: string) => {
    if (city === "") {
      alert("Enter City Name");
      return;
    }
    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${"65eb447cded4c815b04684dd5aa3477f"}`;
      const response = await fetch(url);
      const data = await response.json();

      if (!response.ok) {
        alert(data.message);
        return;
      }

      console.log(data);
      let dataIcon: string = data.weather[0].icon;
      const icon = allIcons[dataIcon as keyof typeof allIcons] || clear_icon;
      setWeatherData({
        // @ts-ignore
        humidity: data.main.humidity,
        windSpeed: data.wind.speed,
        temperature: Math.floor(data.main.temp),
        location: data.name,
        icon: icon,
      });
    } catch (error) {
      setWeatherData(false);
      console.error("Error in fetching weather data.");
    }
  };

  useEffect(() => {
    search("New York");
  }, []);

  return (
    <div className="weather">
      <div className="searchBar">
        <input ref={inputRef} type="text" placeholder="Search" />
        <img
          src={search_icon}
          alt="search icon"
          // @ts-ignore
          onClick={() => search(inputRef.current.value)}
        />
      </div>
      {weatherData ? (
        <>
          <img
            // @ts-ignore
            src={weatherData.icon}
            alt="clear icon"
            className="weatherIcon"
          />
          <p className="temperature">
            {
              // @ts-ignore
              weatherData.temperature
            }
            °F
          </p>
          <p className="location">
            {
              // @ts-ignore
              weatherData.location
            }
          </p>
          <div className="weatherData">
            <div className="col">
              <img src={humidity_icon} alt="humidity" />
              <div>
                <p>
                  {
                    // @ts-ignore
                    weatherData.humidity
                  }{" "}
                  %
                </p>
                <span>Humidity</span>
              </div>
            </div>
            <div className="col">
              <img src={wind_icon} alt="wind" />
              <div>
                <p>
                  {
                    // @ts-ignore
                    weatherData.windSpeed
                  }{" "}
                  Km/h
                </p>
                <span>Wind Speed</span>
              </div>
            </div>
          </div>
        </>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Weather;
